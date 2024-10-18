import React from 'react';
import './virat.css';
import profile_img from '../../assets/profile_img.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import resume from '../../assets/resume.pdf';

const Virat = () => {
  return (
    <div id='home' className='Virat'>
      <img src={profile_img} alt="Virat Sharma" />
      <h1><span>I'm Virat Sharma,</span> Frontend Developer Based in India :)</h1>
      <p>I am a Frontend Developer and this is a Demo Project using React.</p>
      <div className="virat-action">
        <div className="virat-connect">
          <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="virat-resume">
          <a href={resume} download className="resume-link">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Virat;
