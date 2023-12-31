import React, { useEffect } from 'react'
import axiosInstance from '../../Config/axios'
 import DataTable  from "../../components/Table"

const Dashboard = () => {
    useEffect(()=>{

    axiosInstance.get("/cms/advt/advertisement-details/").then((data)=>{
        console.log("data",data);
    });
},[])
 let headers = [
{
      Header: "Address",
      accessor: "address",
      className: "w-[15ch]",
    },
   {
     headers: "Name"
   },
   {
     headers: "Created Id"
   },
   {
     headers: "Created By"
   },
   {
     headers: "Divice Id"
   },
   {
     headers: "Is Deleted"
   },
   {
     headers: "Media File"
   },
   {
     headers: "Package"
   },
   {
     headers: "Screen Id"
   },
   {
     headers: "Status"
   },
   {
     headers: "Thumbnai"
   },
   {
     headers: "Updated At"
   },
   {
     headers: "Updated By"
   },
   {
     headers: "UU ID"
   },
 ]; 


 
  return (
    <div>
      {/* <DataTable columnDef={(tableHeaders = [headers])} tableData =[]/> */}
    </div>
  );
}

export default Dashboard;