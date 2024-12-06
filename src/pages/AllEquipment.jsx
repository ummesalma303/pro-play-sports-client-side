import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Equipment from '../components/Equipment';
import { BiSortAlt2 } from 'react-icons/bi';

const AllEquipment = () => {
  const data =useLoaderData()
  const [equipments,setEquipments]= useState(data)
    // console.log(data)

    const handleSort=()=>{
      // console.log(n)
      const sort = [...equipments].sort((a,b)=> b.price-a.price)
      // console.log(sort)
      // setLoadedEquipment(sort)
      setEquipments(sort)
  }

    return (
        <div>

<div className="overflow-x-auto w-11/12 mx-auto my-20">
<button className='btn mb-5 bg-teal-400 text-white' onClick={handleSort}><BiSortAlt2 />Sort</button>
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
                equipments.map((equipment,idx) => <Equipment key={equipment._id} equipment={equipment} idx={idx}></Equipment>)
            }
     
    </tbody>
  </table>
</div>


        </div>
    );
};

export default AllEquipment;