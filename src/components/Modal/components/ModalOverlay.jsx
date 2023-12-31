import { useEffect } from "react";

const ModalOverlay = ({ onClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen justify-center z-50 bg-black bg-opacity-50 z-50 overflow-hidden"
      onClick={onClick}
    ></div>
  );
};

export default ModalOverlay;
