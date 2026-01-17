import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import logo from "../assets/ChatGPT Image Nov 10, 2025, 11_00_39 PM.png";
import Loader from "./Loader";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Helper function to close dropdown manually after clicking a link
  const closeDropdown = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("SignOut Successful");
        closeDropdown();
      })
      .catch(() => toast.error("SignOut Failed!"));
  };

  const navLinkStyles = ({ isActive }) =>
    `relative px-3 py-2 transition-all duration-300 font-medium hover:text-primary ${
      isActive ? "text-primary after:w-full" : "text-base-content/70 after:w-0"
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300`;

  if (loading) return <Loader />;

  return (
    // Sticky Wrapper
    <div className="sticky top-0 z-[100] w-full bg-base-100/80 backdrop-blur-md border-b border-base-200">
      <div className="navbar container mx-auto px-4">
        {/* START: Logo Area */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Mobile Dropdown Menu (Click based) */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100 rounded-2xl w-64 border border-base-200 space-y-2"
            >
              <li>
                <NavLink onClick={closeDropdown} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDropdown} to="/all-artworks">
                  Explore Artworks
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDropdown} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink onClick={closeDropdown} to="/contract">
                  Contract Us
                </NavLink>
              </li>
              {user && (
                <>
                  <div className="divider my-0"></div>
                  <li>
                    <NavLink onClick={closeDropdown} to="/dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform active:scale-95"
          >
            <div className="bg-primary/10 p-1.5 rounded-xl group-hover:bg-primary/20 transition-colors">
              <img
                className="w-8 md:w-10 group-hover:scale-110 transition-transform duration-500"
                src={logo}
                alt="Artify Logo"
              />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ARTIFY
            </span>
          </Link>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4">
            <li>
              <NavLink className={navLinkStyles} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyles} to="/all-artworks">
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyles} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkStyles} to="/contract">
                Contract Us
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink className={navLinkStyles} to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* END: User & Theme */}
        <div className="navbar-end flex items-center gap-3">
          {/* Theme Toggle */}
          <button className="btn btn-ghost btn-circle bg-base-200/50 hover:bg-base-200">
            <label className="swap swap-rotate cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => handleTheme(e.target.checked)}
              />
              <svg
                className="swap-on fill-primary w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Z" />
              </svg>
              <svg
                className="swap-off fill-primary w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
              </svg>
            </label>
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 md:w-11 rounded-full ring ring-primary/30 ring-offset-base-100 ring-offset-2 overflow-hidden shadow-lg">
                  <img
                    src={user.photoURL || "https://i.ibb.co/mJR7z8f/user.png"}
                    alt="User"
                  />
                </div>
              </div>
              {/* User Dropdown (Click based) */}
              <ul
                tabIndex={0}
                className="mt-2 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-56 border border-base-200 animate-in fade-in zoom-in duration-200"
              >
                <div className="px-4 py-3 mb-2 bg-primary/5 rounded-xl">
                  <p className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">
                    Signed in as
                  </p>
                  <p className="font-bold truncate text-base-content">
                    {user.displayName || "Artist"}
                  </p>
                </div>
                <li>
                  <Link onClick={closeDropdown} to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-error btn-sm btn-outline rounded-xl hover:text-white transition-all"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="hidden sm:flex btn btn-ghost btn-sm rounded-full"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-sm md:btn-md rounded-full px-5 shadow-lg shadow-primary/25 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
