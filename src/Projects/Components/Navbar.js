import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [icon, seticon] = useState(false);

  return (
    <div className="navbar">
      <div>
        <h2 className="owner__name">Muhammad Nasir</h2>
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
      >
        {/* <li ><Link to="/" onClick={() => seticon(!icon)}>Home</Link></li>
        <li><Link to="/about" onClick={() => seticon(!icon)}>About</Link></li>
        <li><Link to="/portfolio" onClick={() => seticon(!icon)}>Portfolio</Link></li>
        <li><Link to="/services" onClick={() => seticon(!icon)}>Services</Link></li>
        <li><Link to="/skills" onClick={() => seticon(!icon)}>Skills</Link></li>
        <li><Link to="/process" onClick={() => seticon(!icon)}>Process</Link></li> */}
      
        <Link spy={true} to='home' smooth={true} activeClass='activeClass' onClick={() => seticon(!icon)}>
        <li>Home</li>
        </Link>
                        
        <Link spy={true} to='about' onClick={() => seticon(!icon)}>
        <li>About</li>
        </Link>

        <Link spy={true} to='portfolio' onClick={() => seticon(!icon)}>
        <li>Projects</li>
        </Link>
                
        <Link spy={true} to='process' onClick={() => seticon(!icon)}>
        <li>Process</li>
        </Link>

        <Link spy={true} to='contacts' onClick={() => seticon(!icon)}>
        <button className="button">Contact Us</button>
        {/* <li>Contact Us</li> */}
        </Link>
      
      </ul>

        
      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>

    </div>
  );
};

export default Navbar;


//package name react-scroll , import { Link } from "react-scroll"
//we can use that in link 
//to="/about" spy={true} smooth={true} offset={50} duration={500}
