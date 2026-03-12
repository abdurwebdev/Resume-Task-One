import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md flex items-center justify-center gap-8 py-3 sticky top-0 z-50">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `font-semibold text-lg transition-colors ${isActive ? 'text-red-500' : 'text-gray-700 hover:text-red-400'}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) =>
          `font-semibold text-lg transition-colors ${isActive ? 'text-red-500' : 'text-gray-700 hover:text-red-400'}`
        }
      >
        Create
      </NavLink>
      <NavLink
        to="/fav"
        className={({ isActive }) =>
          `font-semibold text-lg transition-colors ${isActive ? 'text-red-500' : 'text-gray-700 hover:text-red-400'}`
        }
      >
        Favourites
      </NavLink>
    </div>
  );
};

export default Navbar;