import { removeAttribute } from "../../Utils/commonFunction";


const PanelActionButton = ({ buttons = [] }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <button
          {...removeAttribute({ attribute: ["displayText"], object: button })}
          className={`${
            button.className
          } whitespace-nowrap text-[10px] md:text-[14px] px-3 py-2 md:px-4 ${
            index > 0 && "ml-2 md:ml-4"
          }`}
          type="button"
          key={index}
        >
          
          {button?.displayText}
        </button>
      ))}
    </>
  );
};

export default PanelActionButton;
