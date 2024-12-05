import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Equipment from '../components/Equipment';

const AllEquipment = () => {
    const equipments =useLoaderData()
    // console.log(data)
    return (
        <div>

<div className="overflow-x-auto w-11/12 mx-auto my-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
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