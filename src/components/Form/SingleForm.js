import React from "react";
import { RenderInputs } from "./RenderInputsInput";
import classNames from "classnames";
import RenderButton from "./ButtonComponents/RenderButton";
import Styles from "./form.module.scss";
const SingleForm = ({
  inputContainer,
  template,
  buttons,
  handleChange,
  values,
  errors,
  touched,
  handleSubmit,
  setFieldValue,
  initialValues,
}) => {
  let fieldsIncludedToContainer = template.filter(
    (input, index) => !inputContainer?.exclude.includes(index + 1) && input
  );
  let excludedFields = template.filter(
    (input, index) => inputContainer?.exclude.includes(index + 1) && input
  );
  return (
    <form onSubmit={handleSubmit}>
      <>
        <div
          className={classNames(
            inputContainer?.className,
            Styles["input-container"]
          )}
        >
          <RenderInputs
            template={fieldsIncludedToContainer}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            initialValues={initialValues}
          />
        </div>
        <RenderInputs
          template={excludedFields}
          handleChange={handleChange}
          values={values}
          errors={errors}
          touched={touched}
          setFieldValue={setFieldValue}
          initialValues={initialValues}
        />
        <div className={buttons?.containerClassName}>
          <RenderButton buttons={buttons} />
        </div>
      </>
    </form>
  );
};

export default SingleForm;
