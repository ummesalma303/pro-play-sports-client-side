import React from 'react';
import { useLoaderData } from 'react-router-dom';


const EquipmentDetails = () => {
    const {item,email,image,category,description,price,rating,customization,processing,stock,name} = useLoaderData()
    // console.log( data.name)
    return (
    //   <div className=" w-11/12 mx-auto">
          <div className='flex justify-center items-center  w-11/12 mx-auto my-20'>
         <div className="card bg-base-200">
  <div className="card-body flex-col md:flex-row md:space-x-4">
    <img
      src={image}
      className="w-full md:w-1/2 h-full rounded-lg shadow-2xl" />
    <div>
    <h2 className="card-title">Item Name: {item}</h2>
    <h4>Category: {category}</h4>
    <h4>Price: ${price}</h4>
    <h4>Email: {email}</h4>
    <h4>Rating: {rating}</h4>
    <h4>Customization: {customization}</h4>
    <h4>Processing: {processing}</h4>
    <h4>Stock: {stock}</h4>
    <p>Description: {description}</p>
    </div>
  </div>
</div>
        </div>
    //   </div>
    );
};

export default EquipmentDetails;