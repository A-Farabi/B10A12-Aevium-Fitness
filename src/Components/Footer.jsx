import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-800 text-base-content pt-12 pb-6 px-6">
      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img
              src="/src/assets/Aevium3.png"
              alt="Aevium Logo"
              className="h-12 object-contain"
              loading="lazy"
            />
          </div>

          <p className="text-base-content/70 text-sm mt-5 leading-relaxed max-w-xs mx-auto md:mx-0">
            Elevate your fitness journey with smart tracking, live classes, and
            a global wellness community.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-xl">
            <a href="#" className="hover:text-[#1AB0B0] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#1AB0B0] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#1AB0B0] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#1AB0B0] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <ul className="space-y-2 text-base-content/70 text-sm leading-snug">
            <li>
              📧{" "}
              <a
                href="mailto:hello@aevium.com"
                className="hover:text-[#1AB0B0] transition-colors"
              >
                hello@aevium.com
              </a>
            </li>
            <li>📞 +1 (800) 555-AEVI</li>
            <li>📍 700 Wellness Blvd, Vital City, VC 90210</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-lg font-semibold">Explore</h4>
          <ul className="space-y-2 text-base-content/70 text-sm">
            <li>
              <Link to="/" href="#" className="hover:text-[#1AB0B0] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" href="#" className="hover:text-[#1AB0B0] transition-colors">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/" href="#" className="hover:text-[#1AB0B0] transition-colors">
                Trainers
              </Link>
            </li>
            <li>
              <Link to="/" href="#" className="hover:text-[#1AB0B0] transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" href="#" className="hover:text-[#1AB0B0] transition-colors">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

    {/* TODO : Fix footer */}

      {/* Bottom Copyright */}
      <div className="w-full mx-auto text-center pt-8 border-t border-base-700 mt-10">
        <p className="text-base-content/60 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#1AB0B0] font-medium">Aevium</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
