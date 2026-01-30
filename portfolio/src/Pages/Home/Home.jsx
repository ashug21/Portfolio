import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Profile from "../../assets/ashmeet.JPG";
import react from "../../assets/logo/react.png";
import Cards from "../../Components/Cards/Cards";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleAbout() {
    const aboutSection = document.getElementById("heading");
    if (aboutSection) {

      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offset = 100; 


      window.scrollBy({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }
  return (
    <div>
      <Navbar />

      <div className="hero">
        <div className="heading">
          <h2>Crafting dynamic applications,</h2>
          <h2>that connect people and technology.</h2>

          <div className="btnclass">
            <a
              href="/Resume1.pdf" 
              className="resume-btn999 btn"
              download="Ashmeet_Resume.pdf"
            >
              Download CV
            </a>
            <button onClick={handleAbout} className="btn2">
              About Me
            </button>
          </div>
        </div>

        <img className="img" src={Profile}></img>
      </div>

      <div className="about">
        <p>
          Hi, I'm Ashmeet Singh! I love creating digital experiences that make a
          real impact. I enjoy designing and building solutions that are both
          useful and visually appealing. I pay attention to the details and try
          to bring creativity and smart thinking to every project. Check out my
          projects and portfolio to see how I turn ideas into something
          meaningful and fun.
        </p>
      </div>

      <p id="para">Essential Tools and Languages I use</p>

      <br />
      <br />
      <div className="heading2">
        <p>Discover the Powerful tools and technologies I use to create</p>
        <p> exceptional , High performing website & applications.</p>
      </div>

      <br />
      <br />

      <Cards />

      <br />
      <br />
      <br />
      <p id="heading">About Me</p>
      <br />
      <div className="aboutme">
        <p>
          Hello, I’m Ashmeet Singh, a 22-year-old, full-stack developer
          passionate about creating impactful web applications. I completed my
          college from <strong>NSUT Dwarka Mor </strong> and my schooling from{" "}
          <strong>GHPS Vasant Vihar</strong> , and since then, I’ve been on a
          mission to combine creativity with technology to solve real-world
          problems.
        </p>
        <p className="meparas">
          As a MERN stack/Full stack developer, I specialize in building
          scalable, dynamic, and user-friendly web applications. I enjoy taking
          complex challenges and turning them into intuitive digital
          experiences. My hands-on experience with MongoDB, Express.js,
          React.js, and Node.js has allowed me to contribute to projects that
          not only function seamlessly but also provide meaningful solutions to
          users. I thrive in collaborative environments, where my
          problem-solving skills, teamwork, and communication shine. I believe
          in continuous learning and actively explore emerging technologies,
          frameworks, and tools to stay ahead in the fast-paced world of web
          development.
        </p>
        <p className="meparas">
          Beyond coding, I’m a strategic thinker and a creative mind—my hobbies
          include badminton and story-driven games, which help me enhance focus,
          strategy, and storytelling skills. I aim to bring this blend of
          technical expertise, creativity, and passion for growth to every
          project I undertake. I’m eager to work on innovative projects that
          challenge the status quo, and through my portfolio, I aim to showcase
          not only my technical abilities but also my dedication, adaptability,
          and vision for creating meaningful digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Home;
