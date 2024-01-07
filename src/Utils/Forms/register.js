import * as Yup from "yup";
let RegisterForm = {
  inputContainer: {
    className: "grid grid-cols-2 gap-x-6",
    exclude: [],
  },
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
        text: "Firstname",
      },
      input: {
        type: "text",
        name: "first_name",
        placeholder: "enter the Firstname",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Lastname",
      },
      input: {
        type: "text",
        name: "last_name",
        placeholder: "enter the Lastname",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Email",
      },
      input: {
        type: "email",
        name: "email",
        placeholder: "enter the email",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Mobilenumber",
      },
      input: {
        type: "text",
        name: "mobile_number",
        placeholder: "enter the Mobilenumber",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Department",
      },
      input: {
        type: "select",
        name: "department",
        placeholder: "enter the department",
        className: "text-red-500",
        options: [
          {
            label: "Administration",
            value: 1,
            className: "",
          },

          {
            label: "Sales",
            value: 2,
          },
          {
            label: "Support",
            value: 3,
          },
          {
            label: "Engineering",
            value: 4,
          },
        ],
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Reffered By",
      },
      input: {
        type: "text",
        name: "reffered_by",
        placeholder: "enter the reffred details",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Dealer Id",
      },
      input: {
        type: "text",
        name: "dealer_id",
        placeholder: "enter the Dealer Id",
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
    {
      container: {
        className: "",
      },
      label: {
        text: "ConfirmPassword",
      },
      input: {
        type: "password",
        name: "confirmpassword",
        placeholder: "enter the password",
      },
    },
  ],
  validationSchema: {
    username: Yup.string().required("please enter the Username"),
    password: Yup.string().required("please enter the password"),
    first_name: Yup.string().required("please enter the firstname"),
    mobile_number: Yup.string().required("please enter the mobilenumber"),
    confirmpassword: Yup.string().required("please enter the confirmpasswprd"),
  },
  buttons: {
    items: [
      {
        type: "submit",
        name: "submit",
        displayText: "Register",
        className:
          "bg-cyan-500 text-white  py-[6px] rounded-md w-full hover:bg-hover-color ",
      },
    ],
  },

  submit: {
    api: "/user/register/",
    method: "post",
    body: ({ values }) => {
      return {
        email: values.email,
        first_name: values.first_name,
        last_name: values.last_name,
        mobile_number: values.mobile_number,
        referred_by: values.referred_by,
        department: values.department,
        dealer_id: values.dealer_id,
        username: values.username,
        password: values.password,
      };
      
    },
    onAfterApiSuccess: (res) => {
        
        window.location.href = "/login";
      },
  },
};
export { RegisterForm };
