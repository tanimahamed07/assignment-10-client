import React, { useEffect, useContext } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import {
  HiHome,
  HiPlusCircle,
  HiPhoto,
  HiHeart,
  HiBars3BottomLeft,
  HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";
import toast from "react-hot-toast";

const Dashboard = () => {
  
  const { user, signOutUser } = useContext(AuthContext); // Get logout from AuthContext
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme") || "light";

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
  }, [theme]);

  const linkStyle = ({ isActive }) =>
    `relative flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 group
     ${
       isActive
         ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
         : "text-base-content/70 hover:bg-primary/5 hover:text-primary"
     }`;

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("SignOut Successful");
        navigate("/");
      })
      .catch(() => toast.error("SignOut Failed!"));
  };


  return (
    <div className="min-h-screen bg-base-100 flex overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="w-80 hidden lg:flex flex-col border-r border-base-200 bg-base-100 relative z-30">
        {/* Background Glows */}
        <div className="absolute top-0 -left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-10 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl opacity-50 pointer-events-none"></div>

        {/* Sidebar Header */}
        <div className="px-8 py-8">
          <Link to="/" className="flex items-center gap-2 group transition-transform active:scale-95">
            <div className="bg-primary/10 p-1.5 rounded-xl group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-black text-xl italic">A</span>
            </div>
            <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ARTIFY <span className="text-[10px] text-neutral/40 block tracking-widest -mt-1 uppercase">Panel</span>
            </span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 space-y-2 mt-4 relative z-10">
          <NavLink to="/dashboard" end className={linkStyle}>
            <HiHome className="text-xl" />
            <span className="tracking-tight uppercase text-sm">Overview</span>
          </NavLink>

          <NavLink to="/dashboard/add-artworks" className={linkStyle}>
            <HiPlusCircle className="text-xl" />
            <span className="tracking-tight uppercase text-sm">Add Artwork</span>
          </NavLink>

          <NavLink to="/dashboard/my-gallery" className={linkStyle}>
            <HiPhoto className="text-xl" />
            <span className="tracking-tight uppercase text-sm">My Gallery</span>
          </NavLink>

          <NavLink to="/dashboard/favorites" className={linkStyle}>
            <HiHeart className="text-xl" />
            <span className="tracking-tight uppercase text-sm">Favorites</span>
          </NavLink>

          <div className="divider opacity-50 px-4"></div>

          {/* Logout Button */}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-red-600 hover:bg-red-50 transition-all duration-300 w-full"
          >
            <HiOutlineArrowLeftOnRectangle className="text-xl" />
            <span className="tracking-tight uppercase text-sm">Logout</span>
          </button>
        </nav>

        {/* Sidebar Bottom User Info */}
        <div className="p-6 m-4 bg-primary/5 rounded-2xl border border-primary/10">
          <div className="flex items-center gap-3">
            <img 
                className="w-10 h-10 rounded-full border-2 border-primary/20" 
                src={user?.photoURL || "https://i.ibb.co/mJR7z8f/user.png"} 
                alt="user" 
            />
            <div className="truncate">
                <p className="text-sm font-black truncate">{user?.displayName || "Artist"}</p>
                <p className="text-[10px] uppercase text-primary font-bold tracking-widest">Signed In</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-base-200 bg-base-100/70 backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden btn btn-ghost btn-circle">
                <HiBars3BottomLeft size={24} />
            </button>
            <div className="space-y-0.5">
                <h1 className="text-xl font-black uppercase tracking-tighter leading-none">
                   Welcome Back, <span className="text-primary">{user?.displayName?.split(' ')[0] || "Artist"}</span>
                </h1>
                <p className="text-[10px] text-neutral/50 font-bold uppercase tracking-[0.2em] border-l-2 border-secondary pl-2">
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <Link to="/" className="btn btn-ghost btn-sm rounded-full hidden md:flex">Back to Home</Link>
             <div className="w-10 h-10 rounded-full ring-2 ring-primary/20 p-0.5">
                <img className="w-full h-full rounded-full object-cover" src={user?.photoURL || "https://i.ibb.co/mJR7z8f/user.png"} alt="" />
             </div>
          </div>
        </header>

        {/* Page Content Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 bg-base-200/30">
          <div className="relative max-w-7xl mx-auto">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
             <div className="relative z-10 bg-base-100 border border-base-200 rounded-[2.5rem] p-8 lg:p-12 shadow-sm min-h-[calc(100vh-200px)]">
                <div className="absolute -inset-1.5 border border-primary/10 rounded-[2.6rem] -z-10 pointer-events-none"></div>
                <Outlet />
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
