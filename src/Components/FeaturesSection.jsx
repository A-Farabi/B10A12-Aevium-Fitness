import React from 'react';
import { FaBolt, FaChartLine, FaUsers, FaCalendarCheck } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaBolt className="text-3xl" style={{ color: '#1AB0B0' }} />,
      title: "Smart Workouts",
      description: "AI-powered routines adapt to your progress and goals for maximum results.",
    },
    {
      icon: <FaChartLine className="text-3xl" style={{ color: '#FF7443' }} />,
      title: "Progress Tracking",
      description: "Visualize your journey with real-time stats, milestones, and performance insights.",
    },
    {
      icon: <FaUsers className="text-3xl" style={{ color: '#FA5A7D' }} />,
      title: "Live Community",
      description: "Join group classes, challenges, and connect with fitness enthusiasts worldwide.",
    },
    {
      icon: <FaCalendarCheck className="text-3xl" style={{ color: '#8676FE' }} />,
      title: "Schedule & Reminders",
      description: "Never miss a session with smart scheduling and personalized workout reminders.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          Everything You Need to <span className="text-[#1AB0B0]">Stay Fit</span>
        </h2>
        <p className="text-base-content/70 mt-4 text-lg">
          Designed to keep you motivated, consistent, and moving forward — every single day.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-base-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:scale-105"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-base-content mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-base-content/70 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;