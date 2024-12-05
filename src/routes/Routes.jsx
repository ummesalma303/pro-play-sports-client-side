import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllEquipment from "../pages/allEquipment";
import ErrorPage from "../pages/ErrorPage";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipment";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/products')
        },
        {
            path:'/addEquipment',
            element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
        },
        {
            path:'/allEquipment',
            element:<AllEquipment></AllEquipment>,
            loader:()=>fetch('http://localhost:5000/equipment')
        },
        {
            path:'/myEquipment',
            element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>
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