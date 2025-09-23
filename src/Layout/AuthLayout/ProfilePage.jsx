import React, { useContext, useState } from "react";
import { AuthContext } from "./Authprovider";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaEdit,
} from "react-icons/fa";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ProfilePage = () => {
    const axiosPublic = useAxiosPublic()
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);
  const [name, setName] = useState(user?.displayName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "");

  const [isUpdating, setIsUpdating] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // <-- NEW
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setUpdated(false);

    try {
      await updateUserProfile(name, photoUrl);
      await axiosPublic.patch(`/users/${user.email}`, {
        name,
        image: photoUrl,
      });

      setUpdated(true);
      setIsEditing(false); // stop editing after update
      setTimeout(() => setUpdated(false), 3000);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 relative">
      {/* Header Banner */}
      <div
        className="h-24"
        style={{
          background: `linear-gradient(135deg, #1AB0B0, #8676FE)`,
        }}
      ></div>

      <div className="px-6 pt-4 pb-8 -mt-16 relative z-10">
        {/* Avatar */}
        <div className="flex flex-col items-center text-center mb-6">
          <div
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 transform transition hover:scale-105"
            style={{ borderColor: "#1AB0B0" }}
          >
            <img
              src={photoUrl || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {updated && (
            <div className="flex items-center gap-2 text-sm text-[#1AB0B0] mb-4 animate-fade-in">
              <FaCheckCircle /> Profile updated!
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-5">
          {/* Name Input */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
              <FaUser className="text-[#1AB0B0]" /> Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
              placeholder="Enter your full name"
              className="input input-bordered w-full focus:ring-2 focus:ring-[#1AB0B0]/30"
            />
            <FaEdit
              className="absolute right-3 top-9 text-gray-500 cursor-pointer hover:text-[#1AB0B0]"
              onClick={() => setIsEditing(true)}
            />
          </div>

          {/* Photo URL */}
          <div className="relative">
            <label className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
              Photo URL
            </label>
            <input
              type="url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              disabled={!isEditing}
              placeholder="https://example.com/your-photo.jpg"
              className="input input-bordered w-full focus:ring-2 focus:ring-[#1AB0B0]/30"
            />
            <FaEdit
              className="absolute right-3 top-9 text-gray-500 cursor-pointer hover:text-[#1AB0B0]"
              onClick={() => setIsEditing(true)}
            />
          </div>

          {/* Email (Readonly) */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
              <FaEnvelope className="text-[#FF7443]" /> Email
            </label>
            <input
              type="text"
              value={user?.email || ""}
              disabled
              className="input input-bordered w-full bg-base-200 text-base-content/70 cursor-not-allowed"
            />
          </div>

          {/* Last Login */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-base-content mb-2">
              <FaCalendarAlt className="text-[#FA5A7D]" /> Last Login
            </label>
            <input
              type="text"
              value={
                new Date(user?.metadata?.lastSignInTime).toLocaleString() ||
                "Never"
              }
              disabled
              className="input input-bordered w-full bg-base-200 text-base-content/70"
            />
          </div>

          {/* Update Button - only if editing */}
          {isEditing && (
            <button
              type="submit"
              disabled={isUpdating}
              className="btn w-full text-white font-medium py-3 rounded-full shadow-lg hover:shadow-[#1AB0B0]/30 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#1AB0B0" }}
            >
              {isUpdating ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Updating...
                </>
              ) : (
                "Update Profile"
              )}
            </button>
          )}
        </form>
      </div>

      {/* Decorative Corner */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 opacity-10 rounded-tl-full"
        style={{ backgroundColor: "#8676FE" }}
      ></div>
    </div>
  );
};

export default ProfilePage;
