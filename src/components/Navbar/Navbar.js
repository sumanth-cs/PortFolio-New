import React from 'react'
import "./Navbar.css"
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="wrapper">
        <div className="navbar_left">
            <span className='my_name'>SUMANTH C S</span>
        </div>
        <div className="navbar_right">
            <ul>
              
                <li>
                <Link activeClass="active" to="profile" spy={true} smooth={true}>
                  Profile
                </Link>  
                </li>
                <li>
                <Link  to="skills" spy={true} smooth={true}>
                  Skills
                </Link>  
                </li>
                <li>
                <Link  to="projects" spy={true} smooth={true}>
                  Projects
                </Link>  
                </li>
                <li>
                <Link  to="about_me" spy={true} smooth={true}>
                  About Me
                </Link>  
                </li>
                <Link  to="contact" spy={true} smooth={true}>
                <button className='btn i-btn'>contact me</button>
                </Link>  

            </ul>
        </div>
    </div>
  )
}
