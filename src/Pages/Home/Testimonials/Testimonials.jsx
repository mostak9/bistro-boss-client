import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import quotes from "../../../assets/quotes.png";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle heading="TESTIMONIALS" subHeading="What our clients say" />
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3000,
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center flex flex-col items-center justify-center px-32 py-20 space-y-6">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <img src={quotes} alt="" />
                <p>{review.details}</p>
                <h1 className="text-[#CD9003] text-3xl font-medium">
                  {review.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
