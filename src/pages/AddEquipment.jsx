import React, { useContext } from "react";
import Title from "../components/Title";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const AddEquipment = () => {
  const { logUser} = useContext(AuthContext);
  
  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;

    const item = form.item.value;
    const image = form.image.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = parseInt(form.price.value);
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

    fetch("https://sports-equipment-server.vercel.app/equipment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // alert("added successfully");
          Swal.fire({
            title: "Success",
            text: "Submit Your Equipment Successfully",
            icon: "success"
          });
        }
      });
  };

  return (
    <div className="my-20 w-11/12 mx-auto">
      <div className="flex justify-center items-center">
      <Fade cascade>
      <div className=" bg-blue-50 w-full max-w-5xl shrink-0 ">
          <div className="pt-8">
            <Title
              title={"Add Equipment"}
              subTitle={
                "Explore our selection of high-quality sports gear. From running shoes to tennis racquets, find everything you need to excel in your sport."
              }
            ></Title>
          </div>

          <form
            onSubmit={handleAddEquipment}
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
                value={logUser?.displayName}
                className="px-4 py-3 bg-white text-green-500 rounded-md cursor-not-allowed"
                disabled
              />
            </div>
            {/* 11 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={logUser?.email}
                className="px-4 py-3 bg-white text-green-500 rounded-md cursor-not-allowed "
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
                name="item"
                className="px-4 py-3 bg-white rounded-md"
                required
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
                className="px-4 py-3 bg-white rounded-md"
                required
              />
            </div>
            {/* 3 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                type="text"
                placeholder="Category Name"
                name="category"
                className="px-4 py-3 bg-white rounded-md"
                required
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
                className="px-4 py-3 bg-white rounded-md"
                required
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
                className="px-4 py-3 bg-white rounded-md"
                required
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
                name="customization"
                className="px-4 py-3 bg-white rounded-md"
                required
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
                className="px-4 py-3 bg-white rounded-md"
                required
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
                className="px-4 py-3 bg-white rounded-md"
                required
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
                className="px-4 py-3 bg-white rounded-md"
                required
              ></textarea>
              {/* <input  placeholder="Description" className="input input-bordered" required /> */}
            </div>



            <div className="form-control mt-6 col-span-1 md:col-span-2">
              <button type="submit" className="btn bg-blue-500 text-white ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fade>
      </div>
    </div>
  );
};

export default AddEquipment;
