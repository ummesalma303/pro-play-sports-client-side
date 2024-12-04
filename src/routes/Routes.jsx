import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllEquipment from "../pages/allEquipment";
import ErrorPage from "../pages/ErrorPage";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipment";
import Register from "../pages/Register";
import Login from "../pages/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addEquipment',
            element:<AddEquipment></AddEquipment>
        },
        {
            path:'/allEquipment',
            element:<AllEquipment></AllEquipment>
        },
        {
            path:'/myEquipment',
            element:<MyEquipment></MyEquipment>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
      ]
    },
  ]);
  export default router