import React, { useContext } from "react";
import Title from "../components/Title";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateEquipment = () => {
//   const { logUser } = useContext(AuthContext)
  const {_id,item,email,image,category,description,price,rating,customization,processing,stock,name} =useLoaderData()
// console.log(data)


  const UpdateEquipment = (e) => {
    e.preventDefault();
    const form = e.target;

    const item = form.item.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const stock = form.stock.value;
    const name = form.name.value;
    const email = form.email.value;
    const equipmentData = {
      item,
      email,
      image,
      category,
      description,
      price,
      rating,
      customization,
      processing,
      stock,
      name,
    };
    // console.log(data)

    fetch(`http://localhost:5000/equipment/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Update successfully");
        }
      });
  };

  return (
    <div className="my-20 w-11/12 mx-auto">
      <div className="flex justify-center items-center">
        <div className=" bg-blue-50 w-full max-w-5xl shrink-0 ">
          <div className="mt-4">
            <Title
              title={"Update Equipment"}
              subTitle={
                "Explore our selection of high-quality sports gear. From running shoes to tennis racquets, find everything you need to excel in your sport."
              }
            ></Title>
          </div>

          <form
            onSubmit={UpdateEquipment}
            className="card-body grid grid-cols-1 md:grid-cols-2  gap-6 max-w-5xl "
          >
              {/* 10 */}
              <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="input input-bordered bg-white"
                disabled
              />
            </div>
            {/* 11 */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={email}
                className="input input-bordered cursor-not-allowed bg-white"
                disabled
              />
            </div>
            {/* 1 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                name="item" defaultValue={item}
                className="input input-bordered"
              />
            </div>
            {/* 2 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image"
                name="image"
                defaultValue={image}
                className="input input-bordered"
              />
            </div>
            {/* 3 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                type="text"
                defaultValue={category}
                placeholder="Category Name"
                name="category"
                className="input input-bordered"
              />
            </div>
            
            {/* 5 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                defaultValue={price}
                className="input input-bordered"
              />
            </div>
            {/* 6 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                defaultValue={rating}
                className="input input-bordered"
              />
            </div>
            {/* 7 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <input
                type="text"
                placeholder="Customization"
                defaultValue={customization}
                name="customization"
                className="input input-bordered"
              />
            </div>
            {/* 8 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="text"
                placeholder="Processing Time"
                name="processing"
                defaultValue={processing}
                className="input input-bordered"
              />
            </div>
            {/* 9 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <input
                type="text"
                placeholder="Stock Status"
                name="stock"
                defaultValue={stock}
                className="input input-bordered"
              />
            </div>
          {/* 4 */}
          <div className="form-control col-span-1 md:col-span-2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                defaultValue={description}
                className="input input-bordered"
              ></textarea>
              {/* <input  placeholder="Description" className="input input-bordered"  /> */}
            </div>

            <div className="form-control mt-6 col-span-1 md:col-span-2">
              <button type="submit" className="btn bg-blue-500 text-white ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEquipment;
