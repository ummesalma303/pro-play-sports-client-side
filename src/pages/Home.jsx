import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Products from "../components/products";
import Title from "../components/Title";
import About from "../components/About";
import Category from "../components/Category";
import Subscribe from "../components/Subscribe";

const Home = () => {
    const products =useLoaderData()
    // console.log(data)
    return (
     <div>
        <Slider></Slider>
{/* product section */}
       <section>
        <Title title={'Products'} subTitle={"Explore our selection of high-quality sports gear. From running shoes to tennis racquets, find everything you need to excel in your sport."}></Title>
       <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 my-12 w-11/12 mx-auto">
        {
            products.map(product=><Products key={product._id} product={product}></Products>)
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