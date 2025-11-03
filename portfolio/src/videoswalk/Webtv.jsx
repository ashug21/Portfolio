import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Webtv.css'

const Webtv = () => {
  return (
    <div>
      <Navbar />
      <div className="video-container">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/V_FLoAT-mlI?si=1-w5L979Z0JpNiWv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <p id='para999'><strong>Note:</strong> This video was recorded and uploaded by me on my youtube channel link : https://www.youtube.com/watch?v=V_FLoAT-mlI</p>
    </div>
  )
}

export default Webtv
