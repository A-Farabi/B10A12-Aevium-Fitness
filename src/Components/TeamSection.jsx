import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TeamSection = () => {
  const trainers = [
    {
      id: 1,
      name: "Jao Neves",
      role: "Head Fitness Coach",
      image: "https://i.ibb.co.com/HTmp90Hd/gymtrainer3.jpg", // Replace with actual path
      bio: "With over 10 years of experience, Lena specializes in strength training and injury prevention. She’s passionate about helping clients build sustainable fitness habits.",
      expertise: ["Strength Training", "HIIT", "Nutrition Coaching"],
    },
    {
      id: 2,
      name: "M. Martinez",
      role: "Mind-Body Wellness Lead",
      image: "https://i.ibb.co.com/fth0HYh/chris-pine.jpg",
      bio: "Rohan blends yoga, mobility work, and mindfulness to create balanced programs that heal as much as they challenge.",
      expertise: ["Yoga", "Mobility", "Meditation", "Recovery"],
    },
    {
      id: 3,
      name: "Mulaar Thompson",
      role: "Cardio & Endurance Specialist",
      image: "https://i.ibb.co.com/TMwwpKP4/gymtrainer2.webp",
      bio: "A former marathoner, Maya designs heart-pumping endurance programs that build stamina, confidence, and mental toughness.",
      expertise: ["Running", "Cycling", "Endurance", "HIIT"],
    },
    {
      id: 4,
      name: "Diego Morales",
      role: "Functional Fitness Trainer",
      image: "https://i.ibb.co.com/7xxRYfjQ/gymtrainer.jpg",
      bio: "Diego believes fitness should prepare you for real life. His functional training programs improve movement, balance, and daily performance.",
      expertise: ["Functional Training", "Kettlebells", "Core Stability"],
    },
  ];

  return (
    <section className="pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          Meet the <span className="text-[#1AB0B0]">Aevium Trainers</span>
        </h2>
        <p className="text-base-content/70 mt-4 text-lg max-w-2xl mx-auto">
          Certified, passionate, and dedicated to helping you achieve your best self — meet the experts behind your success.
        </p>
      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="team-swiper"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
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
        {trainers.map((trainer) => (
          <SwiperSlide key={trainer.id}>
            <div className="px-2">
              {/* DaisyUI Card */}
              <div className="card card-bordered bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                {/* Trainer Image */}
                <figure className="h-60 overflow-hidden rounded-t-box">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </figure>

                {/* Card Body */}
                <div className="card-body p-6">
                  <h3 className="text-xl font-bold text-base-content">{trainer.name}</h3>
                  <p className="text-[#1AB0B0] font-medium text-sm">{trainer.role}</p>

                  <p className="text-base-content/80 text-sm mt-3 leading-relaxed">
                    {trainer.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {trainer.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="badge badge-sm text-xs px-3 py-1"
                        style={{
                          backgroundColor: '#1AB0B0',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;