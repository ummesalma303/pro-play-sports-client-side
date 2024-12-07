import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Equipment from '../components/Equipment';
import { BiSortAlt2 } from 'react-icons/bi';

const AllEquipment = () => {
  const data =useLoaderData()
  const [equipments,setEquipments]= useState(data)
  const [sort,setSort]=useState(false)
  
  useEffect(()=>{
    fetch(`http://localhost:5000/equipment?sort=${sort}`)
    .then(res=>res.json())
    .then(data=>{
      setEquipments(data)
    })
  },[sort])
    const handleSort=()=>{
      setSort(true)
    
  }


  
    return (
        <div>

<div className="overflow-x-auto w-11/12 mx-auto my-20">
<button className='btn mb-5 bg-teal-400 text-white' onClick={()=>handleSort(true)}><BiSortAlt2 />Sort</button>
  <table className="table bg-slate-100">
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
</div>


        </div>
    );
};

export default AllEquipment;