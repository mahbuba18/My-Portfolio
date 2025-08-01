import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeSection, setActiveSection] = useState("home");

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
      const scrollY = window.scrollY;

      setScrolled(scrollY > 50);

      if (scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `transition duration-200 ${
      activeSection === section
        ? "text-green-400 font-bold border-b-2 border-green-400"
        : ""
    }`;

  const links = (
    <>
      <li>
        <Link
          to=""
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("home");
          }}
          className={linkClass("home")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onSetActive={() => setActiveSection("about")}
          className={linkClass("about")}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onSetActive={() => setActiveSection("skills")}
          className={linkClass("skills")}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onSetActive={() => setActiveSection("projects")}
          className={linkClass("projects")}
        >
          Projects
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`fixed navbar px-6 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-base-300 shadow-lg" : "bg-transparent"
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
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
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
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
            className="toggle toggle-md"
          />
          <span className="text-lg">{theme === "dark" ? "🌙" : "☀️"}</span>
        </label>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onSetActive={() => setActiveSection("contact")}
          className={`inline-block  px-4 py-2 rounded-lg border-2 border-emerald-500 bg-gradient-to-r from-sky-600 to-green-500 hover:from-orange-400 hover:to-blue-600 text-transparent bg-clip-text hover:scale-105 transition-all duration-300 ${linkClass(
            "contact"
          )}`}
        >
          Let's Talk
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
