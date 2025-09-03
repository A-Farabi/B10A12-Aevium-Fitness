import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background with gradient accents */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 50%, #1AB0B0, transparent),
                       radial-gradient(circle at 70% 30%, #FA5A7D, transparent),
                       radial-gradient(circle at 80% 70%, #8676FE, transparent),
                       radial-gradient(circle at 20% 80%, #FF7443, transparent)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          style={{ color: '#1AB0B0' }}
        >
          Train Smarter,
          <span className="block text-base-content">Not Harder</span>
        </h1>

        <p className="text-lg md:text-xl text-base-content/80 mb-8 leading-relaxed">
          Track your progress, join live classes, and stay motivated with a fitness community that moves with you.
        </p>

        <Link
          to="/all-classes"
          className="btn px-8 py-3 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: '#1AB0B0' }}
        >
          Explore Classes 🏋️‍♀️
        </Link>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-[#FF7443] opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-3 h-3 rounded-full bg-[#FA5A7D] opacity-70 animate-bounce delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-[#8676FE] opacity-80 animate-pulse delay-700"></div>
    </section>
  );
};

export default Banner;