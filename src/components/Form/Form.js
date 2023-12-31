import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAxios, getAxiosConfig } from "./config/axiosConfig";
import SingleForm from "./SingleForm";
import PropTypes from "prop-types";

const Form = ({
  template,
  buttons,
  submit,
  validationSchema,
  inputContainer,
  preloadValues,
}) => {
  const [customInputs, setCustomInputs] = useState({});
  const [loaders, setLoaders] = useState({
    submit: false,
  });

  const getinitialValues = () => {
    let initialValues = {};
    template.forEach((fieldObj) => {
      const { input, render } = fieldObj;

      if (render) {
        initialValues = { ...initialValues, ...customInputs };
      } else if (input?.type === "checkbox" || input?.type === "radio") {
        if (input.checked !== undefined && input.checked) {
          initialValues[`${input?.name}`] = input.checked;
        } else {
          initialValues[`${input?.name}`] = false;
        }
      } else {
        if (input.value !== undefined && input.value !== "") {
          initialValues[`${input?.name}`] = input.value;
        } else {
          initialValues[`${input?.name}`] = "";
        }
      }
    });
    return initialValues;
  };

  const getValidationSchema = () => {
    return Yup.object({ ...validationSchema });
  };

  const getCustomInputDetails = () => {
    let customInputsArray = document.querySelectorAll(`input[data-fr]`);
    let cutsomInputDetails = [];
    customInputsArray.forEach((input) => {
      cutsomInputDetails.push({ type: input.type, name: input.name });
    });

    return cutsomInputDetails;
  };

  const getCustomIntialValuesFromRender = () => {
    let values = {};
    template.forEach((input) => {
      if (input.render) {
        if (typeof input.render !== "function") {
          values = { ...values, ...input.render.customInitialValues };
        }
      }
    });
    return values;
  };

  const getInitialValuesForRenderMehtod = () => {
    let customInputData = getCustomInputDetails();
    let customIntialValues = getCustomIntialValuesFromRender();
    let customInputinitialValues = {};
    customInputData.length > 0 &&
      customInputData.forEach((input) => {
        if (input.type !== "button") {
          if (input?.type === "checkbox" || input?.type === "radio") {
            customInputinitialValues[`${input.name}`] = [];
          } else customInputinitialValues[`${input.name}`] = "";
        }
      });
    setCustomInputs({
      ...customInputs,
      ...customInputinitialValues,
      ...customIntialValues,
    });
  };

  const apiCall = ({ method = "get", api, body }) => {
    const axiosMethod = getAxios(method);
    return axiosMethod(`${api}`, body);
  };

  const submitForm = (values) => {
    let api = "";
    let body = undefined;
    let reqBody = {};
    setLoaders({ ...loaders, submit: true });
    if (typeof submit.api !== "undefined") {
      // SETTING THE API
      api = typeof submit?.api === "function" ? submit.api() : submit.api;

      // SETTING THE BODY TO CREATE A REQUEST BODY
      // BODY WILL BE IN THREE FORMAT 1), OBJECT, 2),ARRAY, 3), FUNCTIONS
      body =
        typeof submit.body !== "undefined"
          ? typeof submit.body === "function"
            ? submit.body({ values, inputs: template })
            : submit.body
          : null;

      //  SETTING REQUEST BODY

      if (body !== undefined && body !== null) {
        if (Array.isArray(body)) {
          body.forEach((bodyData) => {
            reqBody[`${bodyData}`] = values[bodyData];
          });
        } else if (Object.keys(body).length > 0) {
          reqBody = { ...reqBody, ...body };
        }
      }

      if (
        submit.onBeforeSubmit !== undefined &&
        typeof submit.onBeforeSubmit !== "function"
      ) {
        const beforeSubmitResult = submit.onBeforeSubmit();
        if (beforeSubmitResult) {
          apiCall({ api, body: reqBody, method: submit.method })
            .then((response) => {
              submit.onAfterApiSuccess(response);
            })
            .catch();
        }
      } else if (api !== undefined && api !== null) {
        apiCall({ api, body: reqBody, method: submit.method })
          .then((response) => {
            // ON AFTER SUBMIT CAll
            if (typeof submit?.onAfterApiSuccess === "function")
              submit.onAfterApiSuccess(response);
          })
          .catch((error) => {
            if (typeof submit?.onAfterApifailed === "function")
              submit?.onAfterApifailed(error);
          });
      }
    } else if (submit.onSubmit) {
      submit.onSubmit({ values });
    }
    setLoaders(() => ({ ...loaders, submit: false }));
  };

  const formik = useFormik({
    initialValues: getinitialValues(),
    enableReinitialize: true,
    validationSchema: getValidationSchema(),
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  const {
    values,
    handleSubmit,
    handleChange,
    touched,
    errors,
    setFieldValue,
    initialValues,
  } = formik;
  useEffect(() => {
    getInitialValuesForRenderMehtod();
    if (preloadValues) {
      for (let key in initialValues) {
        setFieldValue(key, preloadValues[key]);
      }
    }
  }, []);
  // SINGLE FORM COMPONENT
  if (template && template.length > 0) {
    return (
      <SingleForm
        inputContainer={inputContainer}
        template={template}
        buttons={buttons}
        handleChange={handleChange}
        values={values}
        errors={errors}
        touched={touched}
        handleSubmit={handleSubmit}
        setFieldValue={setFieldValue}
        initialValues={initialValues}
      />
    );
  }
};

Form.propTypes = PropTypes.shape({
  template: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        container: PropTypes.shape({
          className: PropTypes.string,
        }),
        label: PropTypes.shape({
          text: PropTypes.string.isRequired,
          className: PropTypes.string,
        }),
        input: PropTypes.shape({
          type: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          placeholder: PropTypes.string.isRequired,
          className: PropTypes.string,
        }),
      }),
      PropTypes.shape({
        render: PropTypes.func.isRequired,
      }),
    ])
  ).isRequired,
  buttons: PropTypes.shape({
    containerClassName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        displayText: PropTypes.string.isRequired,
        className: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  validationSchema: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
  submit: PropTypes.shape({
    api: PropTypes.string,
    method: PropTypes.string,
    onBeforeSubmit: PropTypes.func,
    onAfterApiSuccess: PropTypes.func,
    onAfterApiFail: PropTypes.func,
    body: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
}).isRequired;
export default Form;

export function useFormer({ template }) {
  const [customInputs, setCustomInputs] = useState({});
  const getinitialValues = () => {
    let initialValues = {};
    template.forEach((fieldObj) => {
      const { input, render } = fieldObj;

      if (render) {
        initialValues = { ...initialValues, ...customInputs };
      } else if (input?.type === "checkbox" || input?.type === "radio") {
        if (input.checked !== undefined && input.checked) {
          initialValues[`${input?.name}`] = input.checked;
        } else {
          initialValues[`${input?.name}`] = false;
        }
      } else {
        if (input.value !== undefined && input.value !== "") {
          initialValues[`${input?.name}`] = input.value;
        } else {
          initialValues[`${input?.name}`] = "";
        }
      }
    });
    return initialValues;
  };

  const getCustomInputDetails = () => {
    let customInputsArray = document.querySelectorAll(`input[data-fr]`);
    let cutsomInputDetails = [];
    customInputsArray.forEach((input) => {
      cutsomInputDetails.push({ type: input.type, name: input.name });
    });

    return cutsomInputDetails;
  };

  const getCustomIntialValuesFromRender = () => {
    let values = {};
    template.forEach((input) => {
      if (input.render) {
        if (typeof input.render !== "function") {
          values = { ...values, ...input.render.customInitialValues };
        }
      }
    });
    return values;
  };
  const getInitialValuesForRenderMehtod = () => {
    let customInputData = getCustomInputDetails();
    let customIntialValues = getCustomIntialValuesFromRender();
    let customInputinitialValues = {};
    customInputData.length > 0 &&
      customInputData.forEach((input) => {
        if (input.type !== "button") {
          if (input?.type === "checkbox" || input?.type === "radio") {
            customInputinitialValues[`${input.name}`] = [];
          } else customInputinitialValues[`${input.name}`] = "";
        }
      });
    setCustomInputs({
      ...customInputs,
      ...customInputinitialValues,
      ...customIntialValues,
    });
  };
  useEffect(() => {
    getInitialValuesForRenderMehtod();
  }, []);

  let initialValues = getinitialValues();
  return { initialValues };
}
export function config({ axios }) {
  getAxiosConfig(axios);
}
