// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const NavIcon = ({ name }) => {
//   const icons = {
//     Home: (
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//       />
//     ),
//     About: (
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//       />
//     ),
//     Business: (
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//       />
//     ),
//     Contact: (
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//       />
//     ),
//   };
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-5 h-5 mr-1"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       {icons[name]}
//     </svg>
//   );
// };

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     {
//       name: "Business",
//       path: "#",
//       dropdown: [
//         { name: "MSACA", path: "/business/msaca" },
//         { name: "Credorbit", path: "/business/credorbit" },
//       ],
//     },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path) => {
//     if (path === "/" && location.pathname !== "/") return false;
//     if (path === "#") return location.pathname.startsWith("/business");
//     return location.pathname.startsWith(path);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
//       <div className="container mx-auto flex items-center justify-between p-4 text-white">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold font-title">
//           MS
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             )}
//           </svg>
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isMenuOpen
//               ? "absolute top-full left-0 right-0 bg-black bg-opacity-90 py-4"
//               : "hidden"
//           } md:block md:static md:bg-transparent md:py-0`}
//         >
//           <ul
//             className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ${
//               isMenuOpen ? "px-4" : ""
//             }`}
//           >
//             {navItems.map((item) => (
//               <li key={item.path} className="relative">
//                 {item.dropdown ? (
//                   <div className="relative">
//                     <button
//                       className={`font-subtitle transition-colors duration-300 flex items-center ${
//                         isActive(item.path)
//                           ? "text-primary"
//                           : "text-white hover:text-primary"
//                       }`}
//                       onClick={() =>
//                         setIsBusinessDropdownOpen(!isBusinessDropdownOpen)
//                       }
//                     >
//                       <NavIcon name={item.name} />
//                       {item.name}
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`w-4 h-4 ml-1 transform transition-transform ${
//                           isBusinessDropdownOpen ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                     {/* Dropdown Menu */}
//                     {isBusinessDropdownOpen && (
//                       <div className="absolute left-0 mt-2 py-2 w-48 bg-black bg-opacity-90 rounded-md shadow-xl">
//                         {item.dropdown.map((dropdownItem) => (
//                           <Link
//                             key={dropdownItem.path}
//                             to={dropdownItem.path}
//                             className="block px-4 py-2 text-sm text-white hover:text-primary transition-colors duration-300"
//                             onClick={() => {
//                               setIsBusinessDropdownOpen(false);
//                               setIsMenuOpen(false);
//                             }}
//                           >
//                             {dropdownItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     className={`font-subtitle transition-colors duration-300 flex items-center ${
//                       isActive(item.path)
//                         ? "text-primary"
//                         : "text-white hover:text-primary"
//                     }`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <NavIcon name={item.name} />
//                     {item.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavIcon = ({ name }) => {
  const icons = {
    Home: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    ),
    About: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
    Business: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    Contact: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {icons[name]}
    </svg>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Business",
      path: "#",
      dropdown: [
        { name: "MSACA", path: "/business/msaca" },
        { name: "CredOrbit", path: "/business/credorbit" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    if (path === "#") return location.pathname.startsWith("/business");
    return location.pathname.startsWith(path);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setIsBusinessDropdownOpen(!isBusinessDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBusinessDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-title">
          MS
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-black bg-opacity-95 py-4 border-t border-gray-800"
              : "hidden"
          } md:block md:static md:bg-transparent md:py-0 md:border-none`}
        >
          <ul
            className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ${
              isMenuOpen ? "px-4" : ""
            }`}
          >
            {navItems.map((item) => (
              <li key={item.path} className="relative w-full md:w-auto">
                {item.dropdown ? (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className={`font-subtitle transition-colors duration-300 flex items-center justify-center md:justify-start w-full ${
                        isActive(item.path)
                          ? "text-primary"
                          : "text-white hover:text-primary"
                      }`}
                      onClick={handleDropdownClick}
                    >
                      <NavIcon name={item.name} />
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ml-1 transform transition-transform ${
                          isBusinessDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    {isBusinessDropdownOpen && (
                      <div
                        className={`
                          ${
                            isMenuOpen
                              ? "relative mt-2 w-full"
                              : "absolute left-1/2 transform -translate-x-1/2 mt-2 min-w-[12rem]"
                          }
                          py-2 bg-black bg-opacity-95 rounded-md shadow-xl
                          z-[60]
                        `}
                        style={{
                          filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                        }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-white hover:text-primary hover:bg-gray-800/50 transition-colors duration-300"
                            onClick={() => {
                              setIsBusinessDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-subtitle transition-colors duration-300 flex items-center justify-center md:justify-start ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <NavIcon name={item.name} />
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
