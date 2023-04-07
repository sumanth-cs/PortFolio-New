import React from 'react'
import "./AboutMe.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import codingImg from "../../img/codingImg.png"
import deliveryImg from "../../img/deliveryImg.png"
import educationImg from "../../img/educationImg.png"

export default function AboutMe() {

    const informations = [
        {
            img: codingImg,
            title: "Relevel By Unacademy",
            description: "Joined Web Development Course and started learning new things.",
            year: "June-2022 to April-2023"
        },
        {
            img: deliveryImg,
            title: "Delivery Partner for ShadowFax and Zomato",
            description: "started working in these companies full time.",
            year: "June-2021 to June-2022"
        },
        {
            img: educationImg,
            title: "Dropped out from my 2nd year BCA",
            description: "Due to lack of Growth in carrer i decided to dropout",
            year: "2020 - 2021"
        }
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
