import classNames from "classnames";
import ChevronDown from "../Icons/ChevronDown";
import ChevronForward from "../Icons/ChevronForward";

const DataTablePagination = ({
  pageCount,
  pageIndex,
  gotoPage,
  previousPage,
  nextPage,
}) => {
  const getButtons = () => {
    if (pageCount > 5 && pageIndex > pageCount - 5) {
      return [pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
    } else if (pageIndex !== 0)
      return [pageIndex + 1, pageIndex + 2, pageIndex + 3, pageIndex + 4];
  };
  return (
    <div className="flex justify-center items-center py-3 ">
      <button
        type="button"
        name=""
        className="pagination-btn w-full h-full"
        onClick={previousPage}
      >
        <ChevronDown
          style={{ transform: "rotate(90deg)" }}
          className="text-[#FF6B07]"
        />
      </button>
      {getButtons()?.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          className={classNames(
            "pagination-btn",
            pageNumber - 1 === pageIndex && "selected"
          )}
          onClick={() => gotoPage(pageNumber - 1)}
        >
          {pageNumber}
        </button>
      ))}

      <button
        type="button"
        name=""
        className="pagination-btn w-full h-full"
        onClick={nextPage}
      >
        <ChevronForward className="text-[#FF6B07]" />
      </button>
    </div>
  );
};

export default DataTablePagination;
