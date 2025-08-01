import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      if (scrollY < 200) setActiveSection("home");
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

  const handleLinkClick = (section, scrollAction) => {
    setDropdownOpen(false); // Close dropdown when link is clicked
    setActiveSection(section);
    document.title = `${section.charAt(0).toUpperCase() + section.slice(1)} | Mahabuba Islam`;
    if (scrollAction) scrollAction();
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const links = (
    <>
      <li>
        <Link
          to=""
          onClick={() => handleLinkClick("home", () => window.scrollTo({ top: 0, behavior: "smooth" }))}
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
          onSetActive={() => {
            setActiveSection("about");
            document.title = "About | Mahabuba Islam";
          }}
          onClick={() => handleLinkClick("about")}
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
          onSetActive={() => {
            setActiveSection("skills");
            document.title = "Skills | Mahabuba Islam";
          }}
          onClick={() => handleLinkClick("skills")}
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
          onSetActive={() => {
            setActiveSection("projects");
            document.title = "Projects | Mahabuba Islam";
          }}
          onClick={() => handleLinkClick("projects")}
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
        <div className="relative" ref={dropdownRef}>
          <button
            className="btn border-0 lg:hidden"
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
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
          </button>
          
          <ul
            className={`absolute top-full left-0 menu menu-sm text-white bg-black rounded-box z-50 mt-3 w-52 p-2 shadow-lg transition-all duration-200 ${
              dropdownOpen 
                ? "opacity-100 visible transform translate-y-0" 
                : "opacity-0 invisible transform -translate-y-2"
            }`}
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
        {/* 🌙/☀️ Toggle */}
        <label
          className="cursor-pointer text-2xl transition-all duration-300 ease-in-out hover:scale-110"
          onClick={handleToggle}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </label>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          spy={true}
          onSetActive={() => {
            setActiveSection("contact");
            document.title = "Contact | Mahabuba Islam";
          }}
          onClick={() => handleLinkClick("contact")}
          className={`inline-block lg:px-4 px-2 lg:py-2 py-1 rounded-lg border-2 border-emerald-500 bg-gradient-to-r from-sky-600 to-green-500 hover:from-orange-400 hover:to-blue-600 text-transparent bg-clip-text hover:scale-105 transition-all duration-300 cursor-pointer ${linkClass(
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