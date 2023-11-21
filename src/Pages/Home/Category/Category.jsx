import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 mt-20">
        <SectionTitle heading="Order Online" subHeading="From 11:00am to 10:00pm"/>
      <Swiper
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide>
          <img src={slide1} className="w-full" alt="" />
          <h1 className="uppercase font-cinzel text-3xl text-center -mt-20 mb-6 text-white drop-shadow-lg">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="w-full" alt="" />
          <h1 className="uppercase font-cinzel text-3xl text-center -mt-20 text-white drop-shadow-lg">
            Pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="w-full" alt="" />
          <h1 className="uppercase font-cinzel text-3xl text-center -mt-20 text-white drop-shadow-lg">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} className="w-full" alt="" />
          <h1 className="uppercase font-cinzel text-3xl text-center -mt-20 text-white drop-shadow-lg">
            Deserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} className="w-full" alt="" />
          <h1 className="uppercase font-cinzel text-3xl text-center -mt-20 text-white drop-shadow-lg">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
