import React,{useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Projects.css'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar/>
      <br/><br/>
      <div className='project-container'>
      <h1>Project-1 : CryptoPlace</h1>
      <br/>
      <p> <strong>Description : </strong> CryptoPlace is a React-based web application that provides real-time cryptocurrency details, including price, market cap, and symbol for popular coins. It fetches live data from APIs and displays it in a clean, responsive interface. The project helps users easily track crypto market trends and stay updated with accurate, up-to-date financial information.</p>
      <br/>
      <p><strong>Languages Used : </strong> React, Firebase</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://crypto-place-alpha-rouge.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/CryptoPlace.git">Github Link</Link>
      </div>
      
      </div>

      <div className='project-container'>
      <h1>Project-2 : WebTV</h1>
      <br/>
      <p> <strong>Description : </strong>WebTV is a full-stack web application that works like an OTT platform. Users can sign up and log in to access the app, browse, and watch movie trailers. It also has a subscription page (still under development) and offers other features to make the platform more interactive and user-friendly. WebTV aims to provide a smooth streaming experience while continuously adding new functionalities for a better user experience.</p>
      <br/>
      <p><strong>Languages Used : </strong> Ejs, NodeJs , MonogoDb Atlas , Ejs, Javascript </p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://web-tv-ten.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/WebTV.git">Github Link</Link>
      <Link className='link-btn' to="/webtv" target='_blank'>Video Walkthrough</Link>
      </div>
      
      </div>


      <div className='project-container'>
      <h1>Project-3 : TaskManager</h1>
      <br/>
      <p> <strong>Description : </strong> Task Manager is a responsive React frontend with Node/Express backend enabling quick task creation, categorization, deadlines, and progress tracking. Clean UI, intuitive forms, and RESTful API for reliable CRUD operations and real-time UX.</p>
      <br/>
      <p><strong>Languages Used : </strong> React, Nodejs , Express , MongoDB Atlas</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://task-manager-bice-ten.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/TaskManager">Github Link</Link>
      </div>
      
      </div>

      <div className='project-container'>
      <h1>Project-4 : Blinkit Clone</h1>
      <br/>
      <p> <strong>Description : </strong> This Project is a clone for popular grocery delivery web application, built using React and Firebase. The platform replicates the core functionality and sleek user interface of Blinkit, allowing users to browse grocery items, add products to their cart. Firebase handles authentication, real-time database operations, and cloud hosting, ensuring smooth performance and secure data management. The app is fully responsive, providing an optimized experience across mobile and desktop devices. This project demonstrates front-end development skills, state management, and seamless integration with cloud-based backend services to deliver a fast, reliable.</p>
      <br/>
      <p><strong>Languages Used : </strong> React, Firebase</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://blinkit-clone-gray.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/BlinkitClone.git">Github Link</Link>
      </div>
      
      </div>
      

     

      <div className='project-container'>
      <h1>Project-5 : Weather App</h1>
      <br/>
      <p> <strong>Description : </strong> Weather Forecast is a React-based web application that provides real-time weather updates for any city using the WeatherAPI. Users can enter a location to instantly view temperature, humidity, wind speed, and weather conditions in both Celsius and Fahrenheit. The app features a clean, responsive design and uses API integration to deliver accurate, up-to-date weather information, making it simple and efficient for users to check global weather conditions anytime.</p>
      <br/>
      <p><strong>Languages Used : </strong> React</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://weather-app-jade-nine-70.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/WeatherApp.git">Github Link</Link>
      </div>
      
      </div>


     
     
    </div>
  )
}

export default Projects
