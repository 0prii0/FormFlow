import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Briefcase, Dog, Table } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const handleData = (e) => {
    const value = e.target.value;
    if (value) navigate(value);
  };

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

      <div className="ml-auto flex items-center gap-2">
        <Table size={22} className="text-white" />
        <select
          className="px-2 py-2 rounded-lg bg-gray-400 text-white font-semibold shadow-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 hover:shadow-lg"
          defaultValue=""
          onChange={handleData}
        >
          <option value="" disabled>
            Form Data
          </option>
          <option value="/students">Students Data</option>
          <option value="/employees">Employees Data</option>
          <option value="/dog-adoptions">Dogs Adoption Data</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
