import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

import MyEquipment from '../components/MyEquipment';

const MyEquipments = () => {
    const {logUser} = useContext(AuthContext)
    
    const AllEquipment = useLoaderData()
    const [loadedEquipment,setLoadedEquipment] = useState(AllEquipment)
    // console.log(data)

    const myEquipments=loadedEquipment.filter(equipment=>equipment.email === logUser?.email)
    // console.log(res)


    return (
       <div className="w-11/12 mx-auto">
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
            myEquipments.map((equipment,i)=><MyEquipment key={i} equipment={equipment} loadedEquipment={loadedEquipment} setLoadedEquipment={setLoadedEquipment}></MyEquipment>)
            }
        </div>
       </div>
    );
};

export default MyEquipments;