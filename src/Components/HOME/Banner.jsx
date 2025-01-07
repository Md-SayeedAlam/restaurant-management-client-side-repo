import React from "react";
import hero from '../../assets/social-kitchen-is-our.jpg'
import { Link } from "react-router-dom";
const Banner = () => {
   
  return (
    <div
      className="hero w-full h-full lg:h-[400px]"
    style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold italic font-serif text-amber-400"><i>Welcome To Our Restaurant</i></h1>
          <p className="mb-5  text-white">
            Where Food And Hospitality Become One
          </p>
          <Link to='/all-foods'><button  className="btn bg-amber-400 text-white">All Foods</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
