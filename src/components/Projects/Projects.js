import React from 'react';
import './Projects.css';

import chat from '../../img/chatImg.png';
import insta from '../../img/instaImg.webp';
import hotelBooking from '../../img/hotelBookingImg.jpg';
import dashboard from '../../img/dashboardImg.jpg';
import aiImage from '../../img/aiImageImg.jpg';
import movieCityImg2 from '../../img/movieCityImg2.png';
import calculatorImg from '../../img/calculator.png';
import netflixImg2 from '../../img/netflixImg2.png';
import codeEditor from '../../img/codeEditor.png';
import txtEditorImg2 from '../../img/txtEditorImg2.png';

export default function Projects() {
  const projects = [
    {
      title: 'Data Visualization Dashboard',
      description:
        'Interactive dashboard to visualize datasets with filters and dynamic updates.',
      img: dashboard,
      link: 'https://remarkable-boba-205f02.netlify.app/',
    },
    {
      title: 'MERN Hotel Booking App',
      description:
        'Full-stack app for hotel bookings with search, availability, secure booking, and payment integration.',
      img: hotelBooking,
      link: 'https://mernhotelbooking-pph0.onrender.com/',
    },

    {
      title: 'AI Image Generator',
      description:
        'Generate images from user prompts using OpenAI’s API. Built with React.js and Node.js.',
      img: aiImage,
      link: 'https://helpful-sunshine-8a962f.netlify.app/',
    },
    {
      title: 'Video Streaming App',
      description: 'Stream your favorite movies and TV shows. Built using React.js and Node.js.',
      img: netflixImg2,
      link: 'https://ruby-clean-python.cyclic.app',
    },
    {
      title: 'Movie City App',
      description: 'A movie search app with API integration for real-time movie data.',
      img: movieCityImg2,
      link: 'https://vocal-kitsune-c7cf1a.netlify.app',
    },
    {
      title: 'Code Editor',
      description: 'An online code editor supporting multiple programming languages.',
      img: codeEditor,
      link: 'https://benevolent-hamster-5649d9.netlify.app',
    },
    {
      title: 'Text Editor',
      description: 'A lightweight text editor for quick notes and document editing.',
      img: txtEditorImg2,
      link: 'https://shimmering-klepon-9a6094.netlify.app',
    },
    {
      title: 'Basic Calculator',
      description: 'A simple calculator application for basic arithmetic operations.',
      img: calculatorImg,
      link: 'https://resilient-tartufo-97e8b0.netlify.app',
    },
    {
      title: 'Social Media App',
      description: 'A full-stack social media application with authentication and real-time chat.',
      img: insta,
      link: 'https://bored-cod-lab-coat.cyclic.app',
    },
    {
      title: 'Messaging App',
      description: 'A WhatsApp-like messaging app built with Firebase and React.js.',
      img: chat,
      link: 'https://whatsapp-clone-17602.web.app',
    },

  ];

  return (
    <div className="projects" id="projects">
      <span>
        Recent <span>Projects</span>
      </span>
      <div className="projects_grid">
        {projects.map((project, index) => (
          <div className="project_card" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.img} alt={project.title} className="project_image" />
              <div className="project_info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
