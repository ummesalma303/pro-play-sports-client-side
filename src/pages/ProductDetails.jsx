import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const {image,category,price,name,description} = useLoaderData()
    return (
      
          <div className='flex justify-center items-center  w-11/12 mx-auto my-20'>
         <div className="card bg-base-200">
  <div className="card-body flex-col md:flex-row md:space-x-4">
    <img
      src={image}
      className="w-full md:w-1/2 h-full rounded-lg shadow-2xl" />
    <div className='space-y-2'>
    <h2 className='text-2xl font-bold'>Name: {name}</h2>
    <h4 className='text-gray-500'>Category: {category}</h4>
    <h4 className='text-lg font-semibold'>Price: ${price}</h4>
    <p>Description: {description}</p>
    </div>
  </div>
</div>
        </div>
    )
};

export default ProductDetails;