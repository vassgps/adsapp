
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form"
import { loginForm } from '../../Utils/Forms/login'

const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center px-4 ">
      <div className="w-full max-w-[500px] shadow-md border border-slate-400  p-4 rounded-lg py-6">
        <h1 className="text-[30px]  font-semibold">Login</h1>
        <Form {...loginForm} />
        <hr className="my-[20px] text-light-gray" />
        <Link to="/register">
          <h1
            className="text-[15px] font-semibold  text-white bg-light_green flex items-center justify-center mt-[10px]
         p-2 rounded-md cursor-pointer hover:bg-green"
          >
            Create a New Account
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Login;