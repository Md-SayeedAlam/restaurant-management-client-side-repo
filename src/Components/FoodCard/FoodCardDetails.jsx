import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';


const FoodCardDetails = () => {
  useEffect(() => {
          document.title = "Single Food Card || Nova Restaurant";
        }, []);
    const params = useParams()
    // const foods = useLoaderData()
    const axiosSecure = useAxiosSecure()
    const [foods,setFoods] = useState([])
    const {_id,itemName,quantity,category,photo,price,origin,description ,name,purchaseCount} = foods;
    useEffect(()=>{
      axios.get(`https://restaurent-management-server-one.vercel.app/foods/${params.id}`,{withCredentials:true})
      // axiosSecure.get(`/foods/${params.id}`)
      .then(res=>setFoods(res.data))
    },[params.id])

    return (
        <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-[800px] shadow-xl mt-10 mb-10 justify-center items-center">
        
          <figure>
            <img
              className="rounded-md w-[400px] h-[250px]"
              src={photo}
              alt="image"
            />
            
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-3xl">{itemName} </h2>
            <p className="font-semibold text-gray-400">
              <span className="font-semibold text-gray-600">Item Name</span>:{" "}
              {itemName}
            </p>
            <p className="font-medium text-gray-400">
              <span className="font-semibold text-gray-600">Category Name</span> :{" "}
              {category}
            </p>
            <p className="font-medium text-gray-400">
              <span className="font-semibold text-gray-600">Price: </span>
              ${price} 
            </p>
            
            <p className="font-medium text-gray-400">
              <span className="font-semibold text-gray-600">
                User Name: :{" "}
              </span>{" "}
              {name}
            </p>
            <p className="text-gray-400"> <span className="font-semibold text-gray-600">Description: </span>{" "} {description}</p>

            <p className="font-medium text-gray-400">
            <span className="font-semibold text-gray-600">Quantity: </span>{" "}
              {quantity} pcs
            </p>
            

            <p className="font-medium text-gray-400">
            <span className="font-semibold text-gray-600">Origin: </span>{" "}
              {origin}
            </p>
          </div>
          <div className='flex items-center gap-2 mb-2'>
            <Link to={`/foodPurchase/${_id}`}><button className='btn btn-sm bg-amber-400'>Purchase</button></Link>
          <p className='p-2 text-amber-600'>Purchase Count : {purchaseCount}</p>
          </div>
        </div>
  
        
  
      </div>
    );
};

export default FoodCardDetails;