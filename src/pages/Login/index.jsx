
import Form from "../../components/Form/Form"
import { loginForm } from '../../Utils/Forms/login'
const Login = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center px-4 ">
      <div className="w-full max-w-[500px] shadow-md border border-slate-400  p-4 rounded-lg py-6">
        <h1 className="text-[30px]  font-semibold" >Login</h1>
        <Form {...loginForm} />
      </div>
    </div>
  );
}

export default Login;