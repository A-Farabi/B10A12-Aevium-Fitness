import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const AllTrainers = () => {
  // Mock data of all Trainers
  const trainers = [
    {
      _id: 1,
      name: "Jao Neves",
      image: "https://i.ibb.co.com/HTmp90Hd/gymtrainer3.jpg",
      experience: 10,
      specialty: "Strength & HIIT",
      bio: "Certified strength coach with a passion for transforming beginners into athletes.",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "lenacarter.fit",
      },
      availableSlots: 3,
    },
    {
      _id: 2,
      name: "M. Martinez",
      image: "https://i.ibb.co.com/fth0HYh/chris-pine.jpg",
      experience: 8,
      specialty: "Yoga & Mobility",
      bio: "Brings mindfulness and movement together to heal and strengthen the body.",
      social: {
        facebook: "#",
        twitter: "rohan_wellness",
        instagram: "rohan.yoga",
      },
      availableSlots: 5,
    },
    {
      _id: 3,
      name: "Mular Thompson",
      image: "https://i.ibb.co.com/TMwwpKP4/gymtrainer2.webp",
      experience: 12,
      specialty: "Cardio & Endurance",
      bio: "Former marathon champion. She helps clients push past limits safely and sustainably.",
      social: {
        facebook: "mayathompson.run",
        twitter: "#",
        instagram: "maya.endurance",
      },
      availableSlots: 2,
    },
    {
      _id: 4,
      name: "Diego Morales",
      image: "https://i.ibb.co.com/7xxRYfjQ/gymtrainer.jpg",
      experience: 9,
      specialty: "Functional Fitness",
      bio: "Focuses on real-world strength, balance, and injury prevention.",
      social: {
        facebook: "#",
        twitter: "diego_kettlebell",
        instagram: "diego.functional",
      },
      availableSlots: 4,
    },
  ];
  // {
  //   _id: 5,
  //   name: "Sophie Lin",
  //   image: "/assets/trainers/sophie.jpg",
  //   experience: 6,
  //   specialty: "Pilates & Core",
  //   bio: "Precision and control are her mantras. Perfect for posture and core strength.",
  //   social: {
  //     facebook: "#",
  //     twitter: "#",
  //     instagram: "sophie.pilates",
  //   },
  //   availableSlots: 6,
  // },
  // {
  //   _id: 6,
  //   name: "Jamal Khan",
  //   image: "/assets/trainers/jamal.jpg",
  //   experience: 11,
  //   specialty: "Boxing & Conditioning",
  //   bio: "Ex-boxer turned coach. Trains discipline, speed, and mental toughness.",
  //   social: {
  //     facebook: "jamal.fight",
  //     twitter: "jamal_boxer",
  //     instagram: "jamal.khan.fitness",
  //   },
  //   availableSlots: 1,
  // },

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Meet Our <span className="text-[#1AB0B0]">Elite Trainers</span>
          </h2>
          <p className="text-base-content/70 mt-4 text-lg max-w-2xl mx-auto">
            Certified, experienced, and ready to guide you on your fitness journey.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer._id}
              className="card card-bordered bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <figure className="h-56 overflow-hidden rounded-t-box">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </figure>

              {/* Body */}
              <div className="card-body p-6">
                <h3 className="text-xl font-bold text-base-content">{trainer.name}</h3>
                <p className="text-[#1AB0B0] font-medium">{trainer.specialty}</p>
                <p className="text-sm text-base-content/70 mt-2">{trainer.bio}</p>

                {/* Experience */}
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="badge badge-ghost">💪 {trainer.experience}+ yrs</span>
                  <span
                    className={`badge ${
                      trainer.availableSlots <= 2 ? "badge-error" : "badge-success"
                    }`}
                  >
                    {trainer.availableSlots} slot{trainer.availableSlots !== 1 ? 's' : ''} left
                  </span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4 text-base-content/60">
                  {trainer.social.facebook && (
                    <Link to={trainer.social.facebook} target="_blank" className="hover:text-[#1AB0B0] transition-colors">
                      <FaFacebook className="w-4 h-4" />
                    </Link>
                  )}
                  {trainer.social.twitter && (
                    <Link to={`https://twitter.com/${trainer.social.twitter}`} target="_blank" className="hover:text-[#1AB0B0] transition-colors">
                      <FaTwitter className="w-4 h-4" />
                    </Link>
                  )}
                  {trainer.social.instagram && (
                    <Link to={`https://instagram.com/${trainer.social.instagram}`} target="_blank" className="hover:text-[#1AB0B0] transition-colors">
                      <FaInstagram className="w-4 h-4" />
                    </Link>
                  )}
                </div>

{/* Know More Button */}
<div className="card-actions mt-5">
  <Link
    to={`/trainers/${trainer._id}`}
    className="btn btn-primary w-full text-white"
    style={{ backgroundColor: '#1AB0B0' }}
  >
    Know More
  </Link>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTrainers;