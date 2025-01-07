import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {
   useEffect(() => {
              document.title = "Register|| Nova Restaurant";
            }, []);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const {createUserWithEmail,signInWithGoogle,setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
      
        setError("");
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setError("Password must contain at least 6 characters");
            Swal.fire({
              title: "Error!",
              text: "Password must contain at least 6 characters",
              icon: "error",
              confirmButtonText: "Close",
            });
            return;
          }
      
          if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            Swal.fire({
              title: "Error!",
              text: "Password must contain at least one lowercase letter",
              icon: "error",
              confirmButtonText: "Close",
            });
            return;
          }
          if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter");
      
            Swal.fire({
              title: "Error!",
              text: "Password must contain at least one uppercase letter",
              icon: "error",
              confirmButtonText: "Close",
            });
            return;
          }

          createUserWithEmail(email,password)
          .then(result=>{
            const user = result.user;
            setUser(user);
  
            // console.log(user);
  
            e.target.reset();
            toast.success("User Created Successfully.", {
              position: "top-center",
              autoClose: 2000,
            });
            toast.success("User logged in Successfully.", {
              position: "top-center",
              autoClose: 2000,
            });
            navigate('/')
          })
          .catch(error=>{
            // console.log('ERROR',error);
            toast.error(`User Created Failed ${error.message}`, {
              position: "top-center",
              autoClose: 2000,
            });
          })

    
        }




        const handleGoogleSignIn =()=>{
            signInWithGoogle()
        .then(result=>{
          console.log(result.user);
          toast.success("login successful", {
            position: "top-center",
            autoClose: 2000,
          });
  
          navigate("/");
        })
        .catch(error=>{
          console.log('ERROR',error.message)
          toast.error(`'Login Failed ${err.message}`, {
            position: "top-center",
            autoClose: 2000,
          });
        })
        }



    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg  shrink-0  p-10 border border-gray-400 mt-10 mb-10 rounded-lg">
          <h2 className="text-2xl font-semibold text-center">
            Register Your Account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo"
                className="input input-bordered"
                required
              />
            </div>
  
  
  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
  
  

  
  
  
  
  
  
           
  
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
              type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-sm absolute right-2 top-11"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
  
              <label className="label">
              
  
                <button    className="label-text-alt link link-hover">
  
                  Forgot password?
  
                </button >
              </label>
            </div>
  
            {error && <p className="text-red-500">{error}</p>}
  
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
  
            <div className=" *:w-full space-y-2 mt-5 ">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white border-gray-300 rounded-none "
              >
                <FcGoogle size={22} /> Login With Google
              </button>
            </div>
          </form>
  
          <p className="text-center font-semibold ">
            Already have an account? Please{" "}
            <Link className="text-red-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    )

    
};

export default Register;













// import React, { useContext, useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../Components/AuthProvider/AuthProvider";

// const Register = () => {
//     const navigate = useNavigate();
//     const [error, setError] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const { createUserWithEmail } = useContext(AuthContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         setError("");
//         const name = e.target.name.value;
//         const email = e.target.email.value;
//         const photo = e.target.photo.value;
//         const password = e.target.password.value;

//         if (password.length < 6) {
//             setError("Password must contain at least 6 characters");
//             Swal.fire({
//                 title: "Error!",
//                 text: "Password must contain at least 6 characters",
//                 icon: "error",
//                 confirmButtonText: "Close",
//             });
//             return;
//         }

//         if (!/[a-z]/.test(password)) {
//             setError("Password must contain at least one lowercase letter");
//             Swal.fire({
//                 title: "Error!",
//                 text: "Password must contain at least one lowercase letter",
//                 icon: "error",
//                 confirmButtonText: "Close",
//             });
//             return;
//         }
//         if (!/[A-Z]/.test(password)) {
//             setError("Password must contain at least one uppercase letter");

//             Swal.fire({
//                 title: "Error!",
//                 text: "Password must contain at least one uppercase letter",
//                 icon: "error",
//                 confirmButtonText: "Close",
//             });
//             return;
//         }

//         createUserWithEmail(email, password)
//             .then((result) => {
//                 console.log(result.user);
//                 navigate("/dashboard"); // Navigate after successful registration
//             })
//             .catch((error) => {
//                 console.log("ERROR", error.message);
//                 setError(error.message);
//             });
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center">
//             <div className="card bg-base-100 w-full max-w-lg p-10 border border-gray-400 mt-10 mb-10 rounded-lg">
//                 <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
//                 <form onSubmit={handleSubmit} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input name="name" type="text" placeholder="name" className="input input-bordered" required />
//                     </div>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <input name="photo" type="text" placeholder="photo" className="input input-bordered" required />
//                     </div>

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input name="email" type="email" placeholder="email" className="input input-bordered" required />
//                     </div>

//                     <div className="form-control relative">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             name="password"
//                             placeholder="password"
//                             className="input input-bordered"
//                             required
//                         />
//                         <button
//                             type="button"
//                             onClick={() => setShowPassword(!showPassword)}
//                             className="btn btn-sm absolute right-2 top-11"
//                         >
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </button>
//                     </div>

//                     {error && <p className="text-red-500">{error}</p>}

//                     <div className="form-control mt-6">
//                         <button className="btn btn-neutral rounded-none">Register</button>
//                     </div>

//                     <div className="w-full space-y-2 mt-5">
//                         <button className="btn bg-white border-gray-300 rounded-none">
//                             <FcGoogle size={22} /> Login With Google
//                         </button>
//                     </div>
//                 </form>

//                 <p className="text-center font-semibold">
//                     Already have an account? Please{" "}
//                     <Link className="text-red-500" to="/login">
//                         Login
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;
