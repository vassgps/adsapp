import * as Yup from "yup";
let addAds = {
  template: [
    {
      container: {
        className: "",
      },
      label: {
        text: "Ad Name ",
      },
      input: {
        type: "text",
        name: "ad_name",
        placeholder: "enter the Ad name",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Top Text",
      },
      input: {
        type: "text",
        name: "top_text",
        placeholder: "enter the top text",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Bottom Text",
      },
      input: {
        type: "text",
        name: "bottom_text",
        placeholder: "enter the bottom text",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Add Ad",
      },
      input: {
        type: "file",
        name: "media_file",
        placeholder: "Upload the  Ad",
        id: "media_file",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Thumbnail",
      },
      input: {
        type: "file",
        name: "thumbnail",
        placeholder: "upload the thumbnail ",
        id: "thumbnail",
      },
    },
  ],
  validationSchema: {
    ad_name: Yup.string().required("please enter the Ad Name "),
    top_text: Yup.string().required("please enter the Top Text"),
    bottom_text: Yup.string().required("please enter the bottom Text"),
    media_file: Yup.string().required("please insert the Ad"),
    thumbnail: Yup.string().required("please insert the Thumbnail"),
  },
  buttons: {
    items: [
      {
        type: "submit",
        name: "submit",
        displayText: "Upload",
        className:
          "bg-cyan-500 text-white  py-[6px] rounded-md w-full hover:bg-hover-color ",
      },
    ],
  },

  submit: {
    api: "/cms/advt/advertisement-details/",
    method: "post",
    body: ({ values }) => {
      let formData = new FormData();

      for (let key in values) {
        formData.append(key, values[key]);
      }

      console.log("formdata", formData);
      return formData;
    },

    onAfterApiSuccess: (res) => {
      // console.log(res.data.access_token);
      localStorage.setItem("accesToken", res.data.access_token);
      window.location.href = "/dealer/advertismentlist";
    },
  },
};
export { addAds };
