import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { config } from "./components/Form/Form";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashbord";
import Advertismentlist from "./pages/AdvertismentList";
import axiosInstance from "./Config/axios";
import "./assets/Table.scss";
import Add from "./pages/Add";
import AdPlayer from "./pages/Add/AdPlayer";

config({ axios: axiosInstance });
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Add />,
    },
    {
      path: "/player/:id",
      element: <AdPlayer />,
    },
    {
      path: "/dealer",
      element: <Layout />,
      children: [
        {
          path: "/dealer/",
          element: <Dashboard />,
        },
        {
          path: "/dealer/advertismentlist",
          element: <Advertismentlist />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
