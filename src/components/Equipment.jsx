import React from 'react';
import { NavLink } from 'react-router-dom';

const Equipment = ({equipment,idx}) => {
    const {_id,name,category,price} = equipment
    // console.log(equipment)
    return (
       
          
        <tr>
          {/* row 1 */}
        <th>{idx +1}</th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td><NavLink to={`/equipment/${_id}`}><button className='btn bg-white'>View Details</button></NavLink></td>
      </tr>
    
        
    );
};

export default Equipment;