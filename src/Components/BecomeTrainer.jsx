import React, { useContext } from "react";
import Select from "react-select";
import { AuthContext } from "../Layout/AuthLayout/Authprovider";
import { useForm, Controller } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const BecomeTrainer = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

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

  const dayOptions = [
    { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tue", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
  ];

  const timeOptions = [
    { value: "morning", label: "Morning (6AM - 12PM)" },
    { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
    { value: "evening", label: "Evening (5PM - 9PM)" },
  ];

  const onSubmit = async (data) => {
    try {
      const appplicationData = {
        ...data,
        email: user?.email,
        status: "pending",
        appliedAt: new Date().toLocaleDateString(),
      };

      const res = await axiosPublic.post(
        "/trainer-application",
        appplicationData
      );

      if (res.data.insertedId) {
        toast.success(
          "Application submitted successfully! Status: Pending approval."
        );
        reset();
      }
    } catch (err) {
      toast.error("Trainer application post error:", err);
    }
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Email */}
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
              {...register("age", { required: "Age is required" })}
              className="input input-bordered w-full"
              placeholder="25"
            />
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age.message}</span>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Profile Image URL</span>
            </label>
            <input
              type="url"
              {...register("photoURL", {
                required: "Profile image URL is required",
              })}
              className="input input-bordered w-full"
              placeholder="https://example.com/photo.jpg"
            />
            {errors.photoURL && (
              <span className="text-red-500 text-sm">
                {errors.photoURL.message}
              </span>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Skills</span>
            </label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {skillOptions.map((skill) => (
                <label key={skill} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={skill}
                    {...register("skills", {
                      validate: (val) =>
                        val.length > 0 || "Select at least one skill",
                    })}
                    className="checkbox checkbox-sm"
                    style={{ accentColor: "#1AB0B0" }}
                  />
                  <span className="text-sm">{skill}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <span className="text-red-500 text-sm">
                {errors.skills.message}
              </span>
            )}
          </div>

          {/* Available Days (react-select) */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Available Days</span>
            </label>
            <Controller
              name="availableDays"
              control={control}
              rules={{ required: "Select at least one day" }}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={dayOptions}
                  // keep full objects for react-select display
                  value={dayOptions.filter((opt) =>
                    field.value?.includes(opt.value)
                  )}
                  onChange={(selected) => {
                    field.onChange(selected.map((opt) => opt.value)); // store only values
                  }}
                  placeholder="Select days..."
                />
              )}
            />
            {errors.availableDays && (
              <span className="text-red-500 text-sm">
                {errors.availableDays.message}
              </span>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="label">
              <span className="label-text font-medium">
                Preferred Time of Day
              </span>
            </label>
            <select
              {...register("availableTime", {
                required: "Please select a time",
              })}
              className="select select-bordered w-full"
            >
              <option value="">Select time</option>
              {timeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.availableTime && (
              <span className="text-red-500 text-sm">
                {errors.availableTime.message}
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
              {...register("otherInfo")}
              rows="4"
              className="textarea textarea-bordered w-full"
              placeholder="Tell us about your experience, certifications, or why you want to join..."
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="btn w-full text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 transition-all"
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
