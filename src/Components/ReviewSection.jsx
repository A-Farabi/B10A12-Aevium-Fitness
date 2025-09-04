import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import star icons (you can use react-icons later, but simple Unicode works for now)
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophia Johnson",
      rating: 5,
      comment: "Amazing! The progress tracking and live classes helped me stay consistent for the first time ever.",
      date: "2025-08-10",
    },
    {
      id: 2,
      name: "Michael Smith",
      rating: 4,
      comment: "Great platform. Clean interface and smart workouts. Only wish there were more yoga sessions.",
      date: "2025-07-22",
    },
    {
      id: 3,
      name: "Ava Martinez",
      rating: 5,
      comment: "The community kept me motivated. Lost 12lbs in 8 weeks — can't believe the transformation!",
      date: "2025-06-15",
    },
    {
      id: 4,
      name: "Ethan Brown",
      rating: 5,
      comment: "Best fitness app I've used. Syncs perfectly with my wearables and tracks everything.",
      date: "2025-06-02",
    },
    {
      id: 5,
      name: "Olivia Davis",
      rating: 4,
      comment: "Highly effective routines. Slight lag on older devices, but overall fantastic experience.",
      date: "2025-05-18",
    },
  ];

  // Helper to render stars
  const renderStars = (rating) => {
    return (
      <div className="flex text-[#1AB0B0] text-lg md:text-xl">
        {[...Array(5)].map((_, i) => {
          const filled = i < Math.floor(rating);
          const hasHalf = i === Math.floor(rating) && rating % 1 !== 0;
          return (
            <span key={i}>
              {filled ? (
                <FaStar />
              ) : hasHalf ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>
          );
        })}
      </div>
    );
  };

  // Format date
  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          What Our <span className="text-[#1AB0B0]">Members Say</span>
        </h2>
        <p className="text-base-content/70 mt-4 text-lg">
          Real stories from people who transformed their fitness journey with Aevium.
        </p>
      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="rounded-xl overflow-hidden shadow-lg"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="py-4 bg-base-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              {/* Rating */}
              <div className="flex justify-between items-start mb-3">
                {renderStars(review.rating)}
                <span className="text-xs text-base-content/50">{formatDate(review.date)}</span>
              </div>

              {/* Comment */}
              <p className="text-base-content/80 mb-5 leading-relaxed flex-grow">
                "{review.comment}"
              </p>

              {/* Author */}
              <div>
                <cite className="font-medium text-base-content not-italic">— {review.name}</cite>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewSection;