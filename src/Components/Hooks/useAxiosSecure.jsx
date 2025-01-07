import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {  useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL:'https://restaurent-management-server-one.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
    const{signOutUser} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        },error=>{
            if(error.status === 401 || error.status === 403){
               
                signOutUser()
                .then(()=>{
                   
                    navigate('/login')
                })
                .catch(error=>{
                    
                })
            }
            return Promise.reject(error)
        })
    },[])

    return axiosInstance
};

export default useAxiosSecure;