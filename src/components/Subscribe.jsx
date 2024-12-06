import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Subscribe = () => {
    return (
        <div>
            <Fade cascade>
                 {/* card-1 */}
              <div className="bg-banner bg-no-repeat bg-cover">
                <div className=' flex justify-center items-center *:text-white  h-[500px]   border-1 bg-gradient-to-b from-[#0000008a] to-[#0000002a]'>
                    <div className='  space-y-4 text-center'>
                       <div>
                       <h2 className='text-4xl font-bold'>Subscribe Our NewsLatter</h2>
                       </div>
                       <div>
                   
                   <label className="" >
                    <input type="text" placeholder='Subscribe...' className=' bg-transparent border-b-2 text-white mb-6 md:w-full' /><br />
                     <span className=" btn bg-amber-500 text-white">Subscribe</span>
                   </label>
                                       </div>
                    </div>
                   
                </div>

                </div>
            </Fade>
             
        </div>
    );
};

export default Subscribe;