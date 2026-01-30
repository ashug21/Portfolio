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
      <h1>Project-1 : BuyVerse </h1>
      <br/> 
      <p> <strong>Description : </strong>BuyVerse, a full-stack Next.js e-commerce platform with product browsing, <strong>add-to-cart, address management, order placement, and UPI-based payment flow</strong> using razorpay and NextJs authentication for users. Implemented dynamic routing, localStorage cart handling, backend APIs, responsive UI, and seamless checkout experience. Also added <strong> OTP generation </strong> and validation while signing up users using redis ,  Deployed on Vercel with modern UX practices.</p>
      <br/>
      <p><strong>Languages Used : </strong>  Next.js, React, Node.js, Express, MongoDB Atlas, Razorpay (UPI), Redis(Railway)</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://buy-verse-delta.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/BuyVerse">Github Link</Link>
      </div>
      
      </div>


      <div className='project-container'>
      <h1>Project-2 : FitnessTracker</h1>
      <br/>
      <p> <strong>Description : </strong> FitnessTracker is a Full-stack fitness application that lets users set goals, track their workout and set PR(Personal Record), calculate calories,choose goal and workout split , and manage progress through a React-powered interface with backend APIs , using express for CRUD operations and Firebase for authentication, offering a smooth, organized, and user-friendly fitness management experience.
      </p>
      <br/>
      <p><strong>Languages Used : </strong> React, Firebase , NodeJs , Express , AWS Amplify , MongoDb Atlas</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://main.d2gbyro02c3xlw.amplifyapp.com">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/FitnessTracker">Github Link</Link>
      </div>
      
      </div>


   
      
      <div className='project-container'>
      <h1>Project-3 : CryptoPlace</h1>
      <br/>
      <p> <strong >Description :</strong>  CryptoPlace is a React-based web application that provides real-time cryptocurrency details, including price, market cap, and symbol for popular coins. It fetches live data from APIs and displays it in a clean, responsive interface. The project helps users easily track crypto market trends and stay updated with accurate, up-to-date financial information.</p>
      <br/>
      <p><strong>Languages Used : </strong> React, Firebase</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://crypto-place-alpha-rouge.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/CryptoPlace.git">Github Link</Link>
      </div>
      
      </div>

      <div className='project-container'>
      <h1>Project-4 : TaskFlow</h1>
      <br/>
      <p> <strong>Description : </strong> TaskFlow is a modern and efficient task management web application built using Next.js, Node.js with Express, and PostgreSQL. It allows users to create, organize, and track tasks with clear statuses and deadlines, all within a clean and good-looking user interface. The app focuses on simplicity and productivity, providing a smooth experience with structured task views and basic analytics to help users stay organized and focused. It also includes Google signIn along with that it also can add profile picture using Google.</p>
      <br/>
      <p><strong>Languages Used : </strong> NextJs, Nodejs , Express , PostgreSQL (Neon)</p>
      <br/>
      <div className='link-div'>
      <Link className='link-1' to="https://my-task-manager-lime.vercel.app">Project URL</Link>
      <Link className='link-2' to="https://github.com/ashug21/MyTaskManager">Github Link</Link>
      </div>
      
      </div>

      <div className='project-container'>
      <h1>Project-5 : WebTV</h1>
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
      <h1>Project-6 : Blinkit Clone</h1>
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
      <h1>Project-7 : Weather App</h1>
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

    <br/><br/> <br/><br/> <br/><br/> <br/><br/>

     
     
    </div>
  )
}

export default Projects
