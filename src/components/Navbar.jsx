import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import logo from '../assets/ChatGPT Image Nov 10, 2025, 11_00_39 PM.png'
import { Fade } from 'react-awesome-reveal';
import Loader from './Loader';


const Navbar = () => {
    const { user, signOutUser, loading } = use(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("SignOut Successful");
            })
            .catch((error) => {
                toast.error("SignOut Failed !");
            });
    };
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className= 'px-4 md:px-10'>
            <div className=" navbar bg-base-100 " >
                <div className=" navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/all-artworks'>Explore Artworks</NavLink></li>
                            <li><NavLink to='/add-artworks'>Add Artworks</NavLink></li>
                            <li><NavLink to='/my-gallary'>My Gallery</NavLink></li>
                            <li><NavLink to='/favorites'>My Favorites</NavLink></li>
                        </ul>
                    </div>
                    <img className='max-w-[60px]' src={logo} alt="" />
                    <a className="text-xl font-bold  text-primary"> ARTIFY</a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <Fade cascade damping={0.2} triggerOnce={true}>
                        <ul className="menu menu-horizontal px-1 text-secondery gap-3">
                            <li className=''><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/all-artworks'>Explore Artworks</NavLink></li>
                            <li><NavLink to='/add-artworks'>Add Artworks</NavLink></li>
                            <li><NavLink to='/my-gallary'>My Gallery</NavLink></li>
                            <li><NavLink to='/favorites'>My Favorites</NavLink></li>
                        </ul>
                    </Fade>
                </div>
                <div className="navbar-end flex items-center gap-5 md:gap-10">
                    <input onChange={(e) => handleTheme(e.target.checked)} type="checkbox" value="synthwave" className="toggle theme-controller" />
                    {user ? (
                        <div className="relative group">
                            <img
                                src={user.photoURL || "https://via.placeholder.com/40"}
                                alt={user.displayName || "User"}
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40">
                                <p className="font-semibold text-gray-700 mb-2">{user.displayName || "User"}</p>
                                <button
                                    onClick={handleSignOut}
                                    className="btn btn-sm btn-outline w-full text-primary hover:bg-secondary hover:text-white"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link to='/register' className='btn btn-outline border-[#b89e4f] text-primary hover:bg-secondary hover:text-white'>
                            Register
                        </Link>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Navbar;