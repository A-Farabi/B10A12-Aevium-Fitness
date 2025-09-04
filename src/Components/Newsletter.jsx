import React from "react";

const Newsletter = () => {
  return (
    <section className="pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto text-center">
      {/* Title & Subtitle */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content">
          Stay in the <span className="text-[#1AB0B0]">Flow</span>
        </h2>
        <p className="text-base-content/70 mt-4 text-lg max-w-2xl mx-auto">
          Get weekly tips, new class alerts, and motivation to keep your fitness journey on track.
        </p>
      </div>

      {/* Newsletter Form */}
      <form className="join join-vertical md:join-horizontal gap-4 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Your name"
          className="input input-bordered w-full md:max-w-xs focus:outline-none focus:border-primary"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full md:max-w-xs focus:outline-none focus:border-primary"
        />

        <button
          type="submit"
          className="btn bg-[#1AB0B0] hover:bg-teal-600 border-none text-white px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
        >
          Subscribe Now
        </button>
      </form>

      {/* Optional Hint */}
      <p className="text-xs text-base-content/50 mt-4">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </section>
  );
};

export default Newsletter;