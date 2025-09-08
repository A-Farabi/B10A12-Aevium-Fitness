import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Mainlayout from "./Layout/MainLayout/Mainlayout";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Layout/AuthLayout/Login";
import Register from "./Layout/AuthLayout/Register";
import AuthProvider from "./Layout/AuthLayout/Authprovider";
import AllTrainers from "./Pages/AllTrainers";
import TrainerDetails from "./Components/TrainerDetails";
import BookingPage from "./Components/BookingPage";
import BecomeTrainer from "./Components/BecomeTrainer";
import PaymentPage from "./Pages/PaymentPage";
import AllClassesPage from "./Pages/AllClassesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/trainers",
        element: <AllTrainers />,
      },
      {
        path: "/trainers/:_id",
        element: <TrainerDetails />,
      },
      {
        path: "/booking/:id",
        element: <BookingPage />,
      },
      {
        path: "/become-trainer",
        element: <BecomeTrainer />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/all-classes",
        element: <AllClassesPage />,
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
