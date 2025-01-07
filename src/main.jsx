import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './Components/MainLayOut/MainLayOut.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/HOME/hOME.JSX';
import Login from './Pages/Login.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import AllFoods from './Pages/AllFoods.jsx';
import AddFoodItem from './Pages/AddFoodItem.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import FoodCardDetails from './Components/FoodCard/FoodCardDetails.jsx';
import FoodPurchase from './Pages/FoodPurchase.jsx';
import Gallery from './Pages/Gallery.jsx';
import MyFoods from './Pages/MyFoods.jsx';
import UpdatedFood from './Pages/UpdatedFood.jsx';
import MyOrders from './Pages/MyOrders.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        // loader:()=>fetch('https://restaurent-management-server-one.vercel.app/foods')
        loader:()=>fetch('https://restaurent-management-server-one.vercel.app/api/foods/top')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      
      {
        path:'/all-foods',
        element:<AllFoods></AllFoods>,
        
      },
      
      {
        path:'/add-item',
        element:<PrivateRoute><AddFoodItem></AddFoodItem></PrivateRoute>
      },
      {
        path:'/foods/:id',
        // element:<PrivateRoute><FoodCardDetails></FoodCardDetails></PrivateRoute>,
        element:<FoodCardDetails></FoodCardDetails>,
        // loader:({params})=>fetch(`https://restaurent-management-server-one.vercel.app/foods/${params.id}`)
      },
      {
        path:'/foodPurchase/:id',
        element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
        // loader:({params})=>fetch(`https://restaurent-management-server-one.vercel.app/foods/${params.id}`)
        
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
        
      },
      {
        path:'/myFoods/:email',
        element:<PrivateRoute><MyFoods></MyFoods></PrivateRoute>,
        // loader:({params})=>fetch(`https://restaurent-management-server-one.vercel.app/api/foods?email=${params.email}`)
      },
      {
        path:'/myOrders/:email',
        element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
        // loader:({params})=>fetch(`https://restaurent-management-server-one.vercel.app/api/purchases?email=${params.email}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><UpdatedFood></UpdatedFood></PrivateRoute>,
        // loader:({params})=>fetch(`https://restaurent-management-server-one.vercel.app/foods/${params.id}`)
        
      },
      
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
