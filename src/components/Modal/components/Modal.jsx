import { useEffect, useState } from "react";
import Modaler from "./Modaler";

const Modal = ({ show = true, ...props }) => {
  console.log(show, "asdasd");

  useEffect(() => {
    setShowModal(true);
  }, []);
  const [showModal, setShowModal] = useState(show);
  console.log(showModal, "asdasdasdasdsa");
  if (showModal) {
    return <Modaler {...props} show={showModal} setShow={setShowModal} />;
  }

  return <div />;
};

export default Modal;
