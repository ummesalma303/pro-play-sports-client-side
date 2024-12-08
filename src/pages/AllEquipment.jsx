import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Equipment from '../components/Equipment';
import { BiSortAlt2 } from 'react-icons/bi';
import { Fade } from 'react-awesome-reveal';

const AllEquipment = () => {
  const data =useLoaderData()
  const [equipments,setEquipments]= useState(data)
  const [sort,setSort]=useState(false)
  
  useEffect(()=>{
    fetch(`https://sports-equipment-server.vercel.app/equipment?sort=${sort}`)
    .then(res=>res.json())
    .then(data=>{
      setEquipments(data)
    })
  },[sort])
    const handleSort=()=>{
      setSort(true)
    
  }


  
    return (
       <div className="bg-banner bg-no-repeat bg-cover">
        

<div className="overflow-x-auto w-11/12 mx-auto pt-16 pb-20">
<button className='btn mb-5 bg-teal-400 text-white' onClick={()=>handleSort(true)}><BiSortAlt2 />Sort By Price</button>
<Fade cascade>
<table className="table backdrop-blur-md bg-white/80 *:text-black ">
    {/* head */}
    <thead>
      <tr className='text-xl'>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody >
      
            {
                equipments?.map((equipment,idx) => <Equipment key={equipment._id} equipment={equipment} setEquipments={setEquipments} idx={idx}></Equipment>)
            }
     
    </tbody>
  </table>
</Fade>
</div>


     
       </div>
    );
};

export default AllEquipment;