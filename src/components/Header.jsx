import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-slate-500">Houses</h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="search..."
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to={"/sign-in"}>Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
