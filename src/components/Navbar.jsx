import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (

        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-700">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Explore Artworks</NavLink></li>
                        <li><NavLink to='/'>My Gallery</NavLink></li>
                        <li><NavLink to='/'>My Favorites</NavLink></li>
                    </ul>
                </div>
                <a className="text-xl font-bold  text-primary">ARTIFY</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-secondery">
                    <li className=''><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Explore Artworks</NavLink></li>
                    <li><NavLink to='/'>My Gallery</NavLink></li>
                    <li><NavLink to='/'>My Favorites</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/register' className='btn btn-outline bg- border-[#b89e4f] text-primary hover:bg-secondary hover:text-white'>Register</Link>
            </div>
        </div>

    );
};

export default Navbar;