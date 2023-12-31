import React from "react";
import Styles from "../modal.module.scss";
import classNames from "classnames";
import CloseIcon from "../../../assets/Icons/Clos";
const ModalHeader = ({
  heading,
  subHeading,
  className,
  containerClassName,
  closeModal,
}) => {
  return (
    <div
      className={classNames(
        Styles["modal-header-container"],
        containerClassName
      )}
    >
      <div>
        <h1 className={classNames(Styles["heading"], "text-primary")}>
          {heading}
        </h1>
        <span className={classNames(Styles["sub-heading"])}>{subHeading}</span>
      </div>
      <button
        type="button"
        className="text-[#ff6b07] text-2xl"
        onClick={closeModal}
      >
        <CloseIcon width="10" />
      </button>
    </div>
  );
};

export default ModalHeader;
