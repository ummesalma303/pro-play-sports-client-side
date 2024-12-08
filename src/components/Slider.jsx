// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../assets/banner-1.jpg'
import banner2 from '../assets/banner-2.jpg'
import banner3 from '../assets/banner-3.jpg'
import banner4 from '../assets/banner-4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    return (
        <div className='h-screen'>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div>
            <img className='h-[90vh] w-full relative' src={banner} alt="" />
           <div className="absolute inset-0  flex justify-center items-center h-screen bg-gradient-to-t from-[#0000001a] to-[#00000083]  ">
           <div className=" text-white w-[80%] md:w-1/2 text-center space-y-6">
                <h2 className='text-5xl font-bold'>Pro Play Sports</h2>
                <p>At Pro Play Sports, we provide top-quality sports equipment for athletes of all levels. From beginners to pros, our gear ensures peak performance and durability. Shop with us and elevate your game with the best in the industry. Pro Play Sports—your ultimate destination for athletic excellence.</p>
            </div>
           </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='h-[90vh] w-full relative' src={banner2} alt="" />
           <div className="absolute inset-0  flex justify-center items-center h-screen bg-gradient-to-t from-[#0000001a] to-[#00000083]  ">
           <div className=" text-white w-[80%] md:w-1/2 text-center space-y-6">
                <h2 className='text-5xl font-bold'>Pro Play Sports</h2>
                <p>At Pro Play Sports, we provide top-quality sports equipment for athletes of all levels. From beginners to pros, our gear ensures peak performance and durability. Shop with us and elevate your game with the best in the industry. Pro Play Sports—your ultimate destination for athletic excellence.</p>
            </div>
           </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='h-[90vh] w-full relative' src={banner3} alt="" />
           <div className="absolute inset-0  flex justify-center items-center h-screen bg-gradient-to-t from-[#0000001a] to-[#00000083]  ">
           <div className=" text-white w-[80%] md:w-1/2 text-center space-y-6">
                <h2 className='text-5xl font-bold'>Pro Play Sports</h2>
                <p>At Pro Play Sports, we provide top-quality sports equipment for athletes of all levels. From beginners to pros, our gear ensures peak performance and durability. Shop with us and elevate your game with the best in the industry. Pro Play Sports—your ultimate destination for athletic excellence.</p>
            </div>
           </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <img className='h-[90vh] w-full relative' src={banner4} alt="" />
           <div className="absolute inset-0  flex justify-center items-center h-screen bg-gradient-to-t from-[#0000001a] to-[#00000083]  ">
           <div className=" text-white w-[80%] md:w-1/2 text-center space-y-6">
                <h2 className='text-5xl font-bold'>Pro Play Sports</h2>
                <p>At Pro Play Sports, we provide top-quality sports equipment for athletes of all levels. From beginners to pros, our gear ensures peak performance and durability. Shop with us and elevate your game with the best in the industry. Pro Play Sports—your ultimate destination for athletic excellence.</p>
            </div>
           </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
        </div>
    );
};

export default Slider;