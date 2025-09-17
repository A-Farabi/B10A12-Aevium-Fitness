import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import auth from './firebase.config';
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Handle Google login
  const googleLogin = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        toast.success("Successfully signed in with Google!"); // Return the user object for navigation handling
        return result.user;
      })
      .catch((err) => {
        const message = err.message;
        toast.error("Error during Google sign-in: " + err.message);
        throw new Error(message); // Allow caller to handle errors
      });
  };

  // update user profile
  const updateUserProfile = async (name, photoUrl) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });
      setUser({ ...auth.currentUser });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Log out user
  const logOut = () => {
    return signOut(auth);
  };

  // unsubscribe
  useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    // console.log("Auth state changed:", currentUser);
    setUser(currentUser);
    setLoading(false);

    if (currentUser?.email) {
      const userInfo = { email: currentUser.email, role: "user" };
      console.log(userInfo);

      axiosPublic.post('/jwt', userInfo)
        .then((res) => {
          // if (res.data.token) {
          //   localStorage.setItem("access-token", res.data.token);
          //   // console.log("Token stored in localStorage");
          // }
          if (res.data.insertedId) {
            toast.success("User created in db successfully")
          }
        })
        .catch((error) => {
          console.error("JWT API error:", error);
        });
    } else {
      // localStorage.removeItem("access-token");
      // console.log("User logged out - token removed");
    }
  });

  return () => unSubscribe();
}, [axiosPublic]);


  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    googleLogin,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
      {/* <ToastContainer /> */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

