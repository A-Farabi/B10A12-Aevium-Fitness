import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedSlot = searchParams.get("slot");

  // Mock trainer data (in real app, this would come from context or API)
  const trainer = {
    name: "Jao Neves",
    image: "https://i.ibb.co.com/7xxRYfjQ/gymtrainer.jpg",
    photo: "/assets/trainers/lena.jpg",
    specialty: "Strength & HIIT Coach",
  };

  // Membership Packages
  const packages = [
    {
      name: "Basic",
      price: "$10",
      features: [
        "Access to gym facilities during regular hours",
        "Use of cardio and strength training equipment",
        "Access to locker rooms and showers",
      ],
      color: "base-content/50",
    },
    {
      name: "Standard",
      price: "$50",
      features: [
        "All benefits of the Basic Membership",
        "Access to group fitness classes (Yoga, Spinning, Zumba)",
        "Use of additional amenities like sauna or steam room",
      ],
      color: "#FF7443",
      popular: true,
    },
    {
      name: "Premium",
      price: "$100",
      features: [
        "All benefits of the Standard Membership",
        "Access to personal training sessions with certified trainers",
        "Discounts on massage therapy & nutrition counseling",
      ],
      color: "#1AB0B0",
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="py-12 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-base-content">
          Confirm Your Session
        </h1>
        <p className="text-base-content/70 mt-2">
          with{" "}
          <span className="font-semibold text-[#1AB0B0]">{trainer.name}</span>
        </p>
      </div>

      {/* Booking Summary */}
      <div className="bg-base-100 p-6 rounded-xl shadow-sm mb-10">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-16 h-16 rounded-lg object-cover border-2 border-[#1AB0B0]"
          />
          <div>
            <h2 className="text-xl font-bold text-base-content">
              {trainer.name}
            </h2>
            <p className="text-base-content/70">{trainer.specialty}</p>
          </div>
        </div>

        <div className="p-4 bg-base-200 rounded-lg">
          <h3 className="font-semibold text-base-content">Selected Session:</h3>
          <p className="text-base-content/80 mt-1 text-lg">{selectedSlot}</p>
        </div>
      </div>

      {/* Membership Packages */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-base-content text-center mb-2">
          Choose Your Membership
        </h2>
        <p className="text-base-content/70 text-center mb-8">
          Select one plan to unlock your session and gym access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card border-2 transition-all duration-300 hover:shadow-xl ${
                selectedPackage === pkg.name
                  ? "border-[#1AB0B0] shadow-lg scale-105"
                  : "border-base-300 hover:border-base-400"
              }`}
              style={{
                borderColor:
                  selectedPackage === pkg.name ? pkg.color : undefined,
              }}
              onClick={() => setSelectedPackage(pkg.name)}
            >
              {/* Card Header */}
              <div className="card-body p-6">
                {pkg.popular && (
                  <div
                    className="badge text-white text-xs px-3 py-1 mb-3 self-start"
                    style={{ backgroundColor: pkg.color }}
                  >
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-base-content">
                  {pkg.name} Membership
                </h3>
                <div className="text-2xl font-extrabold text-[#1AB0B0] mb-4">
                  {pkg.price}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-base-content/80 flex items-start gap-2"
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: pkg.color }}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Radio Select */}
                <div className="flex justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                      selectedPackage === pkg.name
                        ? "bg-[#1AB0B0] border-[#1AB0B0]"
                        : "border-base-content/50"
                    }`}
                    style={{
                      borderColor:
                        selectedPackage === pkg.name ? undefined : pkg.color,
                    }}
                  >
                    {selectedPackage === pkg.name && (
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: "white" }}
                      ></div>
                    )}
                  </div>
                  <span className="ml-2 text-sm">Select</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Now Button */}
      <div className="text-center">
        <Link
          to={`/payment?trainer=${trainer.id}&slot=${encodeURIComponent(
            selectedSlot
          )}&package=${selectedPackage}`}
          className={`btn text-white font-semibold px-10 py-3 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all ${
            !selectedPackage
              ? "opacity-60 cursor-not-allowed"
              : "hover:shadow-[#1AB0B0]/30"
          }`}
          style={{
            backgroundColor: selectedPackage ? "#1AB0B0" : "#ccc",
          }}
          onClick={(e) => {
            if (!selectedPackage) {
              e.preventDefault();
              alert("Please select a membership plan.");
            }
          }}
        >
          Join Now →
        </Link>

        {!selectedPackage && (
          <p className="text-base-content/60 text-sm mt-3">
            Please select a package to continue.
          </p>
        )}
      </div>

      {/* Cancellation Policy */}
      <div className="mt-12 text-center text-sm text-base-content/50">
        <p>
          ✅ 60-minute session &nbsp;|&nbsp; 💬 Cancellation: 24h notice
          &nbsp;|&nbsp; 🔐 Secure payment
        </p>
      </div>
    </div>
  );
};

export default BookingPage;
