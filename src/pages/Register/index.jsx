import React from "react";
import Form from "../../components/Form/Form";
import { RegisterForm } from "../../Utils/Forms/register";
const Register = () => {
  return (
    <div className="h-screen w-full flex justify-center  px-4 items-center">
      <div className="w-full lg:w-[500px]  shadow-md border border-slate-400  p-4 rounded-lg py-[20px]">
        <h1 className="text-[30px]  font-semibold">Register</h1>
        <Form {...RegisterForm} />
      </div>
    </div>
  );
};

export default Register;
