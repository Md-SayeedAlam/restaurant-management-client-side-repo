import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AddFoodItem = () => {

   useEffect(() => {
              document.title = "Add Food || Nova Restaurant";
            }, []);

    const {user} = useContext(AuthContext)


    const handleSubmit =e=>{
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


    const newItem = {name,email,itemName,quantity,category,photo,price,origin,description }
    

    fetch('https://restaurent-management-server-one.vercel.app/foods',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newItem)
    })
    .then(res=>res.json())
    .then(data=>{
        
        if(data.insertedId){
            Swal.fire({
                title:'SUCCESS',
                text:'Food Item added successfully',
                icon:'success',
                confirmButtonText:'Close'
            })
            form.reset()
        }
    })



    }









    return (
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Add Foods Items</h2>

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
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>



    


        <input
          type="submit"
          value="Add Item"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
    );
};

export default AddFoodItem;