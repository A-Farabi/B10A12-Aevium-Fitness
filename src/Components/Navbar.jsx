import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Layout/AuthLayout/Authprovider";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut(); // ✅ Now actually calls the function
  };

  // Nav items for reuse (DRY)
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Trainers", path: "/trainers" },
    { name: "All Classes", path: "/all-classes" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Forums", path: "/forums" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Menu Toggle */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-[#1AB0B0] font-medium" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {!user && (
              <li>
                <NavLink
                  to="/login"
                  className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded"
                >
                  <FaUser /> Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-xl">
          <img
            src="/src/assets/Aevium3.png" // ✅ Fixed path: public/assets/...
            alt="Aevium Logo"
            className="h-10 object-contain"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1AB0B0] font-semibold"
                    : "text-base-content hover:text-[#1AB0B0] transition-colors"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* User Section */}
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle flex items-center gap-2"
            >
              <img
                src={user.photoURL || "/default-user.png"}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-[#1AB0B0] object-cover"
              />
              {/* <span className="hidden md:flex text-sm font-medium text-base-content">
                {user.displayName?.displayName || "User"}
              </span> */}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 p-2 shadow"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 w-full">
                  <FaSignOutAlt /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
            style={{ backgroundColor: '#1AB0B0' }}
          >
            <FaUser /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;