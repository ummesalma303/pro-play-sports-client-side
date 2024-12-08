import React from 'react';
import { Fade } from "react-awesome-reveal";
// import about from "../assets/about-2.png"
import player from "../assets/lottie.json"
import Lottie from 'lottie-react';
const About = () => {
    return (
       
                <Fade cascade damping={0.1}>
        <div className='flex flex-wrap-reverse md:flex-nowrap md:justify-between items-center w-11/12 mx-auto'>
        <div className="md:w-1/2">
                <h2 className='text-5xl font-bold mb-5'>About Us</h2>
                <p>At Pro Play Sports, we provide top-quality sports equipment for athletes of all levels. From beginners to pros, our gear ensures peak performance and durability. Shop with us and elevate your game with the best in the industry. Pro Play Sports—your ultimate destination for athletic excellence.</p>
            </div>
          <div className="md:w-[66%]">
          <Lottie animationData={player} loop={true}></Lottie>
          {/* <img className='w-full' src={about} alt="" /> */}
          </div>
        </div>
                </Fade>
            

      
    );
};

export default About;