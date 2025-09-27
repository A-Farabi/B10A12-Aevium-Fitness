import React from "react";
import useRole from "../../Hooks/useRole";
import TrainerDashboard from "./TrainerDashboard";
import UserDashboard from "./UserDashboard";
import { Outlet } from "react-router-dom";

const DashboardRoute = () => {
  const [role, isLoading] = useRole();

  const adminNavLinks = [
    { name: "Overview", path: ".", icon: "📊" },
    { name: "Newsletter", path: "newsletter", icon: "📬" },
    { name: "Trainer Management", path: "trainer-management", icon: "👥" },
    { name: "Booking Management", path: "bookings", icon: "📅" },
    { name: "Content Settings", path: "settings", icon: "⚙️" },
  ];

  return (
    <div>
      {/* Sidebar */}
      <aside className="bg-[#1A293D] text-white pt-4 pl-5 border-r border-gray-800">
        {role === "admin" ? (
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              🛠️ Admin Panel
            </h2>
            <nav className="space-y-2">
              {adminNavLinks.map((link) => (
                <a
                  key={link.path}
                  href={`/dashboard/admin/${link.path}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#2A3E55] transition text-sm"
                >
                  <span>{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        ) : role === "trainer" ? (
          <TrainerDashboard />
        ) : (
          <UserDashboard />
        )}
      </aside>

      {/* Main Content */}
      {/* <main className="flex-1 p-8 bg-base-200 min-h-screen">
        <Outlet />
      </main> */}
    </div>
  );
};

export default DashboardRoute;
