import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const name = localStorage.getItem("name");
    setIsLoggedIn(!!name);
  }, [location]);

  const logOuts = () => {
   localStorage.clear();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-800">MyLogo</div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {menuOpen ? (
              <i className="fas fa-times text-2xl"></i> // Close icon
            ) : (
              <i className="fas fa-bars text-2xl"></i> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md md:static md:block md:w-auto md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Service"
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Wheather"
                className="block font-bold py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                [Get Wheather]
              </Link>
            </li>

            {/* Auth buttons for mobile */}
            {!isLoggedIn && (
              <li className="mt-2 md:mt-0">
                <Link
                  to="/Login"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </Link>
              </li>
            )}
            {isLoggedIn && location.pathname !== "/login" && (
              <li className="mt-2 md:mt-0">
                <button
                  onClick={() => {
                    logOuts();
                    setMenuOpen(false);
                  }}
                  className="block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
