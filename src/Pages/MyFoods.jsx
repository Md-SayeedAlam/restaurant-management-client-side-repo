import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import useAxiosSecure from '../Components/Hooks/useAxiosSecure';

const MyFoods = () => {
   useEffect(() => {
              document.title = "My Foods || Nova Restaurant";
            }, []);
    
    const [equipment, setEquipment] = useState([]);
    const params = useParams()
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{

      // axios.get(`https://restaurent-management-server-one.vercel.app/api/foods?email=${user.email}`,{withCredentials:true})
      axiosSecure.get(`/api/foods?email=${params.email}`)
      .then(res=>setEquipment(res.data))


    },[params.email])



    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-6 bg-base-200 p-3">
          <h2 className='text-3xl text-center'>My Foods</h2>
 {/* added responsive classes in this table */}
  <div className="w-full ">
    <table className="table-auto w-full border border-gray-200">
      <thead>
        <tr className="">
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            No:
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Photo
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Item Name
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Price
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Category
          </th>
          <th className="px-2 py-1 text-center text-xs font-semibold border border-gray-200">
            Details
          </th>
        </tr>
      </thead>
      <tbody>
        {equipment.map((item, index) => (
          <tr
            key={item._id}
            className=""
          >
            <td className="px-2 py-1 text-xs border border-gray-200 text-center">
              {index + 1}
            </td>
            <td className="px-2 py-1 border border-gray-200">
              <img
                src={item.photo}
                alt={item.itemName}
                className="w-8 h-8 rounded-full object-cover mx-auto"
              />
            </td>
            <td className="px-2 py-1 text-xs border text-center border-gray-200 break-words">
              {item.itemName}
            </td>
            <td className="px-2 py-1 text-xs border border-gray-200 text-center">
              ${item.price}
            </td>
            <td className="px-2 py-1 text-xs border text-center border-gray-200 break-words">
              {item.category}
            </td>
            <td className="px-2 py-1 text-xs border border-gray-200">
              <div className="flex justify-center">
                <Link to={`/update/${item._id}`}>
                  <button className="btn btn-xxs bg-gray-300 text-[10px]">
                    Update
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    );
};

export default MyFoods;