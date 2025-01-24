import React from 'react'
import "./AboutMe.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import codingImg from "../../img/codingImg.png"
import educationImg from "../../img/educationImg.png"
import humbleImg from "../../img/humble.png"

export default function AboutMe() {

    const informations = [
        {
            img: educationImg,
            title: "BCA Student with a 9.5 CGPA",
            description: "Currently pursuing a Bachelor's in Computer Applications with a strong focus on web development, competitive programming, and maintaining academic excellence.",
            year: "2023 - Present"
        },
        {
            img: codingImg,
            title: "Full-Stack Web Developer",
            description: "Gained hands-on experience in the MERN stack while building real-world projects, including a hotel booking app and an Data visualiser.",
            year: "2022 - Present"
        },
        {
            img: humbleImg,
            title: "Dedicated Learner and Hard Worker",
            description: "Selected as Class Monitor and Student Representative for exceptional leadership skills. Recognized for effective teamwork and commitment to academic excellence in college.",
            year: ""
        },
    ]

    return (
        <div className="a-wrapper" id="about_me">
            <div className="a-heading">
                <span>About &nbsp;</span>
                <span>Me</span>
                <div className="blur a-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur a-blur2" style={{ background: "skyblue" }}></div>

            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {informations.map((info, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="a_slides">
                                <img src={info.img} alt="" />
                                <span style={{ fontWeight: "bold" }}>{info.title}</span>
                                <span>{info.description}</span>
                                <span style={{ fontWeight: "bold" }}>{info.year}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}
