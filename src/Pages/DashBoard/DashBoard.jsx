import useRole from "../../Hooks/useRole";
import Loader from "../../Components/Loader";
import AdminDashboard from "./AdminDashboard";
import TrainerDashboard from "./TrainerDashboard";
import UserDashboard from "./UserDashboard";
import { useContext, useState } from "react";
import { AuthContext } from "../../Layout/AuthLayout/Authprovider";
import {
  FaCalendarCheck,
  FaChevronLeft,
  FaChevronRight,
  FaClipboardList,
  FaComment,
  FaTachometerAlt,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  // TODO : on refresh ErrroPage showing up
  const [role, isLoading] = useRole();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // default: open
  const { user } = useContext(AuthContext);
  console.log(user);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="drawer lg:drawer-open">
      {/* Toggle Button (Mobile) */}
      <input
        id="dashboard-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="drawer-content flex flex-col">
        {/* Header (Mobile Only) */}
        <div className="w-full bg-base-100 border-b px-4 py-3 lg:hidden flex items-center justify-between">
          <h1 className="text-xl font-semibold text-base-content">Dashboard</h1>
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost btn-square"
          >
            <FaChevronLeft className="text-lg" />
          </label>
        </div>

        {/* Main Content */}
        <main className="p-6 lg:p-8 flex-1 bg-base-200 min-h-screen">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <aside
          className={`bg-[#1A293D] text-white w-64 lg:w-72 transition-all duration-300 transform ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          } h-full flex flex-col border-r`}
        >
          {/* User Profile Section */}
          <div className="p-6 border-b border-[#2A3E55]">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-[#1AB0B0] mb-3">
                <img
                  src={user?.photoURL || "/default-user.png"}
                  alt="User"
                  className="w-full h-full object-cover"
                />
                {/* Optional: Add a subtle glow or gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1AB0B0]/20 to-transparent rounded-full"></div>
              </div>

              

              {/* Role Badge */}
              <span
                className="badge text-xs px-2 py-1 capitalize mt-2 inline-block"
                style={{
                  backgroundColor:
                    role === "admin"
                      ? "#FA5A7D"
                      : role === "trainer"
                      ? "#8676FE"
                      : "#1AB0B0",
                  color: "white",
                }}
              >
                {role || "user"}
              </span>

              {/* Name */}
              <h3 className="font-bold text-white text-sm md:text-base my-2">
                {user?.displayName}
              </h3>

              <div class="badge badge-soft badge-primary">{user?.email}</div>
            </div>
          </div>

          {/* Footer / Collapse Button */}
          <div className="p-4 border-t border-[#2A3E55]">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="btn btn-ghost btn-sm w-full justify-between text-gray-300 hover:text-white lg:hidden"
            >
              <span>{isSidebarOpen ? "Collapse" : "Expand"}</span>
              {isSidebarOpen ? (
                <FaChevronLeft className="text-sm" />
              ) : (
                <FaChevronRight className="text-sm" />
              )}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

// <div className="py-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
//   <h1 className="text-3xl font-bold text-base-content mb-2">Dashboard</h1>
//   <p className="text-base-content/70 mb-8">
//     Role: <span className="font-semibold capitalize">{role || 'user'}</span>
//   </p>

//   {role === 'admin' ? (
//     <AdminDashboard />
//   ) : role === 'trainer' ? (
//     <TrainerDashboard />
//   ) : (
//     <UserDashboard />
//   )}
// </div>
export default DashBoard;
