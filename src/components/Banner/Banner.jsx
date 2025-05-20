import React from 'react';
import Swiper from 'swiper';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

const Banner = () => {
    return (
     <div className="mx-auto mb-5">
      <Swiper
        navigation={true}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
            <h1>Nur Islam</h1>
        </SwiperSlide>
        <SwiperSlide>
            <h1>Ema</h1>
        </SwiperSlide>
        {/* {
          latestSlider.map((app) =>{
            return <SwiperSlide>
                      <div
                        className="hero h-[220px] @min-[500px]:h-[290px] @min-[650px]:h-[320px] @min-[780px]:h-[340px] @min-[900px]:h-[360px] @min-[1100px]:h-[395px] object-cover rounded-md"
                        style={{
                          backgroundImage:
                            `url(${app.banner})`,
                        }}
                      >
                        <div className="hero-overlay rounded-md"></div>
                        <div className="hero-content text-white text-center">
                          <div className="max-w-lg space-y-0">
                            <h1 className="mb-2 sm:mb-5 text-2xl sm:text-4xl font-extrabold text-white lg:text-5xl">{app.name}</h1>
                            <h4 className='text-sm font-medium text-gray-200'>{app.category}</h4>
                            <p className='text-lg font-semibold text-yellow-400'> ⭐ {app.rating}</p>
                            
                            <p className="hidden @min-[540px]:block text-gray-300">
                              {app.description.slice(0, 97)}....
                            </p>
                            <p className="hidden @min-[400px]:block @min-[540px]:hidden text-gray-300">
                              {app.description.slice(0, 37)}....
                            </p>
                            <p className='text-sm sm:[17px] font-medium text-green-400 mb2 sm:mb-5'>{millify(app.downloads, { precision: 2 })}+ Downloads</p>
                            <Link to={'/latest'} className="btn btn-accent sm:text-lg">Explore Latest App</Link>
                          </div>
                        </div>
                      </div>

              
                  </SwiperSlide>
          })
        } */}
    
      </Swiper>
    </div>

    );
};

export default Banner;