import React from 'react'
import "./Profile.css"
import github from "../../img/github.png"
import linkdin from "../../img/linkedin.png"
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Profile() {
    const transition = { duration: 2, type: "spring" };

    return (
        <div className="profile" id='profile'>
            <div className="p_left">
                <div className="p_name">
                    <span>Hi! I Am</span>
                    <span>Sumanth C S</span>
                    <span>I'm an enthusiastic <strong>Full Stack Developer</strong> with a passion for learning and problem-solving.
                        <br />
                        I'm dedicated to <strong>
                            learning</strong>  and <strong> expanding my knowledge</strong> to become a valuable contributor to the industry.
                    </span>
                </div>

                <Link to="contact" smooth={true} spy={true}>
                    <button className="btn p_btn">
                        Hire me
                    </button>
                </Link>

                <div className="p_icons">
                    <img src={github} alt="" />
                    <img src={linkdin} alt="" />
                </div>
            </div>
            <div className="p_right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt=""
                />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: "-4%", left: "68%" }}
                >
                    <FloatingDiv image={crown} txt1="Great" txt2="learning" />
                </motion.div>

                <motion.div
                    initial={{ left: "20rem", top: "23rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    style={{  top: "23rem", left: "20rem",width:"15rem" }}
                >
                    <FloatingDiv image={thumbup} txt1="Web" txt2="Developer" />
                </motion.div>

                <div className='blur' style={{ background: "rgb(238 210 255)", zIndex: "-2" }}></div>
                <div className='blur' style={{ background: "#c1f5ff", top: "17rem", width: "21rem", height: "11rem", left: "-9rem", zIndex: "-2" }}></div>
            </div>
        </div>
    )
}
