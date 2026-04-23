import React from 'react';
import Navlinks from './Navlinks';

const Navbar = () => {
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-lg border-b border-base-200 shadow-sm px-4 sm:px-8 transition-all">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-md rounded-box z-50 mt-4 w-52 p-3 shadow-xl border border-base-200 gap-2">
                        <Navlinks />
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-extrabold tracking-tight bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent hover:bg-transparent">
                    faceBook
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 font-medium text-base-content/80">
                    <Navlinks />
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary rounded-full px-6 font-semibold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;