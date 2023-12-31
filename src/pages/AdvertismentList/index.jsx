import React, { useEffect, useState } from "react";
import axiosInstance from "../../Config/axios";
import DataTable from "../../components/Table";
import { modal } from "../../components/Modal";

const AdvertismentList = () => {
    const [rowData,setRowData] = useState([])
  useEffect(() => {
    axiosInstance.get("/cms/advt/advertisement-details/").then((data) => {
      console.log("data", data);
      setRowData(data.data.data.results)

    });
  }, []);
  let headers = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "thumbnail",
      accessor: "thumbnail",
      Cell:(row)=>{ console.log(row);return  <img src={row.row.original.thumbnail} width={100}/>}
    },
    {
      Header: "created by",
      accessor: "created_by",
    },
    {
      Header: "updated by",
      accessor: "updated_by",
    },
    {
      Header: "uuid",
      accessor: "uuid",
    },
    {
      Header: "status",
      accessor: "status",
    },
    {
      Header: "is deleted",
      accessor: "is_deleted",
    },
    {
      Header: "created at",
      accessor: "created_at",
    },
    {
      Header: "updated at",
      accessor: "updated_at",
    },
    {
      Header: "ad name",
      accessor: "ad_name",
    },
    {
      Header: "top text",
      accessor: "top_text",
    },
    {
      Header: "bottom text",
      accessor: "bottom_text",
    },
    {
      Header: "media file",
      accessor: "media_file",
    },

    {
      Header: "device id",
      accessor: "device_id",
    },
    {
      Header: "screen id",
      accessor: "screen_id",
    },
    {
      Header: "package",
      accessor: "package",
    },
  ];
  
  const openAddComponent = () => {
    modal({
      show: true,
      maxWidth: 450,
      component: () => {
        return 
      },
      header: {
        heading: "Add ADD",
      },
    });
  };

  return (
    <div >
      <div className="flex justify-end">
      <div className="flex justify-center bg-primary hover:bg-hover-color  items-center rounded-md px-2 py-1 w-[90px] " onClick={openAddComponent}>
      <h1 className="text-white">Add Ad</h1>
      </div>
      </div>
      <DataTable
        columnDef={{ tableHeaders: headers }}
        tableData={rowData}
        className="t-table bordered"
      />
    
    </div>
  );  
};

export default AdvertismentList;
