import { assets } from "../assets/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";


const id = Math.floor(Math.random()*999)


const ArrowL = ({ className, style, onClick }) => {
  return (
    <div
      className={` justify-self-start    bg-primary border border-secondary p-1 rounded-lg flex justify-center items-center md:hover:bg-secondary active:bg-primary md:hover:border-primary  slider-prev-button-${id} w-10 h-10`}
      // style={{...style}}
      onClick={onClick}
    >
      <img src={assets.arrowLeft} alt="" />
    </div>
  );
};

const ArrowR = ({ className, style, onClick }) => {
  return (
    <div
      className={` justify-self-start    bg-primary border border-secondary p-1 rounded-lg flex justify-center items-center md:hover:bg-secondary active:bg-primary md:hover:border-primary slider-next-button-${id} w-10 h-10`}
      onClick={onClick}
    >
      <img src={assets.arrowRight} alt="" />
    </div>
  );
};




export default ({children}) => {
  return (
    <>
      <div className=" h-52 flex justify-stretch items-stretch bg-primary w-[90vw] mx-auto">
        <Swiper
          modules={[Keyboard, Mousewheel, Navigation, Pagination]}
          spaceBetween={10}
          keyboard={true}
          navigation={{
            nextEl: `.slider-next-button-${id}`,
            prevEl: `.slider-prev-button-${id}`,
          }}
          // width={}
          mousewheel={true}
          pagination={ {
            dynamicBullets: true,
           dynamicMainBullets: 4,
            
            el: '.custom-pagination', // Target the external div
            clickable: true, // Makes the pagination bullets clickable
          }}
          breakpoints={{
            480: {
              slidesPerView: 3
            },
            630: {
              slidesPerView:4
            },
            800: {
              slidesPerView:5
            },
            1000: {
              slidesPerView:6
            },
            1200: {
              slidesPerView:7
            }
          }}

          slidesPerView={2}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >

            {children.map((child, index) => (

              <SwiperSlide key={index}>
                {child}
              </SwiperSlide>
              
            ))}

        </Swiper>
      </div>
      {/* <div className=" w-52 h-10 flex justify-start items-center gap-3 bg-accent">
        <ArrowL />
        <div>

        <div className="custom-pagination w-60"></div>
        </div>
        <ArrowR />
      </div> */}

      <div className="slider-nav mx-auto">
        <ArrowL/>
        <div className=" relative flex items-center justify-center  h-full">
        <div className="custom-pagination"></div>

        </div>
        <ArrowR/>

      </div>
    </>
  );
};
