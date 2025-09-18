import React, { useContext } from 'react';
import { AuthContext } from '../../Layout/AuthLayout/Authprovider';
import { FaCalendarCheck, FaClipboardList, FaComment, FaTachometerAlt } from 'react-icons/fa';


const UserDashboard = () => {
        // const {user} = useContext(AuthContext)
    
  // const navLinks = [
  //   { name: "Profile", path: "profile", icon: FaTachometerAlt, visible: true },
  //   { name: "My Bookings", path: "bookings", icon: FaCalendarCheck, visible: true },
  //   { name: "My Reviews", path: "reviews", icon: FaComment, visible: true },
  //   { name: "Trainer Application", path: "trainer-apply-status", icon: FaClipboardList, visible: ['user'].includes(role) },
  // ];

    return (
        <div>
            <h1>User</h1>

            {/* Navigation */}
                      {/* <nav className="p-4 space-y-2 flex-1">
                        {navLinks.filter(link => link.visible).map((link, i) => (
                          <Link
                            key={i}
                            to={link.path}
                            className="flex items-center gap-3 px-4 py-3 text-base-content/80 hover:bg-[#1AB0B0]/10 hover:text-[#1AB0B0] rounded-lg transition-all group"
                          >
                            <link.icon className="text-lg" />
                            <span>{link.name}</span>
                          </Link>
                        ))}
                      </nav> */}
        </div>
    );
};

export default UserDashboard;