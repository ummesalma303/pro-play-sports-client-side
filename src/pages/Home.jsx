import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import Products from "../components/products";
import Title from "../components/Title";

const Home = () => {
    const products =useLoaderData()
    // console.log(data)
    return (
     <div>
        <Slider></Slider>

       <section>
        <Title></Title>
       <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 my-12 px-20">
        {
            products.map(product=><Products key={product._id} product={product}></Products>)
        }
        </div>
       </section>
     </div>
    );
};

export default Home;