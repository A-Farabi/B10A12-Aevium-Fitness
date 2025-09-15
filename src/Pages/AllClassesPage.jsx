import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "./../Hooks/useFetch";

// 🟡 Mock Data: Classes & Trainers
// const mockClasses = [
//   {
//     id: 1,
//     name: "Power Yoga",
//     image: "https://i.ibb.co.com/1fYg1WJ9/power-yoga.webp",
//     duration: "60 min",
//     intensity: "Medium",
//     description:
//       "A flowing blend of strength and flexibility. Perfect for stress relief and building core stability.",
//     trainerIds: [1, 2, 5], // IDs of trainers who teach this class
//   },
//   {
//     id: 2,
//     name: "HIIT Blast",
//     image: "https://i.ibb.co.com/JRTnCVW3/hiit-blast.jpg",
//     duration: "45 min",
//     intensity: "High",
//     description:
//       "High-Intensity Interval Training to torch calories and boost endurance in record time.",
//     trainerIds: [1, 3, 6],
//   },
//   {
//     id: 3,
//     name: "Strength & Core",
//     image: "https://i.ibb.co.com/7xdHxG5c/s-core.jpg",
//     duration: "50 min",
//     intensity: "High",
//     description:
//       "Build muscle and power with weights, resistance bands, and bodyweight drills.",
//     trainerIds: [1, 4, 6],
//   },
//   {
//     id: 4,
//     name: "Pilates Flow",
//     image: "https://i.ibb.co.com/600JPyWM/pilates.jpg",
//     duration: "55 min",
//     intensity: "Low",
//     description:
//       "Focus on posture, alignment, and deep core engagement through controlled movements.",
//     trainerIds: [5],
//   },
//   {
//     id: 5,
//     name: "Cardio Kick",
//     image: "https://i.ibb.co.com/gZWrqJzr/cardio-kik.jpg",
//     duration: "40 min",
//     intensity: "High",
//     description:
//       "Fast-paced cardio with dance, boxing, and jump rope to keep your heart pumping.",
//     trainerIds: [3, 4, 6],
//   },
//   {
//     id: 6,
//     name: "Mobility & Recovery",
//     image: "https://i.ibb.co.com/tMbqxGjx/mov-recovery.jpg",
//     duration: "30 min",
//     intensity: "Low",
//     description:
//       "Stretch, release tension, and improve joint mobility with guided foam rolling and breathing.",
//     trainerIds: [2, 5],
//   },
//   {
//     id: 7,
//     name: "Morning Zumba",
//     image: "https://i.ibb.co.com/fGBJvTgC/morning-zumba.jpg",
//     duration: "50 min",
//     intensity: "Medium",
//     description:
//       "Dance your way to fitness with upbeat Latin rhythms and fun choreography.",
//     trainerIds: [3, 4],
//   },
//   {
//     id: 8,
//     name: "Evening Spin",
//     image: "https://i.ibb.co.com/N6tVTKjD/e-spining.jpg",
//     duration: "45 min",
//     intensity: "High",
//     description:
//       "Ride to the beat in a high-energy indoor cycling session with interval sprints.",
//     trainerIds: [1, 6],
//   },
// ];

// 🟡 Mock Trainers (same as before)
// const trainers = {
//   1: {
//     id: 1,
//     name: "Jao Neves",
//     photo: "https://i.ibb.co.com/HTmp90Hd/gymtrainer3.jpg",
//   },
//   2: {
//     id: 2,
//     name: "M. Martinez",
//     photo: "https://i.ibb.co.com/fth0HYh/chris-pine.jpg",
//   },
//   3: {
//     id: 3,
//     name: "Mular Thompson",
//     photo: "https://i.ibb.co.com/TMwwpKP4/gymtrainer2.webp",
//   },
//   4: {
//     id: 4,
//     name: "Diego Morales",
//     photo: "https://i.ibb.co.com/7xxRYfjQ/gymtrainer.jpg",
//   },
//   5: { id: 5, name: "Sophie Lin", photo: "https://i.ibb.co.com/nzgDRjx/1.jpg" },
//   6: { id: 6, name: "Jamal Khan", photo: "https://i.ibb.co.com/dJm974H/3.jpg" },
// };

// 🔢 Pagination: 6 classes per page
const ITEMS_PER_PAGE = 6;

const AllClassesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: allClasses = [] } = useFetch(
    "allClasses",
    "http://localhost:5000/all-classes"
  );

  const { data: trainers = [] } = useFetch(
    "trainers",
    "http://localhost:5000/trainers"
  );

  console.log("class_Api:", allClasses);
  console.log("trainers_Api:", trainers);

  // 🔍 Calculate total pages
  const totalPages = Math.ceil(allClasses.length / ITEMS_PER_PAGE);

  // 📄 Get classes for current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentClasses = allClasses.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          All <span className="text-[#1AB0B0]">Fitness Classes</span>
        </h1>
        <p className="text-base-content/70 mt-4 text-lg">
          Explore our diverse range of classes designed for every level and
          goal.
        </p>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {currentClasses.map((cls) => (
          <div
            key={cls.id}
            className="card card-bordered bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Class Image */}
            <figure className="h-48 overflow-hidden">
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body p-6">
              {/* Class Name & Info */}
              <h2 className="text-xl font-bold text-base-content">
                {cls.name}
              </h2>
              <div className="flex gap-4 text-sm text-base-content/70 mb-3">
                <span>⏱️ {cls.duration}</span>
                <span>💥 {cls.intensity}</span>
              </div>

              {/* Description */}
              <p className="text-base-content/80 text-sm leading-relaxed mb-4">
                {cls.description}
              </p>

              {/* Trainers Section */}
              <div>
                <h3 className="text-sm font-semibold text-base-content mb-2">
                  Taught by
                </h3>
                <div className="flex -space-x-2">
                  {cls.trainerIds.map((trainerId) => {
                    const trainer = trainers.find(
                      (t) => t._id === trainerId || t.id === trainerId
                      
                    );

                    if (!trainer) {
                      return (
                        <span key={trainerId} className="text-red-500 text-xs">
                          Trainer not found
                        </span>
                      );
                    }

                    return (
                      <Link
                        key={trainerId}
                        to={`/trainers/${trainerId}`}
                        className="w-10 h-10 border-2 border-white rounded-full overflow-hidden hover:ring-2 hover:ring-[#1AB0B0] transition-all transform hover:scale-110"
                        title={trainer.name}
                      >
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="join">
          {/* Previous Button */}
          <button
            className="join-item btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            «
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                className={`join-item btn ${
                  currentPage === page ? "btn-primary text-white" : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            className="join-item btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClassesPage;
