import { createRoot } from "react-dom/client";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";
let modalRoots = [];
const modal = (props) => {
  const modalCount = document.querySelectorAll(".modal").length;
  const portalNode = document.querySelector("#modal_1");
  if (!portalNode) {
    const div = document.createElement("div");
    div.id = "modal_1";
    div.className = "modal";
    document.querySelector("#root")?.append(div);
    modalRoots.push(createRoot(div));
  } else {
    const div = document.createElement("div");
    div.id = `modal_${modalCount + 1}`;
    div.className = "modal";
    document.querySelector("#root")?.append(div);
    modalRoots.push(createRoot(div));
  }
  if (modalRoots.length > 0) {
    let root = modalRoots.find(
      (root) => root._internalRoot.containerInfo.id == `modal_${modalCount + 1}`
    );
    const addedPortalNode = document.querySelector(`#modal_${modalCount + 1}`);
    if (addedPortalNode) {
      root.render(
        createPortal(
          <Modal
            {...props}
            addedPortalNode={addedPortalNode}
            modalRoots={modalRoots}
          />,
          addedPortalNode
        )
      );
    }
  }
};

const closeModal = () => {
  modalRoots[modalRoots.length - 1].unmount();
  modalRoots.pop();
};

export { modal, closeModal };
