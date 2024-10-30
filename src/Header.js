// import React, { useState } from "react";

// const Header = () => {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsNavbarOpen((prev) => !prev);
//   };

//   const closeNavbar = () => {
//     setIsNavbarOpen(false);
//   };

//   return (
//     <header>
//       <div className="nav-6 p-4 flex justify-between items-center border">
//         <div className="container flex justify-between items-center mx-auto">
//           <h1 className="text-xl font-bold">Carrot</h1>
//           {!isNavbarOpen 
//            && (
//             <button
//               aria-label="Toggle Navigation"
//               aria-expanded={isNavbarOpen}
//               className="lg:hidden inline-flex items-center justify-center text-black border h-10 w-10 rounded-md focus:outline-none"
//               onClick={toggleNavbar}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="size-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//             </button>
//            )
//           }
//         </div>
//         <nav
//           className={`w-full mt-2 lg:mt-0 transition-all duration-300 ${
//             isNavbarOpen ? "block" : "hidden"
//           } lg:flex lg:justify-end lg:items-center`}
//         >
//           <span className="lg:hidden"
//             style={{
//               color: "red",
//               filter: "drop-shadow(2px 1px 2px rgba(12,12,1,0.6))",
//               float: "right",
//               fontSize: "larger",
//               cursor: "pointer",
//             }}
//             onClick={closeNavbar}
//           >
//             X
//           </span>
//           <ul className="nav6 md:p-0 flex flex-col space-y-4 items-center lg:flex-row lg:space-y-0 lg:space-x-4 lg:mb-0">
//             {["Product", "Our Why", "About Us", "Contact"].map((item) => (
//               <li key={item}>
//                 <a
//                   href="/"
//                   className="flex px-4 py-2 rounded-md font-medium text-black hover:bg-black hover:text-white"
//                   onClick={closeNavbar} // Close navbar on link click
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
