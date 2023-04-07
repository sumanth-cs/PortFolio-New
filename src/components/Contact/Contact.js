import React, { useRef, useState } from 'react'
import "./Contact.css"

import emailjs from '@emailjs/browser';


export default function Contact() {

    const form = useRef();
    const [done, setDone] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o9jv378', 'template_6z5bw8o', form.current, 'M6FbTfQgrNnHi5lgP')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                form.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact_form" id="contact">
            <div className="c_left">
                <span>Get in Touch</span>
                <br />
                <span>Contact me</span>
                <div className="blur c_blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            <div className="c_right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="user" placeholder="Name" />
                    <input type="email" name="from_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="btn" />
                    <span style={{fontWeight:"bold",fontSize:"1rem"}}>{done && "Thanks for Contacting me"}</span>
                    <div className="blur c_blur1" style={{ background: "#ABF1FF94" }}></div>
                    <div className="blur c_blur2" style={{ background: "#edd0ff" }}></div>
                </form>
            </div>
        </div>
    )
}
