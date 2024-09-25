// rrd imports
import { Link } from "react-router-dom";

// react icons
import { FcStackOfPhotos } from "react-icons/fc";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

// mode from local storage
const modeFromLoalStorage = () => {
  return localStorage.getItem("theme-mode") || "winter";
};

function Navbar() {
  const [theme, setTheme] = useState(modeFromLoalStorage());

  const changeTheme = () => {
    const newTheme = theme === "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme-mode", theme);
  }, [theme]);

  return (
    <div className="bg-base-200 mb-5">
      <div className="navbar align-elements flex justify-between items-center px-5">
        <div className="navbar-start">
          <Link to="/" className="hidden md:flex">
            <FcStackOfPhotos className="w-10 h-10" />
          </Link>

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button">
              <FcStackOfPhotos className="w-10 h-10" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal bg-base-200 rounded-box">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/likedImages" className="mr-5">
            <span className="indicator">
              <span className="indicator-item badge badge-sm badge-secondary">
                99+
              </span>
              <FaHeart className="w-7 h-7" />
            </span>
          </Link>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={changeTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <FaSun className="swap-off h-7 w-7 fill-current" />

            {/* moon icon */}

            <FaMoon className="swap-on h-7 w-7 fill-current" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
