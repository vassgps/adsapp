import classNames from "classnames";
import React, { useEffect } from "react";
import ModalOverlay from "./ModalOverlay";
import Styles from "../modal.module.scss";
import ModalHeader from "./ModalHeader";

const Modaler = ({
  setShow,
  maxWidth,
  component,
  header,
  containerClassName,
  modalBodyClassName,
  onClose,
  addedPortalNode,
  modalRoots
}) => {
  const closeModal = () => {
    if (onClose) onClose();
    setShow(false);
    modalRoots.pop();
    addedPortalNode?.remove();
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    let closeButtons = document?.querySelectorAll(`button[data-modal-close]`);
    closeButtons.forEach((button) => {
      button.addEventListener("click", closeModal);
    });
  }, []);
  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <div
        className={classNames(
          `${Styles["layout-container"]} `,
          containerClassName
        )}
        style={{ maxWidth: `${maxWidth !== undefined ? maxWidth : 450}px` }}
      >
        <ModalHeader {...header} closeModal={closeModal} />
        <div className={classNames(Styles["modal-body"], modalBodyClassName)}>
          {typeof component === "function"
            ? component({ closeModal })
            : component}
        </div>
      </div>
    </>
  );
};

export default Modaler;
