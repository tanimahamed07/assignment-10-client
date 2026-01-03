import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import {
  HiHome,
  HiPlusCircle,
  HiPhoto,
  HiHeart,
  HiUser,
} from "react-icons/hi2";

const Dashboard = () => {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const theme = localStorage.getItem("theme") || "light";

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all
     ${
       isActive
         ? "bg-primary text-white shadow-lg"
         : "text-neutral/70 hover:bg-base-200"
     }`;

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="min-h-screen  flex">
      {/* Sidebar */}
      <aside className="w-72 hidden lg:flex flex-col border-r  relative">
        {/* Glow */}
        <div className="absolute top-0 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

        {/* Sidebar Header */}
        <div className="px-6 py-6 border-b border-base-200">
          <h2 className="text-2xl font-black uppercase tracking-tighter">
            Dashboard
          </h2>
          <p className="text-xs text-neutral/60 tracking-widest uppercase">
            Artist Panel
          </p>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 relative z-10">
          <NavLink to="/dashboard" end className={linkStyle}>
            <HiHome className="text-xl" />
            Overview
          </NavLink>

          <NavLink to="/dashboard/add-artwork" className={linkStyle}>
            <HiPlusCircle className="text-xl" />
            Add Artwork
          </NavLink>

          <NavLink to="/dashboard/my-gallery" className={linkStyle}>
            <HiPhoto className="text-xl" />
            My Gallery
          </NavLink>

          <NavLink to="/dashboard/favorites" className={linkStyle}>
            <HiHeart className="text-xl" />
            Favorites
          </NavLink>

          <NavLink to="/dashboard/profile" className={linkStyle}>
            <HiUser className="text-xl" />
            Profile
          </NavLink>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-base-200 bg-base-100 sticky top-0 z-20">
          <h1 className="text-xl font-black tracking-tight">
            Dashboard Overview
          </h1>

          <div className="text-sm text-neutral/60">Welcome back 👋</div>
        </header>

        {/* Page Content */}
        <main className="p-6 lg:p-10">
          {/* Nested Routes */}
          <div className="bg-base-100 border border-base-200 rounded-2xl p-6 shadow-sm">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
