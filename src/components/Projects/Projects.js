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
import calculator from "../../img/calculatorImg.png"

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
        <a href="https://vocal-kitsune-c7cf1a.netlify.app" target="_blank" rel="noreferrer">
          <img src={movieCity} alt="" />
          <div className='txt'>
            Movie City App
          </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://benevolent-hamster-5649d9.netlify.app" target="_blank" rel="noreferrer">
          <img src={codeEditor} alt="" />
          <div className='txt'>
            Code Editor
          </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://bored-cod-lab-coat.cyclic.app" target="_blank" rel="noreferrer">
          <img src={insta} alt="" />
          <div className='txt'>
            Social Media App
          </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://whatsapp-clone-17602.web.app" target="_blank" rel="noreferrer">
          <img src={chat} alt="" />
          <div className='txt'>
            Messaging App
          </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://shimmering-klepon-9a6094.netlify.app" target="_blank" rel="noreferrer">
          <img src={txtEditor} alt="" />
          <div className='txt'>
            Text Editor
          </div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://resilient-tartufo-97e8b0.netlify.app" target="_blank" rel="noreferrer">
          <img src={calculator} alt="" />
          <div className='txt'>
            Basic Calculator
          </div>
          </a>
        </SwiperSlide>
        <div className="blur p_blur2" style={{ background: "#edd0ff",top:"18rem",left:"7s0rem" }}></div>

      </Swiper>

    </div>
  )
}
