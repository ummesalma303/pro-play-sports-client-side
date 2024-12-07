import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllEquipment from "../pages/allEquipment";
import ErrorPage from "../pages/ErrorPage";
import AddEquipment from "../pages/AddEquipment";
import MyEquipment from "../pages/MyEquipments";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import EquipmentDetails from "../pages/EquipmentDetails";
import UpdateEquipment from "../pages/UpdateEquipment";
import MyEquipments from "../pages/MyEquipments";
// import { useContext } from "react";


  const router = createBrowserRouter([
    // const data = useContext()
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            // loader:()=>fetch('http://localhost:5000/products')
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
            path:'/myEquipments',
            element:<PrivateRoute><MyEquipments></MyEquipments></PrivateRoute>,
            loader:()=>fetch('http://localhost:5000/equipment')
            
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/equipment/:_id',
            element:<PrivateRoute><EquipmentDetails></EquipmentDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/equipment/${params._id}`)
        },
        {
            path:'/updateEquipment/:_id',
            element:<PrivateRoute><UpdateEquipment></UpdateEquipment></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/equipment/${params._id}`)
        },
      ]
    },
  ]);
  export default router