import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const sliderCategories = [
  {
    bannerImg: "https://i.ibb.co/0jV41Tk5/Guest-with-camera-gear-on-safari-in-Botswana-Pangolin-Photo-Safaris-scaled.webp",
    category: "Photography",
    headline: "Capture Life Through the Lens",
    description: "Join photography lovers to explore creativity, learn new techniques, and capture beautiful moments together."
  },
  {
    bannerImg: "https://i.ibb.co/S4wph4Rc/WUQFsu-Weup4y-VTTiv-CMXKe.jpg",
    category: "Video Gaming",
    headline: "Level Up Your Gaming Experience",
    description: "Team up with gamers for competitive fun, co-op play, and exciting discussions about your favorite titles."
  },
  {
    bannerImg: "https://i.ibb.co/VWPS6SjT/Adobe-Stock-1060693368.webp",
    category: "Gardening",
    headline: "Grow Green, Live Clean",
    description: "Share tips, grow plants, and enjoy the peace of gardening with a like-minded local group."
  },
  {
    bannerImg: "https://i.ibb.co/B5Cz0zc2/istockphoto-1439425791-612x612.jpg",
    category: "Programming",
    headline: "Code, Build, Innovate",
    description: "Connect with developers, build cool projects, and upgrade your coding skills in a fun environment."
  },
  {
    bannerImg: "https://i.ibb.co/5WYRR2Bb/360-F-818523251-T67-ETZ2-Dx8-YMq9a-QKg-Te-Rw4ok5m-Caeou.jpg",
    category: "Travelling",
    headline: "Explore the World Together",
    description: "Discover new places, plan trips, and share travel stories with fellow explorers and adventurers."
  },
  {
    bannerImg: "https://i.ibb.co/ksfVdNKG/fishing-silhouette-photography-backlighting-recreation-outdoors-53876-518519.jpg",
    category: "Fishing",
    headline: "Catch, Relax, and Connect",
    description: "Join fellow fishing lovers, plan trips, share tips, and enjoy the peace of nature together."
  }
];


const Banner = () => {
  return (
    <div className="mx-auto rounded-md shadow-2xl">
      <section className="relative bg-white gray-bg-dark-mode my-banner">
        <div className="">
          <div className="pt-14 pb-8 px-4 md:px-10 lg:px-20">
            <div className="text-center text-base-content/75 .white-text-dark-mode max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Explore Your Passion with <span className='text-primary/70'>HobbEx</span>
              </h1>
              <p className="text-lg md:text-xl text-base-content/60 .white-text-dark-mode">
                Discover, connect, and grow with hobby groups in your area.
              </p>
              <h2 className='text-2xl text-base-content/80 .white-text-dark-mode font-medium mt-4'>Top Groups Category: {' '}
                <span className="text-secondary/80 font-bold">
                  <Typewriter
                    words={['Photography','Running','Writing', 'Video Gaming', 'Cooking', 'Gardening', 'Programming', 'Fishing']}
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
           {
            sliderCategories.map(slider => (
              <SwiperSlide>
              <div
                className="hero h-[220px] @min-[500px]:h-[290px] @min-[650px]:h-[320px] @min-[780px]:h-[340px] @min-[900px]:h-[360px] @min-[1100px]:h-[400px] object-cover"
                style={{
                  backgroundImage: `url(${slider.bannerImg})`
                }}
              >
                <div className="hero-overlay"></div>
                <div className=" text-white text-center">
                  <div className="max-w-lg space-y-0">
                    <h1 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-extrabold text-white lg:text-4xl">{slider.category}</h1>
                    <p>{slider.headline}</p>
                    
                    <p className="text-gray-300">
                      {slider.description}
                    </p>
                    <Link to={'/groups'} className="btn btn-secondary btn-outline text-white mt-9 sm:text-lg">View All Groups</Link>
                  </div>
                </div>
              </div>             
           </SwiperSlide>
            ))
           }   
      </Swiper>
    </div>
  );
};

export default Banner;