import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import viru_jpg from '../../assets/viru_jpg.jpeg'





const About = () => {
  return (
    <div className='about'  id='about'>
      <div className="title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={viru_jpg} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    Hii I am Bca Graduate Student! my Passion day by day upscall my skills ;)
                </p>
                <p>I am Also Learning A diffrent Techs also </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"> <p>HTML & CSS </p><hr style={{width:"50%"}}/></div>
                <div className="about-skill">  <p>React JS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"> <p>JAVASCRIPT</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill">  <p>BOOTSTRAP </p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"> <p>Git & Github</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"> <p>PhP</p><hr style={{width:"55%"}}/></div>
                <div className="about-skill"> <p>TAILWIND</p><hr style={{width:"60%"}}/></div>
                         
            </div>
        </div>
      </div>
      <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Education</h1>
                    <p>BCA Bachelor of Computer </p>
  
                </div>

                <hr  />
                <div className="about-achievement">
                    <h1>Projects</h1>
                    <p>Online Votings System</p>
                    <p>Stone Paper Scissor Game</p>
                    <p>Portfolio</p>
                    <p>Spotify Clone</p>
  
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Certifications</h1>
                    <p>PHP Web Development -  DICS Institute </p>
                   <p> Front-End Development - Apna College</p>
  
                </div>
            
                {/* <div className="about-achievement"> */}
                    {/* <h1>Hobbies</h1> */}
                    {/* <p>A Cricketer </p> */}
                   {/* <p> Right Handed Batsmen & left Arm pacer</p> */}
  
                {/* </div> */}
              
              
      </div>
    </div>
  )
}

export default About

