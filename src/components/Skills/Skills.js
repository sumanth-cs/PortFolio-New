import React from 'react'
import "./Skills.css"
import resume from "../../img/SumanthCS_Resume_WebDevIntern.pdf"
import Cards from '../Cards/Cards'
import html from "../../img/html.png"
import css from "../../img/css.png"
import js from "../../img/js.png"
import react from "../../img/react.png"
import mongodb from "../../img/mongodb.png"
import mysql from "../../img/mysql.png"
import node from "../../img/node.png"
import git from "../../img/git.png"

export default function Skills() {
    return (
        <div className="skills">
            <div className="skills_left">
                <span className='heading'>
                    <span>My </span>
                    <span> Skills</span>
                </span>
                <br />
                <span>Proficient in <strong>HTML, CSS, JavaScript</strong> for front-end development.</span><br />
                <span>Experience with <strong>React</strong> for building modern and responsive user interfaces.</span><br />
                <span>Strong understanding of server-side programming languages such as<strong> Node.js.</strong> </span><br />
                <span>understanding in working with databases, including <strong>MySQL, MongoDB.</strong></span><br />
                <span>Familiarity with version control systems like<strong> Git.</strong></span><br />
                <span>Ability to design and develop <strong>RESTful APIs.</strong></span><br />
                <a href={resume} download>

                    <button className='btn ' style={{marginTop:"2rem"}}>download my resume</button>
                </a>
                <div className="blur s_blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="skills_right">
                <div className="blur s_blur2" style={{ background: "#edd0ff" }}></div>
                <div style={{ left: "15rem", top: "-6rem", transform: "scale(1.2)" }}><Cards logo={html} color={"#f06529"} /></div>
                <div style={{ left: "5rem", top: "4rem" }}><Cards logo={css} color={"#2965f1"} /></div>
                <div style={{ left: "30rem", top: "-3rem" }}><Cards logo={js} color={"#F0DB4F"} /></div>
                <div style={{ left: "20rem", top: "8rem", transform: "scale(1.2)" }}><Cards logo={react} color={"#61dbfb"} /></div>
                <div style={{ left: "10rem", top: "16rem" }}><Cards logo={node} color={"#589636"} /></div>
                <div style={{ left: "33rem", top: "14rem", transform: "scale(1.4)" }}><Cards logo={mysql} color={"#00758F"} /></div>
                <div style={{ left: "20rem", top: "21rem" , transform: "scale(2)"}}><Cards logo={mongodb} color={"#88ba3c"} /></div>
                <div style={{ left: "2rem", top: "24rem", transform: "scale(1.1)" }}><Cards logo={git} color={"#f34f29"} /></div>
            </div>
        </div>
    )
}
