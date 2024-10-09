import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data.js'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from   '../../assets/arrow_icon.svg'


const Mywork = () => {
  return (
     <div className="mywork"  id='work'>
            <div className="mywork-title">
                <h1>My Latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-contain">
            {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt="" />
                      
                    })} 
            </div>
            <div className="mywork-show">
                <p>show more</p>
                <img src={arrow_icon} alt="" />
            </div>
     </div>
    
  )
}

export default Mywork
