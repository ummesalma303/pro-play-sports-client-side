import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

import MyEquipment from '../components/MyEquipment';
import { BiSortAlt2 } from 'react-icons/bi';

const MyEquipments = () => {
    const {logUser} = useContext(AuthContext)
    
    const AllEquipment = useLoaderData()
    const [loadedEquipment,setLoadedEquipment] = useState(AllEquipment)
   

    const myEquipments=loadedEquipment.filter(equipment=>equipment.email === logUser?.email)
    // console.log(res)

    // sort
    const handleSort=()=>{
        // console.log(n)
        const sort = [...loadedEquipment].sort((a,b)=> b.price-a.price)
        // console.log(sort)
        setLoadedEquipment(sort)
    }

    return (
       <div className="w-11/12 mx-auto my-20">
           <div className="flex justify-between items-center">
           <h2 className='text-center text-3xl font-bold my-9'>My Sports Equipment</h2>
           <button className='btn' onClick={handleSort}><BiSortAlt2 />Sort</button>
           </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
            myEquipments.map((equipment,i)=><MyEquipment key={i} equipment={equipment} loadedEquipment={loadedEquipment} setLoadedEquipment={setLoadedEquipment}></MyEquipment>)
            }
        </div>
       </div>
    );
};

export default MyEquipments;