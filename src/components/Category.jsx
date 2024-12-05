import React from 'react';
import Title from './Title';
import category1 from '../assets/small-category.jpg'
import category2 from '../assets/small-category-2.jpg'
import category3 from '../assets/small-category-3.jpg'
import category4 from '../assets/small-category-4.webp'
import category5 from '../assets/small-category-5.webp'
import { Fade, Slide } from 'react-awesome-reveal';
const Category = () => {
    return (
       
             <div>
           <Title title={' Sports Categories'} subTitle={'Discover our range of sports categories, including running, soccer, tennis, swimming, and more. Find top-quality gear for every sport'}></Title>

             <div>
           <Fade cascade damping={0.1}>
            <div className="flex flex-wrap justify-center space-x-9 items-center my-9 text-center">
                <div className="">
                <img className='w-28 h-28' src={category1} alt="" />
                <h2>Shoes</h2>
                </div>
                <div className="">
                <img className='w-28 h-28' src={category2} alt="" />
                <h2>Tennis</h2>
                </div>
                <div className="">
                <img className='w-28 h-28' src={category3} alt="" />
                <h2>Softball Bats</h2>
                </div>
                <div className="">
                <img className='w-28 h-28' src={category4} alt="" />
                <h2>Basketball</h2>
                </div>
                <div className="">
                <img className='w-28 h-28' src={category5} alt="" />
                <h2>Football</h2>
                </div>
            </div>
            </Fade>

            <Slide cascade damping={0.1}>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* card-1 */}
                <div className="bg-category1 bg-center">
                <div className='  h-96 bg-cover  border-1 bg-gradient-to-b from-[#0000008a] to-[#0000002a]'>
                    <div className=' text-white space-y-4 pt-9 pl-9'>
                        <h2 className='text-5xl'>Best Selling <br /><span className='font-bold'>Football</span> </h2>
                        <p>Buy A Beautiful Football. <br />and play.</p>
                        <button className='btn bg-blue-500 text-white'>Shop Now</button>
                    </div>
                </div>

                </div>
                {/* card-2 */}
                <div className="bg-category2 bg-center bg-no-repeat bg-cover  ">
                <div className='  h-96 bg-cover  border-1 bg-gradient-to-b from-[#0000008a] to-[#0000002a]'>
                    <div className=' text-white space-y-4 pt-9 pl-9'>
                        <h2 className='text-5xl'>Best Selling <br /><span className='font-bold'>Football</span> </h2>
                        <p>Buy A Beautiful Football. <br />and play.</p>
                        <button className='btn bg-blue-500 text-white'>Shop Now</button>
                    </div>
                </div>

                </div>
                {/* card-1 */}
                <div className="bg-category3 bg-center bg-no-repeat bg-cover  ">
                <div className='  h-96 border-1 bg-gradient-to-b from-[#0000008a] to-[#0000002a]'>
                    <div className=' text-white space-y-4 pt-9 pl-9'>
                        <h2 className='text-5xl'>Best Selling <br /><span className='font-bold'>Football</span> </h2>
                        <p>Buy A Beautiful Football. <br />and play.</p>
                        <button className='btn bg-blue-500 text-white'>Shop Now</button>
                    </div>
                </div>

                </div>
                {/* card-1 */}
                <div className="bg-category4 bg-center">
                <div className='  h-96 bg-cover  border-1 bg-gradient-to-b from-[#0000008a] to-[#0000002a]'>
                    <div className=' text-white space-y-4 pt-9 pl-9'>
                        <h2 className='text-5xl'>Best Selling <br /><span className='font-bold'>Football</span> </h2>
                        <p>Buy A Beautiful Football. <br />and play.</p>
                        <button className='btn bg-blue-500 text-white'>Shop Now</button>
                    </div>
                </div>

                </div>
               
            </div>
           </Slide>
           </div>
        </div>
       
    );
};

export default Category;