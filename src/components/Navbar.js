import React from "react";
import SearchBar from "./SearchBar";
import PropTypes from 'prop-types';
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Navbar({keyword, keywordOnChange}) {
  return (
    <>
      <header className="w-screen h-[75px] bg-secondary">
        <nav className="flex px-10 items-center w-full h-full justify-between">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-4xl font-bold text-green-htb">MyNotes</h1>
            </Link>
            <h2 className="text-white text-xl pl-5 hover:text-white-hover transition-all cursor-pointer">
              <NavLink to="/">
                {({ isActive }) => {
                  return isActive ? "Home" : "Arsip"
                }}
              </NavLink>
            </h2>
          </div>
          <SearchBar keyword={keyword} keywordOnChange={keywordOnChange} />
        </nav>
      </header>
      <Outlet />
    </>
  );
}

Navbar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordOnChange: PropTypes.func.isRequired,
};