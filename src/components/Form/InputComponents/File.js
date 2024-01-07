import cn from "classnames";
import Styles from "../form.module.scss";
import classNames from "classnames";
import propTypes from "prop-types";
const File = ({
  templateInput,
  errors,
  handleChange,
  values,
  touched,
  setFieldValue,
}) => {
  const { container, input, label } = templateInput;

  return (
    <div
      className={cn(
        container?.className !== ""
          ? container?.className
          : Styles["input-container"]
      )}
    >
      {label?.text !== "" && label?.text !== undefined && (
        <label
          className={cn(
            label.className !== "" ? label.className : Styles["label"]
          )}
          htmlFor={input.id}
        >
          <span>
            {typeof label.text == "function"
              ? label.text({
                  input: {
                    ...templateInput,
                    value: values[input.name],
                    error: errors[input.name],
                    ...label,
                  },
                })
              : label.text}
          </span>
        </label>
      )}
      <input
        {...input}
        className={cn(
          input?.className
            ? input?.className !== ""
              ? input?.className
              : Styles["input"]
            : Styles["input"]
        )}
        onChange={(e) => setFieldValue(input.name,e.target.files[0])}
        data-invalid={
          touched[`${input?.name}`] &&
          errors !== undefined &&
          errors[`${input?.name}`]
            ? true
            : false
        }
        // value={
        //   values[`${input?.name}`] !== undefined ? values[`${input?.name}`] : ""
        // }
      />
      {label?.text !== "" && label?.text !== undefined && (
        <label
          className={cn(
            label.className !== "" ? label.className : Styles["label"]
          )}
          htmlFor={input.id}
        >
          <span>{input?.placeholder}</span>
        </label>
      )}
      {touched[`${input?.name}`] &&
        errors !== undefined &&
        errors[`${input?.name}`] && (
          <span role="alert" className={classNames(Styles["error"])}>
            {errors[`${input?.name}`]}
          </span>
        )}
    </div>
  );
};

Date.displayName = "File";
export default File;
