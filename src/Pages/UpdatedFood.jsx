import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';

const UpdatedFood = () => {
   useEffect(() => {
              document.title = "Update Food || Nova Restaurant";
            }, []);

    const {user} = useContext(AuthContext)
    const params = useParams()
    const axiosSecure = useAxiosSecure()
    // const foods = useLoaderData()
    const [foods,setFoods] = useState([])
    
    const {_id,itemName,quantity,category,photo,price,origin,description } = foods

    useEffect(()=>{
      // axios.get(`https://restaurent-management-server-one.vercel.app/foods/${params.id}`,{withCredentials:true})
      axiosSecure.get(`/foods/${params.id}`)
      .then(res=>setFoods(res.data))
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
    const name = form.displayName.value;
    const email= form.email.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const origin = form.origin.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;
  const itemName = form.itemName.value;


    if (user?.email !== foods.email) {
              Swal.fire({
                title: "Error",
                text: "Sorry,You Are Not Real Owner Of This Item.",
                icon: "error",
                confirmButtonText: "Close",
              });
            //   form.reset()
              return;
              
            }


    const newItem = {name,email,itemName,quantity,category,photo,price,origin,description }
    fetch(`https://restaurent-management-server-one.vercel.app/foods/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newItem)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount ){
            Swal.fire({
                title:'SUCCESS',
                text:'Food Item updated successfully',
                icon:'success',
                confirmButtonText:'Close'
            })
            
        }
    })

    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center">Update Foods Items</h2>
  
        <form 
        onSubmit={handleSubmit}
        >
          {/* form name and email row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="displayName"
                  id=""
                  placeholder="name"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  id=""
                  placeholder="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          {/* form photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  id=""
                  defaultValue={photo}
                  placeholder="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          {/* form name and quantity row */}
          <div className=" md:flex mb-8 ">
            <div className="form-control md:w-1/2 lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="itemName"
                  id=""
                  placeholder="Food Name"
                  defaultValue={itemName}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Available Product Quantity</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  id=""
                  placeholder="Available Quantity"
                  defaultValue={quantity}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
          {/* form category and details row */}
  
          <div className=" md:flex mb-8">
            <div className="form-control md:w-1/2 lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  id=""
                  placeholder="Category"
                  defaultValue={category}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
  
              
              <label className="input-group">
                <textarea
                  type="text"
                  name="description"
                  id=""
                  placeholder="Description"
                  defaultValue={description}
                  className="input input-bordered w-full"
                ></textarea>
  
              </label>
            </div>
          </div>
  
          {/* form price and rating row */}
          <div className=" md:flex mb-8">
            <div className="form-control md:w-1/2  lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Price $</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  id=""
                  placeholder="Price"
                  defaultValue={price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="origin"
                  id=""
                  placeholder="Origin"
                  defaultValue={origin}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
          </div>
  
  
  
      
  
  
          <input
            type="submit"
            value="Update Item"
            className="btn btn-block btn-neutral"
          />
        </form>
      </div>
    );
};

export default UpdatedFood;