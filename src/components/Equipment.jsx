import React from 'react';

const Equipment = ({equipment,idx}) => {
    const {name,category,price} = equipment
    console.log(equipment)
    return (
       
          
        <tr>
          {/* row 1 */}
        <th>{idx +1}</th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
      </tr>
    
        
    );
};

export default Equipment;