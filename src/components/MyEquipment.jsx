import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipment = ({equipment,loadedEquipment,setLoadedEquipment}) => {
    const {_id,item,email,image,category,description,price,rating,customization,processing,stock,name}=equipment

    const handleDelete=(id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-equipment-server.vercel.app/equipment/${id}`,{
                    method:"DELETE",
                    
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
        
                    }

                    const remaining=loadedEquipment.filter(equ=>equ._id!==id)
                    setLoadedEquipment(remaining)
                })
            }
          });
      
    }
    return (
        <div>
            
            <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
  <h2 className="card-title">Item Name: {item}</h2>
    <h4>Category: {category}</h4>
   <div className="flex justify-between">
   <h4>Price: ${price}</h4>
   <h4>Rating: {rating}</h4>
   </div>
    <h4>User Name: {name}</h4>
    <h4>Email: {email}</h4>
    <h4>Customization: {customization}</h4>
    <div className="flex justify-between">
    <h4>Processing: {processing}</h4>
    <h4>Stock: {stock}</h4>
    </div>
    <p>Description: {description}</p>
    <div className="card-actions mt-4">
      <NavLink to={`/updateEquipment/${_id}`}><button className="btn bg-blue-400 text-white">Update</button></NavLink>
      <button className="btn bg-blue-400 text-white" onClick={()=>handleDelete(_id)}>Delete</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default MyEquipment;