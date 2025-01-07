import React, { useContext, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
   useEffect(() => {
              document.title = "Login || Nova Restaurant";
            }, []);
  const navigate = useNavigate();
  const location = useLocation()
  const {signInWithGoogle,signInUSer,setUser}=useContext(AuthContext)

 const handleSubmit = e =>{
    e.preventDefault();
    const email = e.target.email.value;
        
        const password = e.target.password.value;
      

        
        signInUSer(email,password)
    .then(result=>{
      const user = result.user
      
      e.target.reset()
      setUser(user)
      toast.success('login successful' ,{position: "top-center",
        autoClose: 2000,})
      // navigate('/')
      
      navigate(location?.state ? location.state  : "/");
    })
    .catch(err=>{
      
      toast.error(`Login failed: ${err.message}`, {
        position: "top-center",
        autoClose: 2000,
    })
    })
 }

 const handleGoogleSignIn=()=>{
  signInWithGoogle()
  .then(result=>{
    toast.success('login successful' ,{position: "top-center",
      autoClose: 2000,})
    navigate(location?.state ? location.state : "/");
    navigate('/')
  })
  .catch(err=>{
    // console.log("ERROR",err.message)
    toast.error(`Login failed: ${err.message}`, {
      position: "top-center",
      autoClose: 2000,
  })
  })
 }


    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg  shrink-0  p-10 border border-gray-400 mt-10 mb-10 rounded-lg">
          <h2 className="text-2xl font-semibold text-center">
            Login Your Account
          </h2>
          <form
           onSubmit={handleSubmit} 
           className="card-body">
  
  
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
  
  
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
  
  
              {/* <label className="label">
                <Link  to='/forgotPassword' className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label> */}
  
  
  
              <label className="label">
                <button
              
                  className="label-text-alt link link-hover">
                  Forgot password?
                </button>
              </label>
  
  
  
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Login</button>
            </div>
  
           
            <div className=" *:w-full space-y-2 mt-5 ">
             
              <button 
              onClick={handleGoogleSignIn}
               className="btn bg-white border-gray-300 rounded-none ">
                <FcGoogle size={22} /> Login With Google
              </button>
  
              
            </div>
          </form>
          <p className="text-center font-semibold rounded-none">
            Don`t have an account? Please{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;