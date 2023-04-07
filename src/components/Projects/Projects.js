import React from 'react'
import "./Projects.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import netflix from "../../img/netflixImg.jpg"
import chat from "../../img/chatImg.png"
import codeEditor from "../../img/codeEditorImg.png"
import insta from "../../img/instaImg.webp"
import movieCity from "../../img/movieCityImg.gif"
import txtEditor from "../../img/txtEditorImg.jpeg"
// import {Link} from "react-router-dom"

export default function Projects() {
  return (
    <div className="projects" id='projects'>
      <span>
        Recent <span>Projects</span>
      </span>
      <div className="blur s_blur1" style={{ background: "#ABF1FF94" }}></div>

      <Swiper
        spaceBetween={5}
        grabCursor={true}
        slidesPerView={5}
        className="project_slider"
      >

        <SwiperSlide>
          <a href="https://ruby-clean-python.cyclic.app" target="_blank" rel="noreferrer">
          <img src={netflix} alt="" />
          <div className='txt'>
            Video Streaming App
          </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <img src={movieCity} alt="" />
          <div className='txt'>
            Movie Booking App
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={codeEditor} alt="" />
          <div className='txt'>
            Code Editor
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={insta} alt="" />
          <div className='txt'>
            Social Media App
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={chat} alt="" />
          <div className='txt'>
            Messaging App
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={txtEditor} alt="" />
          <div className='txt'>
            Text Editor
          </div>
        </SwiperSlide>
        <div className="blur p_blur2" style={{ background: "#edd0ff",top:"18rem",left:"7s0rem" }}></div>

      </Swiper>

    </div>
  )
}
