import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className="navbar_left">
        <span className="my_name">SUMANTH C S</span>
      </div>
      <div className="navbar_right">
        <button className="menu_btn" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav_links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link activeClass="active" to="profile" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="about_me" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} onClick={() => setIsOpen(false)}>
              <button className="btn i-btn">Contact Me</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
