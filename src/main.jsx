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
import Loader from "./Components/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import DashBoard from "./Pages/DashBoard/DashBoard";
import ProfilePage from "./Layout/AuthLayout/ProfilePage";
import UserDashboard from "./Pages/DashBoard/UserDashboard";
import AdminDashboard from "./Pages/DashBoard/AdminDashboard";
import TrainerDashboard from "./Pages/DashBoard/TrainerDashboard";
import NewsletterSubscribers from "./Pages/DashBoard/AdminRoutes/NewsletterSubscribers";
import TrainerManagement from "./Pages/DashBoard/AdminRoutes/TrainerManagement";

const queryClient = new QueryClient();

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
      {
        path: "/l",
        element: <Loader />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
          {
            path: "/dashboard/user",
            element: <UserDashboard></UserDashboard>,
          },
          {
            path: "/dashboard/admin",
            element: <AdminDashboard></AdminDashboard>,
            children: [
              { path: "/dashboard/admin/newsletter",
                element: <NewsletterSubscribers /> 
              },
              { path: "/dashboard/admin/trainer-management",
                element: <TrainerManagement /> 
              },
              
            ],
          },
          {
            path: "/dashboard/trainer",
            element: <TrainerDashboard></TrainerDashboard>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
