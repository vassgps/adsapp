import { useState } from "react";

const SearchTable = ({ setGlobalFilter, globalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = (value) => {
    setGlobalFilter(value || undefined);
  };
  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        value={value || ""}
        className="w-full px-4 py-1 border-b-2 border-[#ff6a0796]"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      {/* <div className="">
                <button className="center p-5 r-bg-secondary-dark rounded-[10px] ml-3">
                    <SearchIcon className="h-auto w-3.5 sm:w-auto" />
                </button>
            </div> */}
    </div>
  );
};

export default SearchTable;
