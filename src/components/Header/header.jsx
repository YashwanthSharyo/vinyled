// import React, { useState } from "react";
// import "./header.css";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMenuItemClick = (path) => {
//     setIsMenuOpen(false);
//     navigate(path, { replace: true });
//     window.scrollTo(0, 0);
//   };

//   return (
//     <header className="header">
//       <Link to="/" className="logo" onClick={() => handleMenuItemClick("/")}>
//         <img src="Images/logo1.svg" alt="Vinyled Logo" className="logo-img" />
//       </Link>

//       <input
//         type="checkbox"
//         className="menu-btn"
//         id="menu-btn"
//         checked={isMenuOpen}
//         onChange={toggleMenu}
//       />
//       <label htmlFor="menu-btn" className="menu-icon">
//         <span className="navicon"></span>
//       </label>

//       <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/" onClick={() => handleMenuItemClick("/")}>
//             HOME
//           </Link>
//         </li>

//         <li className="dropdown">
//           <a>SERVICES <i className="fa fa-caret-down"></i></a>
//           <ul className="dropdown-menu">
//             <li><Link to="/enhance" onClick={() => handleMenuItemClick("/enhance")}>ENHANCE</Link></li>
//             <li><Link to="/personolization" onClick={() => handleMenuItemClick("/personolization")}>PERSONALIZE</Link></li>
//             <li><Link to="/protect" onClick={() => handleMenuItemClick("/protect")}>PROTECT</Link></li>
//             <li><Link to="/maintain" onClick={() => handleMenuItemClick("/maintain")}>MAINTAIN</Link></li>
            
//             {/* <li><Link to="/custom-project" onClick={() => handleMenuItemClick("/custom-project")}>CUSTOM PROJECT</Link></li> */}
//             <li><Link to="/branding" onClick={() => handleMenuItemClick("/branding")}>FLEET BRANDING / COMMERCIAL PROJECT</Link></li>
//           </ul>
//         </li>

//         <li className="dropdown">
//           <a>ABOUT US <i className="fa fa-caret-down"></i></a>
//           <ul className="dropdown-menu">
//             {/* <li><Link to="/about" onClick={() => handleMenuItemClick("/about")}>ABOUT US</Link></li>
//             <li><Link to="/our-process" onClick={() => handleMenuItemClick("/our-process")}>OUR PROCESS</Link></li>
//             <li><Link to="/team" onClick={() => handleMenuItemClick("/team")}>TEAM</Link></li> */}
//              <li><Link to="/our-process" onClick={() => handleMenuItemClick("/our-process")}>BLOGS</Link></li>

//           </ul>
//         </li>

//         <li>
//           <Link to="/our-clients" onClick={() => handleMenuItemClick("/our-clients")}>
//             OUR CLIENTS
//           </Link>
//         </li>

//         <li>
//           <Link to="/contact-us" onClick={() => handleMenuItemClick("/contact-us")}>
//             CONTACT US
//           </Link>
//         </li>
//       </ul>

//       <a
//         href="#flag"
//         className="flag-icon"
//         onClick={(e) => {
//           e.preventDefault();
//           handleMenuItemClick("/");
//         }}
//       >
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
//           alt="Indian Flag"
//           className="flag-img"
//         />
//       </a>
//     </header>
//   );
// };

// export default Header;


