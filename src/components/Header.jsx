import React from "react";

const Header = () => {
  const navItems = ["Home", "About", "Service", "Portfolio", "Blog", "Contact"];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <div className="text-2xl font-bold font-title">T</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-300 font-subtitle"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search Icon */}
        <div className="hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-primary cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          {/* Implement mobile menu toggle here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {/* Mobile Menu (conditionally rendered) */}
      {/* <div className="md:hidden bg-black bg-opacity-90">
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-300 font-subtitle text-lg"
            >
              {item}
            </a>
          ))}
        </nav>
      </div> */}
    </div>
  );
};

export default Header;
