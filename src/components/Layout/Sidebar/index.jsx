import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const items = [
    {
      icon: "",
      title: "Dashboard",
      link: "/",
    },
    {
      icon: "",
      title: "Advertisment List",
      link: "/advertismentlist",
    },
  ];
  const navigateToHref = (link) => {
    navigate(link);
  };
  return (
    <div
      className="w-[300px] bg-white-500  h-full border-r-[1px] border-primary border-opacity-30 shadow-sm"
      style={{ backgroundColor: "white" }}
    >
      {/* <img src="/sigi.png" alt="LOGO" className="w-[130px]" /> */}
      <div className="flex justify-center items-center h-[65px]">
        <p className="font-bold ">
          ADD <span className="text-primary">APP</span>
        </p>
      </div>
      <ul className="w-full px-5 py-9">
        {items.map((data, index) => {
          console.log(window.location.pathname == data.link);
          return (
            <li className="mb-3 flex justify-center" key={index}>
              <button
                type="button"
                onClick={() => navigateToHref(data.link)}
                className={`w-full flex justify-start items-center px-6 py-2 rounded-[7px] hover:shadow-sm text-primary ${
                  window.location.pathname == data.link
                    ? "bg-primary text-white shadow-sm"
                    : "hover:bg-primary hover:bg-opacity-10"
                } `}
              >
                {data.icon}
                <span className="ml-4 text-sm font-semibold tracking-wider ">
                  {data.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
