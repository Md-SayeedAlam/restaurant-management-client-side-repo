import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from 'lottie-react';
import lottieLoading from '../../assets/lottie/loading.json'
const PrivateRoute = ({children}) => {

    const location = useLocation()
    
    const {user,loading} = useContext(AuthContext)

    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[200px]">
                <Lottie animationData={lottieLoading} />
                {/* <span className="loading loading-spinner size-20 text-accent"></span> */}
                <h2 className='text-green-600 font-bold text-5xl'>Loading</h2>
            </div>
        );
    }

    if(user && user?.email) {return children}


    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;