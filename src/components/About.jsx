import React from 'react';
import { Fade } from "react-awesome-reveal";
import about from "../assets/about-2.png"
const About = () => {
    return (
       
                <Fade cascade damping={0.1}>
        <div className='md:flex md:justify-between items-center w-11/12 mx-auto'>
        <div className="md:w-1/2">
                <h2 className='text-5xl font-bold mb-5'>About Us</h2>
                <p>At Pro Play Sports, we provide top-quality sports equipment for athletes of all levels. From beginners to pros, our gear ensures peak performance and durability. Shop with us and elevate your game with the best in the industry. Pro Play Sports—your ultimate destination for athletic excellence.</p>
            </div>
          <div className="md:w-1/2">
          <img className='w-full' src={about} alt="" />
          </div>
        </div>
                </Fade>
            

      
    );
};

export default About;