import React, { useState,useEffect } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null); // Mobile dropdown state
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMenuItemClick = (path) => {
//     setIsMenuOpen(false);
//     if (window.innerWidth <= 1280) {
//       setActiveDropdown(null); // Close dropdown in mobile
//     }
//     navigate(path, { replace: true });
//     window.scrollTo(0, 0);
//   };

//   return (
//     <header className="header">
//       <Link to="/" className="logo" onClick={() => handleMenuItemClick("/")}>
//         <img src="Images/logo1.svg" alt="Vinyled Logo" className="logo-img" />
//       </Link>

//       <input
//         type="checkbox"
//         className="menu-btn"
//         id="menu-btn"
//         checked={isMenuOpen}
//         onChange={toggleMenu}
//       />
//       <label htmlFor="menu-btn" className="menu-icon">
//         <span className="navicon"></span>
//       </label>

//       <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/" onClick={() => handleMenuItemClick("/")}>
//             HOME
//           </Link>
//         </li>

//         <li
//           className={`dropdown ${activeDropdown === "services" ? "active" : ""}`}
//           onClick={(e) => {
//             if (window.innerWidth <= 1280) {
//               e.stopPropagation();
//               setActiveDropdown(
//                 activeDropdown === "services" ? null : "services"
//               );
//             }
//           }}
//         >
//           <a>
//             SERVICES <i className="fa fa-caret-down"></i>
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <Link to="/enhance" onClick={() => handleMenuItemClick("/enhance")}>
//                 ENHANCE
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/personolization"
//                 onClick={() => handleMenuItemClick("/personolization")}
//               >
//                 PERSONALIZE
//               </Link>
//             </li>
//             <li>
//               <Link to="/protect" onClick={() => handleMenuItemClick("/protect")}>
//                 PROTECT
//               </Link>
//             </li>
//             <li>
//               <Link to="/maintain" onClick={() => handleMenuItemClick("/maintain")}>
//                 MAINTAIN
//               </Link>
//             </li>
//             <li>
//               <Link to="/branding" onClick={() => handleMenuItemClick("/branding")}>
//                 FLEET BRANDING / COMMERCIAL PROJECT
//               </Link>
//             </li>
//           </ul>
//         </li>

//         <li
//           className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
//           onClick={(e) => {
//             if (window.innerWidth <= 1280) {
//               e.stopPropagation();
//               setActiveDropdown(activeDropdown === "about" ? null : "about");
//             }
//           }}
//         >
//           <a>
//             ABOUT US <i className="fa fa-caret-down"></i>
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <Link to="/our-process" onClick={() => handleMenuItemClick("/our-process")}>
//                 BLOGS
//               </Link>
//             </li>
//           </ul>
//         </li>

//         <li>
//           <Link to="/our-clients" onClick={() => handleMenuItemClick("/our-clients")}>
//             OUR CLIENTS
//           </Link>
//         </li>

//         <li>
//           <Link to="/contact-us" onClick={() => handleMenuItemClick("/contact-us")}>
//             CONTACT US
//           </Link>
//         </li>
//       </ul>

//       <a
//         href="#flag"
//         className="flag-icon"
//         onClick={(e) => {
//           e.preventDefault();
//           handleMenuItemClick("/");
//         }}
//       >
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
//           alt="Indian Flag"
//           className="flag-img"
//         />
//       </a>
//     </header>
//   );
// };

// export default Header;




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    navigate(path, { replace: true });
    window.scrollTo(0, 0);
  };

  // Close dropdowns if clicked outside (on mobile/tablet)
  useEffect(() => {
    const handleOutsideClick = () => {
      if (window.innerWidth <= 1280) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo" onClick={() => handleMenuItemClick("/")}>
        <img src="Images/logo1.svg" alt="Vinyled Logo" className="logo-img" />
      </Link>

      <input
        type="checkbox"
        className="menu-btn"
        id="menu-btn"
        checked={isMenuOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="navicon"></span>
      </label>

      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => handleMenuItemClick("/")}>
            HOME
          </Link>
        </li>

        <li
          className={`dropdown ${activeDropdown === "services" ? "active" : ""}`}
          onClick={(e) => {
            if (window.innerWidth <= 1280) {
              e.stopPropagation();
              setActiveDropdown(activeDropdown === "services" ? null : "services");
            }
          }}
        >
          <a>
            SERVICES <i className="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/enhance" onClick={() => handleMenuItemClick("/enhance")}>ENHANCE</Link></li>
            <li><Link to="/personolization" onClick={() => handleMenuItemClick("/personolization")}>PERSONALIZE</Link></li>
            <li><Link to="/protect" onClick={() => handleMenuItemClick("/protect")}>PROTECT</Link></li>
            <li><Link to="/maintain" onClick={() => handleMenuItemClick("/maintain")}>MAINTAIN</Link></li>
            <li><Link to="/branding" onClick={() => handleMenuItemClick("/branding")}>FLEET BRANDING / COMMERCIAL PROJECT</Link></li>
          </ul>
        </li>

        <li
          className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
          onClick={(e) => {
            if (window.innerWidth <= 1280) {
              e.stopPropagation();
              setActiveDropdown(activeDropdown === "about" ? null : "about");
            }
          }}
        >
          <a>
            ABOUT US <i className="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/our-process" onClick={() => handleMenuItemClick("/our-process")}>BLOGS</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/our-clients" onClick={() => handleMenuItemClick("/our-clients")}>
            OUR CLIENTS
          </Link>
        </li>

        <li>
          <Link to="/contact-us" onClick={() => handleMenuItemClick("/contact-us")}>
            CONTACT US
          </Link>
        </li>
      </ul>

      <a
        href="#flag"
        className="flag-icon"
        onClick={(e) => {
          e.preventDefault();
          handleMenuItemClick("/");
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
          alt="Indian Flag"
          className="flag-img"
        />
      </a>
    </header>
  );
};

export default Header;
