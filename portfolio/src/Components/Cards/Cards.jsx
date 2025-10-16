import React from 'react'
import react from '../../assets/logo/react.png'
import Nodejs from '../../assets/logo/nodejs.png'
import JS from '../../assets/logo/js.png'
import mysql from '../../assets/logo/mysql-2.png'
import C from '../../assets/logo/programmer.png'
import MongoDB from '../../assets/logo/database-storage.png'
import Firebase from '../../assets/logo/icons8-firebase-48.png'
import css from '../../assets/logo/css-3.png'
import ejs from '../../assets/logo/image.png'

import './Cards.css'


const Cards = () => {
  return (
    <div>
    <div className="techCardsContainer07">
      <div className="techCard07">
        <img src={react} alt="React" className="techLogo07" />
        <span className="techName07">React</span>
      </div>
      <div className="techCard07">
        <img src={Nodejs} alt="Node.js" className="techLogo07" />
        <span className="techName07">Node.js</span>
      </div>
      <div className="techCard07">
        <img src={C} alt="React" className="techLogo07" />
        <span className="techName07">C++</span>
      </div>
      <div className="techCard07">
        <img src={JS} alt="React" className="techLogo07" />
        <span className="techName07">JavaScript</span>
      </div>
      <div className="techCard07">
        <img src={ejs} alt="React" className="techLogo07" />
        <span className="techName07">EJS</span>
      </div>
    </div>

    <br/>
    <div className="techCardsContainer07">
      <div className="techCard07">
        <img src={Firebase} alt="React" className="techLogo07" />
        <span className="techName07">Firebase</span>
      </div>
      <div className="techCard07">
        <img src={MongoDB} alt="Node.js" className="techLogo07" />
        <span className="techName07">MongoDB</span>
      </div>
      <div className="techCard07">
        <img src={css} alt="React" className="techLogo07" />
        <span className="techName07">CSS</span>
      </div>
      <div className="techCard07">
        <img src={mysql} alt="React" className="techLogo07" />
        <span className="techName07">My SQL</span>
      </div>
    </div>

    </div>

    
  )
}

export default Cards
