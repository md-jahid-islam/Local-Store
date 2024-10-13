// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   // Toggle theme function
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   };

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//     localStorage.setItem('theme', theme); // Save theme to localStorage
//   }, [theme]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className="container mx-auto p-5 flex justify-between items-center">
//         <div className="menu-logo">
//           <Link className="text-black dark:text-white font-bold text-2xl" to="#">
//             Jahid Local Store
//           </Link>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="lg:hidden block">
//           <button onClick={toggleMenu}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-8 h-8 text-black dark:text-white"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center gap-10">
//           <ul className="flex gap-10">
//             <li className="text-xl font-bold text-black dark:text-white">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="text-xl font-bold text-black dark:text-white">
//               <Link to="/Data">Data</Link>
//             </li>
//           </ul>
//           <button className="text-xl font-bold text-fuchsia-50 bg-red-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg">
//             Get Started
//           </button>

//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="text-xl font-bold text-black dark:text-white bg-gray-300 dark:bg-gray-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg ml-4"
//           >
//             {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="fixed top-0 right-0 w-3/4 h-full bg-gray-800 bg-opacity-90 z-50 transition-transform transform lg:hidden">
//             <div className="flex justify-end p-5">
//               <button onClick={toggleMenu}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-8 h-8 text-white"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <ul className="flex flex-col items-center gap-8 mt-10">
//               <li className="text-2xl font-bold text-white">
//                 <Link to="/" onClick={toggleMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li className="text-2xl font-bold text-white">
//                 <Link to="/Data" onClick={toggleMenu}>
//                   Data
//                 </Link>
//               </li>
//               <button
//                 className="text-xl font-bold text-fuchsia-50 bg-red-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg"
//                 onClick={toggleMenu}
//               >
//                 Get Started
//               </button>

//               {/* Theme Toggle Button for Mobile */}
//               <button
//                 onClick={toggleTheme}
//                 className="text-xl font-bold text-black dark:text-white bg-gray-300 dark:bg-gray-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg"
//               >
//                 {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//               </button>
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Toggle theme function
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); // Save theme to localStorage
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar Wrapper with Theme Background */}
      <div className="container mx-auto p-5 flex justify-between items-center bg-white dark:bg-gray-900">
        <div className="menu-logo">
          <Link className="text-black dark:text-white font-bold text-2xl" to="#">
            Jahid Local Store
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden block">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-10">
            <li className="text-xl font-bold text-black dark:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xl font-bold text-black dark:text-white">
              <Link to="/Data">Data</Link>
            </li>
          </ul>
          <button className="text-xl font-bold text-fuchsia-50 bg-red-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg">
            Get Started
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-xl font-bold text-black dark:text-white bg-gray-300 dark:bg-gray-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg ml-4"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-full bg-gray-800 bg-opacity-90 z-50 transition-transform transform lg:hidden">
            <div className="flex justify-end p-5">
              <button onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center gap-8 mt-10">
              <li className="text-2xl font-bold text-white">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="text-2xl font-bold text-white">
                <Link to="/Data" onClick={toggleMenu}>
                  Data
                </Link>
              </li>
              <button
                className="text-xl font-bold text-fuchsia-50 bg-red-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg"
                onClick={toggleMenu}
              >
                Get Started
              </button>

              {/* Theme Toggle Button for Mobile */}
              <button
                onClick={toggleTheme}
                className="text-xl font-bold text-black dark:text-white bg-gray-300 dark:bg-gray-700 w-[160px] h-[50px] hover:scale-105 transition-transform duration-300 rounded-lg"
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </ul>
          </div>
        )}
      </div>

      {/* Content Section with Dynamic Background */}
      <div className=" bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-all duration-300">
        {/* Add your main content here */}
        <h1 className="text-center pt-10 text-3xl font-bold">Welcome to Jahid Local Store</h1>
        <p className="text-center mt-5 font-bold">Shop the best products online with us!</p>
        {/* Example product grid or other sections */}
      </div>
    </>
  );
};

export default Navbar;
