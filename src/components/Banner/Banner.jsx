import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {

    const featuredItems = [
    'Photography Club',
    'JavaScript Group',
    'Cycling Team',
    'Art & Crafts',
    'Gardening Club',
  ];

  return (
    <div className="mx-auto rounded-md shadow-2xl">

      <section className="relative bg-white">
        <div className="">
          <div className="pt-14 pb-8 px-4 md:px-10 lg:px-20">
            <div className="text-center text-base-content/75 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Your Passion with <span className='text-primary/70'>HobbEx</span>
              </h1>
              <p className="text-lg md:text-xl text-base-content/60">
                Discover, connect, and grow with hobby groups in your area.
              </p>
              <h2 className='text-2xl text-base-content/80 font-medium mt-4'>Top Hobby Groups : {' '}
                <span className="text-secondary/70">
                  <Typewriter
                    words={['Photography', 'Gaming', 'Cooking', 'Gardening', 'Traveling', 'Programming']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Swiper
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
                      <div
                        className="hero h-[220px] @min-[500px]:h-[290px] @min-[650px]:h-[320px] @min-[780px]:h-[340px] @min-[900px]:h-[360px] @min-[1100px]:h-[400px] object-cover"
                        style={{
                          backgroundImage:"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"
                        }}
                      >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-white text-center">
                          <div className="max-w-lg space-y-0">
                            <h1 className="mb-2 sm:mb-5 text-2xl sm:text-4xl font-extrabold text-white lg:text-5xl">Name</h1>
                            <h4 className='text-sm font-medium text-gray-200'>Gaming</h4>
                            <p className='text-lg font-semibold text-yellow-400'> ⭐ 4.5</p>
                            
                            <p className="hidden @min-[540px]:block text-gray-300">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui aspernatur nihil sed ut, magni alias, amet repudiandae iste illo iusto odit expedita.
                            </p>
                            <p className='text-sm sm:[17px] font-medium text-green-400 mb2 sm:mb-5'> Downloads</p>
                            <Link to={'/latest'} className="btn btn-accent sm:text-lg">Explore Latest App</Link>
                          </div>
                        </div>
                      </div>

              
           </SwiperSlide>
        
           <SwiperSlide>
                      <div
                        className="hero h-[220px] @min-[500px]:h-[290px] @min-[650px]:h-[320px] @min-[780px]:h-[340px] @min-[900px]:h-[360px] @min-[1100px]:h-[400px] object-cover"
                        style={{
                          backgroundImage:"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"
                        }}
                      >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-white text-center">
                          <div className="max-w-lg space-y-0">
                            <h1 className="mb-2 sm:mb-5 text-2xl sm:text-4xl font-extrabold text-white lg:text-5xl">Name</h1>
                            <h4 className='text-sm font-medium text-gray-200'>Gaming</h4>
                            <p className='text-lg font-semibold text-yellow-400'> ⭐ 4.5</p>
                            
                            <p className="hidden @min-[540px]:block text-gray-300">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui aspernatur nihil sed ut, magni alias, amet repudiandae iste illo iusto odit expedita.
                            </p>
                            <p className='text-sm sm:[17px] font-medium text-green-400 mb2 sm:mb-5'> Downloads</p>
                            <Link to={'/latest'} className="btn btn-accent sm:text-lg">Explore Latest App</Link>
                          </div>
                        </div>
                      </div>

              
           </SwiperSlide>
        
           <SwiperSlide>
                      <div
                        className="hero h-[220px] @min-[500px]:h-[290px] @min-[650px]:h-[320px] @min-[780px]:h-[340px] @min-[900px]:h-[360px] @min-[1100px]:h-[400px] object-cover"
                        style={{
                          backgroundImage:"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"
                        }}
                      >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-white text-center">
                          <div className="max-w-lg space-y-0">
                            <h1 className="mb-2 sm:mb-5 text-2xl sm:text-4xl font-extrabold text-white lg:text-5xl">Name</h1>
                            <h4 className='text-sm font-medium text-gray-200'>Gaming</h4>
                            <p className='text-lg font-semibold text-yellow-400'> ⭐ 4.5</p>
                            
                            <p className="hidden @min-[540px]:block text-gray-300">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui aspernatur nihil sed ut, magni alias, amet repudiandae iste illo iusto odit expedita.
                            </p>
                            <p className='text-sm sm:[17px] font-medium text-green-400 mb2 sm:mb-5'> Downloads</p>
                            <Link to={'/latest'} className="btn btn-accent sm:text-lg">Explore Latest App</Link>
                          </div>
                        </div>
                      </div>

              
           </SwiperSlide>
        
    
      </Swiper>
    </div>
  );
};

export default Banner;