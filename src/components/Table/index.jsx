import { useMemo } from "react";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import DataTablePagination from "./DataTablePagination";
import DropFilter from "./DropFilter";
import PanelActionButton from "./PanelActionButton (1)";
import SearchTable from "./SearchTable";
import Table from "./Table";
import Dropdowns from "./DropFilter.jsx";

const DataTable = ({
  columnDef = {
    tableHeaders: [],
    panelActionButtons: { activeClassname: "", items: [] },
    filterOptions: { options: [] },
  },
  tableData = [],
  className = "",
  title = "",
  search = true,
  onTableRowClick = () => {},
  pagination = true,
}) => {
  const { tableHeaders } = columnDef;
  const data = useMemo(() => [...tableData], [tableData]);

  const columns = useMemo(() => [...tableHeaders], [tableHeaders]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  let tableProps = {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    className,
    onTableRowClick,
  };

  // Render the UI for your table
  return (
    <>
      <div className="mb-4 flex items-center justify-end">
        <div className="flex  overflow-auto">
          <PanelActionButton buttons={columnDef?.panelActionButtons?.items} />
        </div>
        <div className="center ">
          <div className="mr-3"></div>
          <div>
            <DropFilter {...columnDef?.filterOptions} />
          </div>
        </div>
      </div>

      <div className="bg-white h-full min-h-[75vh] w-full rounded-[4px] ">
        <div className="w-full flex justify-end  p-4">
          {title !== "" && (
            <div className="w-[75%] flex items-center">
              <h1 className=" text-[#666666] font-semibold capitalize  font-outfit ">
                {title}
              </h1>
            </div>
          )}
          {typeof search === "function"
            ? search()
            : search && (
                <div className="w-[25%]">
                  <SearchTable
                    filterValue=""
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={globalFilter}
                  />
                </div>
              )}
        </div>
        <Table {...tableProps} />
        {pagination && page.length > 0 && (
          <div className="paginations px-4  border-t-2 border-[#ff6b07]">
            {pageIndex !== 0 && (
              <>
                <Dropdowns
                  buttonClassName="px-4 py-0 rounded-[10px] bg-[#F9F9F9]"
                  optionsContainerClassName="top-[40px] left-0 bg-white flex flex-col w-full"
                  optionsList={[
                    {
                      name: "10",
                      value: 10,
                    },
                    {
                      name: "20",
                      value: 20,
                    },
                    {
                      name: "30",
                      value: 30,
                    },
                  ]}
                  onClick={({ value }) => {
                    setPageSize(Number(value));
                  }}
                />

                <DataTablePagination
                  pageCount={pageCount}
                  pageIndex={pageIndex}
                  canPreviousPage={canPreviousPage}
                  canNextPage={canNextPage}
                  nextPage={nextPage}
                  previousPage={previousPage}
                  gotoPage={gotoPage}
                />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DataTable;
