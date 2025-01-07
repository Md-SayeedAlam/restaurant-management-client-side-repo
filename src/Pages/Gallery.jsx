import React, { useContext, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import allFood from "../../public/all food.jpeg";
const Gallery = () => {

   useEffect(() => {
              document.title = "Gallery || Nova Restaurant";
            }, []);

  const [open, setOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
const {user} = useContext(AuthContext)

  const images = [
    {
      src: "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=600",
       width: "100%",
      description: "Delicious",
    },
    {
      src: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600",
     
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=600",
      
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=600",
     
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600",
      
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&w=600",
      
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/2494648/pexels-photo-2494648.jpeg?auto=compress&cs=tinysrgb&w=600",
    
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600",
      
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=600",
      
      description: "Mojadar",
    },
    {
      src: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=600https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     
      description: "Mojadar halua ruti",
    },
  ];

  const openLightbox = (image) => {
    // setSelectedImage(image);
    setOpen(true);
  };

  return (
    <>

     <div
            className="hero w-full h-full lg:h-[250px]"
            style={{
              backgroundImage: `url(${allFood})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold italic font-serif text-amber-400">
                  <i>Foods Gallery</i>
                </h1>
                <p className="mb-5  text-white">Taste it...</p>
              </div>
            </div>
          </div>







    <section className="py-16">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.description}
                className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold">{user?.displayName}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img.src }))}
        
        />
      )}
    </section>
    </>
  );
};

export default Gallery;












