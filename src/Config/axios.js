import axios from 'axios';

// axios instance for making requests
const axiosInstance = axios.create();
// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  config.baseURL ="https://adsapp.vass.co.in/api/v1";
  let token = localStorage.getItem("accesToken");
  let noTokensPath = ['/register', '/login'];
  console.log(token);
  if (
    token !== undefined &&
    token !== null &&
    // config.url &&
    !noTokensPath.includes(window.location.pathname)  
  ) {
    config.headers = Object.assign(
      {
        Authorization: `Bearer ${token}`,
      },
      config.headers
    );
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;