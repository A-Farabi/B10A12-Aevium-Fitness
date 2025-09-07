import React, { useState, useContext } from "react";
import Select from "react-select"; // For multi-select days
import { AuthContext } from "../Layout/AuthLayout/Authprovider";

const BecomeTrainer = () => {
  const { user } = useContext(AuthContext);

  //   innitial state
  const initialFormData = {
    fullName: "",
    age: "",
    photoURL: "",
    skills: [],
    availableDays: [],
    availableTime: "",
    otherInfo: "",
  };

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    photoURL: "",
    skills: [],
    availableDays: [],
    availableTime: "",
    otherInfo: "",
  });

  const [errors, setErrors] = useState({});

  // Skills Options (checkbox)
  const skillOptions = [
    "Strength Training",
    "Cardio",
    "Yoga",
    "Pilates",
    "HIIT",
    "Boxing",
    "Nutrition",
    "Mobility",
    "Personal Training",
    "Group Classes",
  ];

  // Days of the week (react-select options)
  const dayOptions = [
    { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
  ];

  // Time Availability Options
  const timeOptions = [
    { value: "morning", label: "Morning (6AM - 12PM)" },
    { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
    { value: "evening", label: "Evening (5PM - 9PM)" },
  ];

  // Handle checkbox toggle
  const handleSkillChange = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle react-select for days
  const handleDayChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      availableDays: selectedOptions
        ? selectedOptions.map((opt) => opt.value)
        : [],
    }));
  };

  // Handle Time Select
  const handleTimeChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      availableTime: selectedOption ? selectedOption.value : "",
    }));
  };

  // Validate & Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.age) newErrors.age = "Age is required.";
    if (!formData.photoURL)
      newErrors.photoURL = "Profile image URL is required.";
    if (formData.skills.length === 0)
      newErrors.skills = "Select at least one skill.";
    if (formData.availableDays.length === 0)
      newErrors.availableDays = "Select at least one day.";
    if (!formData.availableTime)
      newErrors.availableTime = "Select your available time.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Send to backend
    // console.log("Application Submitted:", {
    //   ...formData,
    //   email: user?.email,
    //   status: "Pending",
    //   appliedAt: new Date().toISOString(),
    // });

    setFormData(initialFormData)
    setErrors({})

    // Mock success
    alert("Application submitted successfully! Status: Pending approval.");
  };

  return (
    <div className="py-4 px-6 md:px-12 lg:px-20 max-w-3xl mx-auto">
      <div className="bg-base-100 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-base-content mb-2">
          Become a Trainer
        </h2>
        <p className="text-base-content/70 mb-6">
          Share your expertise and inspire others on their fitness journey. Your
          application will be reviewed shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName}</span>
            )}
          </div>

          {/* Email (Read-only) */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full bg-base-200 text-base-content/70 cursor-not-allowed"
            />
          </div>

          {/* Age */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Age</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="25"
            />
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age}</span>
            )}
          </div>

          {/* Profile Image URL */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Profile Image URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="https://example.com/your-photo.jpg"
            />
            {errors.photoURL && (
              <span className="text-red-500 text-sm">{errors.photoURL}</span>
            )}
          </div>

          {/* Skills (Checkboxes) */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Skills</span>
            </label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {skillOptions.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.skills.includes(skill)}
                    onChange={() => handleSkillChange(skill)}
                    className="checkbox checkbox-sm"
                    style={{ accentColor: "#1AB0B0" }}
                  />
                  <span className="text-sm">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <span className="text-red-500 text-sm">{errors.skills}</span>
            )}
          </div>

          {/* Available Days */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Available Days</span>
            </label>
            <Select
              isMulti
              options={dayOptions}
              value={dayOptions.filter((day) =>
                formData.availableDays.includes(day.value)
              )}
              onChange={handleDayChange}
              isClearable={false}
              closeMenuOnSelect={false}
              className="react-select"
              classNamePrefix="react-select"
              placeholder="Select days..."
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: errors.availableDays ? "#ef4444" : "#d1d5db",
                  borderRadius: "0.5rem",
                  "&:hover": { borderColor: "#1AB0B0" },
                }),
              }}
            />
            {errors.availableDays && (
              <span className="text-red-500 text-sm block mt-1">
                {errors.availableDays}
              </span>
            )}
          </div>

          {/* Available Time */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Preferred Time of Day
              </span>
            </label>
            <select
              value={formData.availableTime}
              onChange={(e) =>
                handleTimeChange(
                  timeOptions.find((opt) => opt.value === e.target.value) ||
                    null
                )
              }
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select time
              </option>
              {timeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.availableTime && (
              <span className="text-red-500 text-sm">
                {errors.availableTime}
              </span>
            )}
          </div>

          {/* Other Info */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Additional Information
              </span>
            </label>
            <textarea
              name="otherInfo"
              value={formData.otherInfo}
              onChange={handleChange}
              rows="4"
              className="textarea textarea-bordered w-full"
              placeholder="Tell us about your experience, certifications, or why you want to join Aevium..."
            ></textarea>
          </div>

          {/* Apply Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="btn w-full text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-[#1AB0B0]/30 transform hover:scale-105 transition-all"
              style={{ backgroundColor: "#1AB0B0" }}
            >
              Apply to Become a Trainer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeTrainer;
