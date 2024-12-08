import React from 'react';
import { Slide } from "react-awesome-reveal"; 
import { NavLink } from 'react-router-dom';

const Products = ({product}) => {
  
    const {_id,name,image,description,price,category}=product
    
    return (
          <Slide cascade >
              <div>
            <div className="card bg-base-100 shadow-md border-[1px] border-[#ffffff7e] rounded-lg">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Price: ${price}</p>
    <p>Category: {category}</p>
    <p className='my-2'>Description: {description}</p>
    <div className="card-actions">
      <NavLink to={`/productDetails/${_id}`}><button className="btn bg-blue-500 text-white">View Details</button></NavLink>
    </div>
  </div>
</div>
        </div>
          </Slide>
    
    );
};

export default Products;