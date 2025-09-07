import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Dog } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-400 p-4 flex justify-center space-x-6 shadow-md">
      <Link
        to="/student"
        className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-bold hover:bg-black"
      >
        <GraduationCap size={20} />
        <span>Student Form</span>
      </Link>

      <Link
        to="/employee"
        className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-bold hover:bg-black"
      >
        <Briefcase size={20} />
        <span>Employee Form</span>
      </Link>

      <Link
        to="/dog-adoption"
        className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-bold hover:bg-black"
      >
        <Dog size={20} />
        <span>Dog Adoption Form</span>
      </Link>
    </nav>
  );
};

export default Navbar;
