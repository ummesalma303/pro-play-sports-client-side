import React, { useContext } from 'react';
import Title from '../components/Title';
import { AuthContext } from '../provider/AuthProvider';

const AddEquipment = () => {
    const {logUser}=useContext(AuthContext)
    console.log(logUser?.displayName)
    console.log(logUser?.email)
    const handleAddEquipment=e=>{
        e.preventDefault()
        const form = e.target
  
        const item=form.item.value
        const image=form.image.value
        const category=form.category.value
        const description=form.description.value
        const price=form.price.value
        const rating=form.rating.value
        const customization=form.customization.value
        const processing=form.processing.value
        const stock=form.stock.value
        const name=form.name.value
        const email=form.email.value
        const equipmentData ={item,email,image,category,description,price,rating,customization,processing,stock,name}
        // console.log(data)


        fetch('http://localhost:5000/equipment',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(equipmentData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('added successfully')

            }
        })
        
        
    }


    return (
        <div className='my-20 w-11/12 mx-auto'>
          
<div className="flex justify-center items-center">



<div className=" bg-blue-50 w-full max-w-5xl shrink-0 ">
<div className="mt-4">
<Title title={'Add Equipment'} subTitle={"Explore our selection of high-quality sports gear. From running shoes to tennis racquets, find everything you need to excel in your sport."}></Title>

</div>

<form onSubmit={handleAddEquipment} className="card-body grid grid-cols-1 md:grid-cols-2  gap-6 max-w-5xl ">



    {/* 1 */}
<div className="form-control">
<label className="label">
<span className="label-text">Item Name</span>
</label>
<input type="text" placeholder="Item Name" name='item' className="input input-bordered" required />
</div>
{/* 2 */}
<div className="form-control">
<label className="label">
<span className="label-text">Image</span>
</label>
<input type="text" placeholder="Image" name='image' className="input input-bordered" required />
</div>
{/* 3 */}
<div className="form-control">
<label className="label">
<span className="label-text">Category Name</span>
</label>
<input type="text" placeholder="Category Name" name='category' className="input input-bordered" required />
</div>
{/* 4 */}
<div className="form-control">
<label className="label">
<span className="label-text">Description</span>
</label>
<textarea type="text"  placeholder="Description" name="description" className="input input-bordered" required ></textarea>
{/* <input  placeholder="Description" className="input input-bordered" required /> */}
</div>
{/* 5 */}
<div className="form-control">
<label className="label">
<span className="label-text">Price</span>
</label>
<input type="number" placeholder="Price" name='price' className="input input-bordered" required />
</div>
{/* 6 */}
<div className="form-control">
<label className="label">
<span className="label-text">Rating</span>
</label>
<input type="text" placeholder="Rating" name='rating' className="input input-bordered" required />
</div>
{/* 7 */}
<div className="form-control">
<label className="label">
<span className="label-text">Customization</span>
</label>
<input type="text" placeholder="Customization" name='customization' className="input input-bordered" required />
</div>
{/* 8 */}
<div className="form-control">
<label className="label">
<span className="label-text">Processing Time</span>
</label>
<input type="text" placeholder="Processing Time" name='processing' className="input input-bordered" required />
</div>
{/* 9 */}
<div className="form-control">
<label className="label">
<span className="label-text">Stock Status</span>
</label>
<input type="text" placeholder="Stock Status" name='stock' className="input input-bordered" required />
</div>
{/* 10 */}
<div className="form-control">
<label className="label">
<span className="label-text">User Name</span>
</label>
<input type="text" name='name' value={logUser?.displayName} className="input input-bordered" disabled/>

</div>
{/* 11 */}
<div className="form-control col-span-1 md:col-span-2">
<label className="label">
<span className="label-text">User Email</span>
</label>
<input type="text" name='email' value={logUser?.email} className="input input-bordered cursor-not-allowed " disabled/>

</div>


<div className="form-control mt-6 col-span-1 md:col-span-2">
<button type='submit' className="btn bg-blue-500 text-white ">Submit</button>
</div>
</form>
</div>

</div>
           
        </div>
    );
};

export default AddEquipment;