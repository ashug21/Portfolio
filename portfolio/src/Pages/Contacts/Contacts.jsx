import React, { useRef,useEffect } from 'react';

import "./Contacts.css";
import Navbar from "../../Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from "react-router-dom";

const Contact123 = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

 
  const notify = () => toast("SuccessFully Submitted");

 

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

       

        <div className="contact-info123">
          <h2 className="heading2123">Get in touch</h2>
          <p>Email: ashmeetsinghkalsi.dev@gmail.com</p>
          <p>Phone: +91-9971911118</p>
          <p>Location: Delhi,India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact123;
