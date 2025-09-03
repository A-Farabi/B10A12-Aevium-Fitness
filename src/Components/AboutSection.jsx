import React from 'react';

const AboutSection = () => {
  return (
    <section className="pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            About <span className="text-[#1AB0B0]">Aevium</span>
          </h2>
          <p className="text-base-content/80 mt-4 text-lg leading-relaxed">
            Aevium Fitness Pvt. Limited is on a mission to make fitness smarter, more accessible, and deeply personal.
            Founded in 2020, we combine cutting-edge technology with human-centered design to help people build lasting
            healthy habits — not just workouts.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-base-content" style={{ color: '#1AB0B0' }}>
                💡 Innovation
              </h3>
              <p className="text-base-content/70 mt-1">
                We use AI-driven insights and adaptive training to personalize every experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-base-content" style={{ color: '#FA5A7D' }}>
                🌱 Community
              </h3>
              <p className="text-base-content/70 mt-1">
                From live classes to challenges, we believe fitness is better together.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-base-content" style={{ color: '#8676FE' }}>
                📈 Growth
              </h3>
              <p className="text-base-content/70 mt-1">
                With 50K+ users across 15 countries, we're growing — but staying human-first.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#1AB0B0', color: 'white' }}>
              Empowering Wellness Since 2020
            </span>
          </div>
        </div>

        {/* Image / Visual Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-full max-w-md aspect-video bg-gradient-to-br from-[#1AB0B0]/20 to-[#8676FE]/20 rounded-2xl border-4 border-base-200 shadow-lg flex items-center justify-center overflow-hidden"
            aria-label="Aevium Team or Fitness Platform Visual"
          >
            <img src="/src/assets/team.jpg" alt="team" />
            {/* <svg
              className="w-3/4 h-3/4 text-[#1AB0B0]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;