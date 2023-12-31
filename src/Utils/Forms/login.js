import * as Yup from "yup"
let loginForm = {
  template: [
    {
      container: {
        className: "",
      },
      label: {
        text: "Username",
      },
      input: {
        type: "text",
        name: "username",
        placeholder: "enter the username",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Password",
      },
      input: {
        type: "password",
        name: "password",
        placeholder: "enter the password",
      },
    },
  ],
  validationSchema: {
    username: Yup.string().required("please enter the Username"),
    password: Yup.string().required("please enter the password"),
  },
  buttons: {
    items: [
      {
        type: "submit",
        name: "submit",
        displayText: "Login",
        className:
          "bg-cyan-500 text-white  py-[6px] rounded-md w-full hover:bg-hover-color ",
      },
    ],
  },

  submit: {
    api: "/user/login/",
    method: "post",
    body: ({ values }) => {
      return {
        identifier: values.username,
        password: values.password,
      };
    },
    onAfterApiSuccess:(res)=>{
      console.log(res.data.access_token);
      localStorage.setItem("accesToken", res.data.access_token);
      window.location.href = "/dealer/advertismentlist";

    }
  },
};
export {loginForm}