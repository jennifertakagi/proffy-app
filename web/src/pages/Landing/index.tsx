import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

import logoImage from '../../assets/images/logo.svg';
import landingImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

function Landing() {
    return (
       <div id="page-landing">
           <div id="page-landing-content" className="container">
               <div className="logo-container">
                   <img src={ logoImage } alt="Proffy logo" />
                   <h2>Your online study platform</h2>
               </div>

               <img 
                src={ landingImage } 
                alt="Landing Background"
                className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={ studyIcon } alt="Study button" />
                        Study
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={ giveClassesIcon } alt="Give classes button" />
                        Give classes
                    </Link>
                </div>

                <span className="total-connections">
                    Total of 200 connections made
                    <img src={ purpleHeartIcon } alt="Purple heart icon" />
                </span>
            </div>
       </div>
    );
}

export default Landing;
  