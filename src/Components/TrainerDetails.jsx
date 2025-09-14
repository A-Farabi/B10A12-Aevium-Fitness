import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const TrainerDetails = () => {
  const { _id } = useParams();
  const [trainer, setTrainer] = useState(null)
  console.log(_id);

  useEffect(()=>{
    axios.get(`http://localhost:5000/trainers/${_id}`)
    .then(res => setTrainer(res.data))
    .catch(err => console.log(err.message))
  },[_id])

// const mockTrainers = [
//   {
//     _id: 1,
//     name: "Jao Neves",
//     image: "https://i.ibb.co.com/HTmp90Hd/gymtrainer3.jpg",
//     experience: 10,
//     specialty: ["Strength Training", "HIIT", "Nutrition Coaching"],
//     bio: "With over a decade of experience, Neves is a certified strength coach passionate about transforming beginners into confident athletes. He believes in progressive overload, proper form, and long-term sustainability.",
//     qualifications: [
//       "NASM-CPT",
//       "Precision Nutrition Level 1",
//       "Corrective Exercise Specialist",
//     ],
//     rating: 4.9,
//     totalReviews: 84,
//   },
//   {
//     _id: 2,
//     name: "M. Martinez",
//     image: "https://i.ibb.co.com/fth0HYh/chris-pine.jpg",
//     experience: 8,
//     specialty: ["Yoga", "Mobility", "Meditation", "Injury Recovery"],
//     bio: "Marti blends ancient mindfulness practices with modern movement science. His sessions focus on alignment, breathwork, and holistic healing — perfect for high-stress professionals and recovering athletes.",
//     qualifications: [
//       "E-RYT 500",
//       "Yoga Therapy Certified",
//       "Functional Movement Screen (FMS)",
//     ],
//     rating: 5.0,
//     totalReviews: 56,
//   },
//   {
//     _id: 3,
//     name: "Mular Thompson",
//     image: "https://i.ibb.co.com/TMwwpKP4/gymtrainer2.webp",
//     experience: 12,
//     specialty: ["Cardio & Endurance"],
//     bio: "Former marathon champion. She helps clients push past limits safely and sustainably.",
//     qualifications: ["Certified Endurance Coach", "Sports Nutrition Diploma"],
//     rating: 4.8,
//     totalReviews: 63,
//   },
//   {
//     _id: 4,
//     name: "Diego Morales",
//     image: "https://i.ibb.co.com/7xxRYfjQ/gymtrainer.jpg",
//     experience: 9,
//     specialty: ["Functional Fitness"],
//     bio: "Focuses on real-world strength, balance, and injury prevention.",
//     qualifications: ["CrossFit Level 2", "Kettlebell Specialist"],
//     rating: 4.7,
//     totalReviews: 45,
//   },
// ];

// const trainer = mockTrainers.find(t => t._id === Number(_id));

  // Mock Available Time Slots
  const availableSlots = [
    "Mon, Aug 12 - 08:00 AM",
    "Mon, Aug 12 - 06:00 PM",
    "Tue, Aug 13 - 07:00 AM",
    "Wed, Aug 14 - 05:30 PM",
    "Thu, Aug 15 - 09:00 AM",
    "Fri, Aug 16 - 07:00 PM",
  ];

  if (!trainer) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl text-base-content">Trainer not found.</h2>
        <Link to="/trainers" className="link text-[#1AB0B0] mt-2 inline-block">
          ← Back to All Trainers
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          Meet <span className="text-[#1AB0B0]">{trainer.name}</span>
        </h1>
        <p className="text-base-content/70 mt-2">
          One-on-one sessions tailored to your goals
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left: Trainer Info */}
        <div className="lg:col-span-3">
          <div className="bg-base-100 p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-[#1AB0B0]"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-base-content">
                  {trainer.name}
                </h2>
                <p className="text-[#1AB0B0] font-medium">
                  {trainer.experience}+ Years of Experience
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm text-base-content">
                    {trainer.rating}{" "}
                    <span className="text-base-content/60">
                      ({trainer.totalReviews} reviews)
                    </span>
                  </span>
                </div>

                {/* Expertise Badges */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {trainer.specialty.map((skill, i) => (
                    <span
                      key={i}
                      className="badge badge-sm"
                      style={{ backgroundColor: "#1AB0B0", color: "white" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bio & Qualifications */}
            <div className="mt-8 space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-base-content mb-2">
                  About {trainer.name}
                </h3>
                <p className="text-base-content/80 leading-relaxed">
                  {trainer.bio}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-base-content mb-2">
                  Qualifications
                </h3>
                <ul className="list-disc list-inside text-base-content/80 space-y-1">
                  {trainer.qualifications.map((qual, i) => (
                    <li key={i}>{qual}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-base-content mb-2">
                  Approach
                </h3>
                <p className="text-base-content/80">
                  {trainer.name} believes in personalized training, functional
                  movement, and sustainable progress. Every session is designed
                  to match your fitness level, goals, and lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Available Slots */}
        <div className="lg:col-span-2">
          <div className="bg-base-100 p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-base-content mb-4">
              Available Sessions
            </h3>
            <p className="text-base-content/70 text-sm mb-5">
              Choose a time that works for you. All sessions are 60 minutes.
            </p>

            <div className="space-y-3">
              {availableSlots.map((slot, i) => (
                <Link
                  key={i}
                  to={`/booking/${trainer._id}?slot=${encodeURIComponent(slot)}`}
                  className="btn btn-outline w-full text-left justify-start hover:bg-[#1AB0B0]/10 hover:border-[#1AB0B0] transition-colors"
                >
                  {slot}
                </Link>
              ))}
            </div>

            {availableSlots.length === 0 && (
              <p className="text-base-content/60 text-center py-4 text-sm">
                No slots available this week. Check back soon!
              </p>
            )}

            <div className="mt-6 text-xs text-base-content/50">
              ✅ 60-minute session &nbsp;|&nbsp; 💬 Cancellation: 24h notice
            </div>
          </div>
        </div>
      </div>

      {/* "Be A Trainer" CTA Section */}
      <div
        className="mt-20 py-16 rounded-2xl text-center text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1AB0B0, #8676FE, #FA5A7D)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40-10C50,20,70,40,50,60C30,80,10,80,-10,60C-30,40,-30,20,-20-10C-10-40,10-40,40-10Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Share Your Expertise?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Join Aevium as a certified trainer and inspire others on their
            fitness journey.
          </p>
          <Link
            to="/become-trainer"
            className="btn btn-primary bg-white text-[#1AB0B0] hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
          >
            Become a Trainer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
