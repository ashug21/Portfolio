import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Certifications.css";

import IBM from "../../../Certificates/IBM.png";
import Microsoft from "../../../Certificates/Microsoft.png";
import Aitools from "../../../Certificates/AiTools.png";
import productManager from "../../../Certificates/ProjectManager.png";

const Certifications = () => {
  return (
    <>
      <Navbar />

      <br />
      <br />
      <section className="certifications">
        <h2 className="certificationsTitle">Certifications</h2>
        <div className="certSingle">
          <div className="certCard">
            <img src={Microsoft} alt="React Certificate" className="certImg" />

            <h3>Foundations of Coding Front-End</h3>

            <p>
              Completed an in-depth front-end foundations program covering HTML,
              CSS, JavaScript, and React, with a strong focus on building
              responsive user interfaces, writing clean component-based code,
              and following modern web development best practices.
            </p>
          </div>
        </div>
        <br /> <br /> <br />
        <div className="certSingle">
          <div className="certCard">
            <img src={IBM} alt="React Certificate" className="certImg" />

            <h3>Developing Back-End Apps with Node.js and Express</h3>

            <p>
              Gained practical experience building back-end applications using
              Node.js and Express, focusing on RESTful API design, middleware
              architecture, performance optimization, and industry best
              practices.
            </p>
          </div>
        </div>
        <br /> <br />
        <div className="certSingle">
          <div className="certCard">
            <img src={Aitools} alt="React Certificate" className="certImg" />

            <h3>Practical GenAI: Basics, Tools, Use cases, Ethics, Future</h3>

            <p>
              Covered Generative AI basics, commonly used AI tools, real-world
              applications, ethical considerations, and emerging industry
              trends.
            </p>
          </div>
          <br />
        </div>
        <br /> <br />
        <div className="certSingle">
          <div className="certCard">
            <img
              src={productManager}
              alt="React Certificate"
              className="certImg"
            />

            <h3>Project Manager Job Simulation</h3>

            <p>
              Participated in a practical project management job simulation,
              focusing on team collaboration, task prioritization, and effective
              decision-making as a project manager.
            </p>
          </div>
        </div>
      </section>


    </>
  );
};

export default Certifications;
