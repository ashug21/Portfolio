import React, { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";

const Contact123 = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const form = useRef();
  const notify = () => toast("SuccessFully Submitted");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zm22xme', 'template_drr78ni', form.current, '-nfIuLjCceKM19YPl')
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          notify();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-page123">
      <Navbar/>
      <ToastContainer
position="top-right"
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
      <h1 id="heading123">Contact Me</h1>

      <br/>

      <div className="contact-container123">
        {/* Contact Form */}
        <form ref={form} className="contact-form123" onSubmit={sendEmail}>
          <label htmlFor="name123">Name</label>
          <input type="text" id="name123" name='name' placeholder="Your Name" />

          <label htmlFor="email123">Email</label>
          <input type="email" id="email123" name='email' placeholder="Your Email" />

          <label htmlFor="message123">Message</label>
          <textarea id="message123" rows="5" name='message'  placeholder="Your Message"></textarea>

          <button type="submit" className="btn123">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info123">
          <h2 className="heading2123">Get in touch</h2>
          <p>Email: ashmeetsinghkalsi.dev@gmail.com</p>
          <p>Phone: +91-9971911118</p>
          <p>Location: India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact123;
