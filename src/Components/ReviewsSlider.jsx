import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaUserCircle, FaStar } from "react-icons/fa";

const reviews = [
  { id: 1, name: "John Doe", review: "Great experience! Loved every bit of it.", rating: 5 },
  { id: 2, name: "Jane Smith", review: "Absolutely amazing service and support!", rating: 4 },
  { id: 3, name: "Michael Lee", review: "Would highly recommend to everyone!", rating: 5 },
  { id: 4, name: "Emily Johnson", review: "Best decision I made, totally worth it!", rating: 4 },
  { id: 5, name: "David Brown", review: "Fantastic quality and quick response!", rating: 5 },
  { id: 6, name: "Sophia Martinez", review: "Highly professional and super helpful!", rating: 4 },
  { id: 7, name: "Daniel Wilson", review: "A seamless and smooth experience!", rating: 5 },
  { id: 8, name: "Olivia Taylor", review: "Five stars! Will use again for sure!", rating: 5 },
];

const ReviewsSlider = () => {
  return (
    <div className="w-full py-10 bg-gray-100 text-center px-6">
      <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        className="w-full mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl h-[220px] transition-transform transform hover:scale-105">
              <FaUserCircle className="text-4xl text-gray-400 mb-2" />
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-gray-600 mt-2 text-sm italic">"{review.review}"</p>
              <div className="flex mt-3 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;