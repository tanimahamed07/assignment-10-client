import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const {user, signOutUser} = use(AuthContext)

    // console.log(user.displayName)
    console.log(user?.displayName || {});
 const handleSignOut = () => {
    signOutUser()
        .then(() => {
            toast.success("SignOut Successful");
        })
        .catch((error) => {
            toast.error("SignOut Failed !");
            console.error(error);
        });
};
    return (

      <div className='mx-10'>
          <div className="navbar bg-base-100  flex justify-between items-center " >
            <div className=" ">
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
            <div className=" hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-secondery">
                    <li className=''><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/'>Explore Artworks</NavLink></li>
                    <li><NavLink to='/'>My Gallery</NavLink></li>
                    <li><NavLink to='/'>My Favorites</NavLink></li>
                </ul>
            </div>
             <div className="">
                {user ? (
                    <div className="relative group">
                        <img
                            src={user.photoURL || "https://via.placeholder.com/40"}
                            alt={user.displayName || "User"}
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                        {/* Hover card */}
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