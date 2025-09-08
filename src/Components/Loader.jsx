import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 space-y-6">
      {/* Logo or Brand Icon */}
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full animate-spin"
          style={{
            border: '4px solid transparent',
            borderTopColor: '#1AB0B0',
            borderBottomColor: '#8676FE',
            borderLeftColor: '#FF7443',
            borderRightColor: '#FA5A7D',
          }}
        ></div>
        {/* Inner dot for extra elegance */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: '#1AB0B0' }}
          ></div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="text-base-content text-lg font-medium">
        Loading Aevium...
      </p>

      {/* Animated Dots */}
      <div className="flex space-x-1">
        {Array(3)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-[#1AB0B0] rounded-full animate-bounce"
              style={{
                animationDelay: `${0.2 * i}s`,
              }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Loader;