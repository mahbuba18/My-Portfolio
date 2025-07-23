import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollSpy } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    setTimeout(() => {
      scrollSpy.update();
    }, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="home">About</Link>
      </li>
      <li>
        <Link to="home">Skills</Link>
      </li>
      <li>
        <Link to="home">Projects</Link>
      </li>
      <li>
        <Link to="home">Contact</Link>
      </li>
    </>
  );
  // <li ><Link to="home" smooth={true} duration={500} spy={true} hashSpy={true} isDynamic={true} activeClass="active-link">Home</Link></li>

  return (
    <div
      className={`fixed navbar px-6 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-transparent shadow-lg " : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a
          style={{ fontFamily: '"Berkshire Swash", serif', fontWeight: 400 }}
          className="lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-green-500"

        >
          Mahaboba Islam
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {/* 🌗 Theme Toggle */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
            className="toggle toggle-md"
          />
          <span className="text-lg">
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
        </label>

        <a className=" inline-block p-2 rounded-lg border-2 border-emerald-500 bg-gradient-to-r from-sky-600 to-green-500 hover:from-orange-400 hover:to-blue-600 text-transparent bg-clip-text hover:scale-105 transition-all duration-300">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default Navbar;
