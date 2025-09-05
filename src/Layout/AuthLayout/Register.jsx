import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Auth/AuthProvider"; // adjust path if needed

const Register = () => {
//   const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createUser(data.email, data.password)
      .then((result) => {
        console.log("User created:", result.user);
        // TODO: Save fullName, photoURL, and mobile to DB
      })
      .catch((error) => {
        console.error("Register error:", error.message);
      });
  };

  return (
    <div className=" flex items-center justify-center sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-2xs">
        <div className="p-4 sm:p-4">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign Up</h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?
              <span className="text-blue-600 hover:underline font-medium">
                <Link to="/login"> Sign in here</Link>
              </span>
            </p>
          </div>

          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Full name is required" })}
                    id="name"
                    className="border py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    id="email"
                    className="border py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Photo URL */}
                <div>
                  <label htmlFor="photoURL" className="block text-sm mb-1">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    {...register("photoURL", { required: "Photo URL is required" })}
                    id="photoURL"
                    className="border py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.photoURL && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.photoURL.message}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-sm mb-1">
                    Mobile Number (+88)
                  </label>
                  <input
                    type="tel"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: Number,
                        message: "Enter a valid Bangladeshi mobile number (+880...)",
                      },
                    })}
                    id="mobile"
                    className="border py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    id="password"
                    className="border py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    id="confirmPassword"
                    className="border py-2.5 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
