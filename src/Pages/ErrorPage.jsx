import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full animate-fade-in">
        {/* 404 Error Code */}
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
          404
        </h1>

        {/* Fun Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
          Lost in the AEVIUM?
        </h2>

        <p className="text-base-content/70 mb-8 leading-relaxed">
          We can't find that workout... or page. Try getting back on track!
        </p>

        {/* CTA Button using DaisyUI */}
        <Link
          to="/"
          className="btn btn-primary btn-wide shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          💪 Back to Home
        </Link>

        {/* Decorative SVG Dumbbell (Optional) */}
        <div className="mt-12 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 11V9a3 3 0 016 0v2m0 0v2a3 3 0 01-6 0v-2m6 0V9a3 3 0 00-6 0v2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;