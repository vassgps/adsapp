import React from "react";
import { RenderInputs } from "./RenderInputsInput";
import classNames from "classnames";
import RenderButton from "./ButtonComponents/RenderButton";
import Styles from "./form.module.scss";

const GroupedForm = ({
  inputContainer,
  groups,
  buttons,
  handleChange,
  values,
  errors,
  touched,
  handleSubmit,
}) => {
  let fieldsIncludedToContainer = (template) =>
    template.filter(
      (input, index) => !inputContainer?.exclude.includes(index + 1) && input
    );
  let excludedFields = (template) =>
    template.filter(
      (input, index) => inputContainer?.exclude.includes(index + 1) && input
    );
  return (
    <form onSubmit={handleSubmit}>
      {groups.map((group) => (
        <>
          <div
            className={classNames(
              inputContainer?.className,
              Styles["input-container"]
            )}
          >
            <RenderInputs
              template={fieldsIncludedToContainer(group.template)}
              handleChange={handleChange}
              values={values}
              errors={errors}
              touched={touched}
            />
          </div>
          <RenderInputs
            template={excludedFields(group.template)}
            handleChange={handleChange}
            values={values}
            errors={errors}
            touched={touched}
          />
        </>
      ))}
      <div className={buttons?.containerClassName}>
        <RenderButton buttons={buttons} />
      </div>
    </form>
  );
};

export default GroupedForm;
