import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './ChaptersComp.css';
import { EffectCoverflow } from 'swiper/modules';


const ChaptersComp = () => {
  const { chapters } = useContext(AppContext);

  return (
    <div className='2xl:h-[80%] xl:h-[80%] lg:h-[80%] md:h-[85%] sm:h-[85%] flex items-center justify-center'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper 2xl:w-[1440px] xl:w-[1024px] lg:w-[1024px]"
      >
      {
        chapters.map((chap, index) => 
        (
          <SwiperSlide className='backdrop-blur-md text-white' key={index}>
              <div className='2xl:h-[600px] 2xl:w-[500px] 2xl:p-12 xl:h-[500px] xl:w-[400px] xl:p-10 lg:h-[500px] lg:w-[400px] lg:p-8 md:h-[450px] md:w-[350px] md:p-8 sm:h-[450px] sm:w-[350px] sm:p-7 bg-white bg-opacity-25 rounded-2xl  justify-between items-center flex flex-col gap-auto '>
                <h1 className='2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl'>Chapter {chap.chapter_number}</h1>
                <h2 className='2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl font-bold text-center'>{chap.translation}</h2>
                <p className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-lg text-justify'>{chap.summary.en.substring(0,150)}....</p>
                <div>
                  <NavLink to={`/chapter/${chap.chapter_number}`}>
                      <button className='2xl:text-2xl 2xl:px-4 2xl:py-2 xl:text-xl xl:px-4 xl:py-2 lg:text-xl lg:px-4 lg:py-1.5 md:text-xl md:px-3 md:py-1.5 sm:text-xl sm:px-3 sm:py-1.5 rounded-full bg-white text-black '>Read More</button>
                  </NavLink>
                </div>
              </div>
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
};

export default ChaptersComp;
