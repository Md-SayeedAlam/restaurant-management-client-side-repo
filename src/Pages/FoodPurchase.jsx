import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';

const FoodPurchase = () => {

   useEffect(() => {
              document.title = "Food Purchase || Nova Restaurant";
            }, []);

    const {user} = useContext(AuthContext)
    // const foods = useLoaderData()
    const params = useParams()
    const axiosSecure = useAxiosSecure()
    const [foods,setFoods] = useState([])
    
    const {_id,itemName,quantity,price,photo,email} = foods;
   
   
    
    const quantityNmb = parseInt(quantity)
    // const [quantity, setQuantity] = useState("");
    const [isPurchaseDisabled, setIsPurchaseDisabled] = useState(false)

    useEffect(()=>{
      // axios.get(`https://restaurent-management-server-one.vercel.app/foods/${params.id}`,{withCredentials:true})
      axiosSecure.get(`/foods/${params.id}`)
      .then(res=>setFoods(res.data))
    },[params.id])





    const handleSubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.displayName.value;
        const email= form.email.value;
        const quantity = form.quantity.value;
        const value = parseInt(quantity);
        const price = form.price.value;
        const photo = form.photo.value;
        
        const food_id = _id
        const itemName = form.itemName.value;
        const date = form.date.value;
        // console.log(value)

        if (value <= 0) {
            Swal.fire({
              title: "Error",
              text: "Quantity cannot be zero or less.",
              icon: "error",
              confirmButtonText: "Close",
            });
            setIsPurchaseDisabled(true);
            return
          } else {
            setIsPurchaseDisabled(false);
          }

          if(value > quantityNmb){
            Swal.fire({
                title: "Error",
                text: `Quantity cannot be grater than: ${quantityNmb}.`,
                icon: "error",
                confirmButtonText: "Close",})
                return
          }





        if (user?.email === foods.email) {
            Swal.fire({
              title: "Error",
              text: "Sorry,Owner and Buyer person is same.",
              icon: "error",
              confirmButtonText: "Close",
            });
            form.reset()
            return;
            
          }


        
        const newItem = {name,email,itemName,quantity,price,date,food_id,photo}
        // console.log(newItem)


        
            fetch('https://restaurent-management-server-one.vercel.app/purchases',{
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
                        text:'Food Purchased successfully',
                        icon:'success',
                        confirmButtonText:'Close'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center">Food Purchase</h2>
  
        <form 
        onSubmit={handleSubmit}
        >
          {/* form name and email row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Buyer Name</span>
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
                <span className="label-text">Buyer Email</span>
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
                  defaultValue={itemName} readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
  
            <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4  lg:w-1/2 w-full">
              <label className="label">
                <span className="label-text"> Quantity</span>
              </label>
  
              <label className="input-group">
                <input
                
                  type="text"
                  name="quantity"
                  id=""
                  placeholder="Quantity"
                  
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
  
        {/* photo */}
        

        <div className="form-control  w-full mb-8">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  id=""
                  placeholder="Photo"
                  defaultValue={photo} readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>





  
         
        {/* price */}
          <div className="form-control  w-full mb-8">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  id=""
                  placeholder="Price"
                  defaultValue={price} readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            {/* Current  Date  */}

            
        
            <div className="form-control  w-full mb-8">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
  
              <label className="input-group">
                <input
                  type="text"
                  name="date"
                  id=""
                  placeholder="Date"
                //   defaultValue={moment(date).format("MMMM Do YYYY, h:mm:ss a")}
                  className="input input-bordered w-full"
                //   value={moment(date).subtract(10, "days").calendar()} readOnly
                  value={new Date().toLocaleString()} readOnly
                />
              </label>
            </div>
  
      
  
  
          <input
            type="submit"
            value="Purchase"
            
            disabled={isPurchaseDisabled}
            className="btn btn-block btn-neutral"
          />
        </form>
      </div>
    );
};

export default FoodPurchase;