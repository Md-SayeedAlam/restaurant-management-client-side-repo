import React, { useEffect } from 'react';
import Banner from './Banner';
import FoodCard from '../FoodCard/FoodCard';
import { Link, useLoaderData } from 'react-router-dom';
import hero from '../../assets/social-kitchen-is-our.jpg'
import chef from '../../../public/chef.jpeg'


const Home = () => {
  useEffect(() => {
            document.title = "Home || Nova Restaurant";
          }, []);
   const foods = useLoaderData()
   
  
  
  

   
    return (
        <div>
            <Banner></Banner>

            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 mb-5'>
            {
                foods.slice(0, 6).map((food,idx)=><FoodCard key={idx} food={food}></FoodCard>)
            }
        </div>

          <div className='text-center mt-10'>
          <Link to='/all-foods'><button  className="btn bg-amber-400 px-8 text-white border-amber-900">Chek Our All Foods</button></Link>
          </div>

        


        <section className="py-16  mb-5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src={hero}
            alt="Restaurant Interior"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className=" text-lg mb-6">
            At <span className="font-semibold">Gourmet Delight</span>, we believe in creating
            exceptional dining experiences. From our farm-fresh ingredients to our curated menus, 
            every detail is crafted with care.
          </p>
          <p className="text-lg">
            Our chefs are passionate about blending traditional recipes with modern flavors, bringing
            you a taste you’ll never forget. Join us and savor the love for food and community.
          </p>
          <button className="mt-6 px-6 py-3 bg-amber-400 text-white font-semibold rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>









    <section className="py-16 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row lg:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <img
            src={chef}
            alt="Chef Alessandro Russo"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Meet Our Chef</h2>
          <h3 className="text-2xl font-semibold mb-2">Chef Alessandro Russo</h3>
          <p className="text-gray-700 text-lg mb-4">
            With over 20 years of culinary expertise, Chef Alessandro combines traditional Italian recipes with modern techniques to craft dishes that tantalize the senses. His passion for using fresh, locally sourced ingredients ensures every bite is an unforgettable experience.
          </p>
          <h4 className="text-xl font-semibold mt-6 mb-2">Specialties:</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Italian Cuisine</li>
            <li>French Pastries</li>
            <li>Fusion Dishes</li>
          </ul>
          <blockquote className="italic text-gray-500">
            "Cooking is an art, and every plate tells a story."
          </blockquote>
        </div>
      </div>
    </section>

             
        </div>
    );
};

export default Home;