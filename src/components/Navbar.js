// import { useState } from 'react';
// import styles from './Navbar.module.css';

// function Navbar() {
//   // adding the states
//   const [isActive, setIsActive] = useState(false);

//   // add the active class
//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   // clean up function to remove the active class

//   const removeActive = () => {
//     setIsActive(false);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">

//         <nav className={`${styles.navbar}`}>

//           {/* logo */}
//           <a href="#home" className={`${styles.logo}`}>Dev. </a>

//           <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>Home</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>Catalog</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>All products</a>
//             </li>
//             <li onClick={removeActive}>
//               <a href="#home" className={`${styles.navLink}`}>Contact</a>
//             </li>
//           </ul>

//           <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
//             <span className={`${styles.bar}`} />
//             <span className={`${styles.bar}`} />
//             <span className={`${styles.bar}`} />
//           </div>
//         </nav>

//       </header>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import {Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <nav className="nav">
      <a href="/" className="logo">
        <img></img>
      </a>
      <ul className="nav__list">
        <li><Link to="/"> Home  </Link></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;