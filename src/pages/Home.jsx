import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Products from "../components/products";
import Title from "../components/Title";
import About from "../components/About";
import Category from "../components/Category";
import Subscribe from "../components/Subscribe";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Loader";

const Home = () => {
    const [loader,setLoader]=useState(true)
    const [products,setProducts] =useState([])
    // setLoader(true)
    // {
    //     loader?<Loader></Loader>:''
    // }

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoader(false)
        })
    },[])


        // console.log(products)



    return (
     <div>
        <Slider></Slider>
{/* product section */}
       <section>
        <Title title={'Products'} subTitle={"Explore our selection of high-quality sports gear. From running shoes to tennis racquets, find everything you need to excel in your sport."}></Title>

        {
            loader&&<Loader></Loader>
        }
       <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 my-12 w-11/12 mx-auto">
        {
           !loader&&( products.map(product=><Products key={product._id} product={product}></Products>))
        }
        </div>
       </section>
       {/* category section */}
       <section></section>
       {/* about section */}
       <section className="my-20">
        
        <About></About>
       </section>


       {/* category section */}
       <section className="w-11/12 mx-auto mb-20">
        <Category></Category>
       </section>

       {/* subscribe section */}
       <section className="mb-20">
        <Subscribe></Subscribe>
       </section>
     </div>

);
};

export default Home;