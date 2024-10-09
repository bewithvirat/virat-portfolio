import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from   '../../assets/services_data'
import arrow_icon from   '../../assets/arrow_icon.svg'


const Services = () => {
  return (
   
  <div className="Services"  id='services'>
            <div className="Service-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />

            </div>
            <div className="Services-contain">
                {Services_Data.map((service,index)=>{
                    return <div  key={index} className='Services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                       <p>{service.s_desc}</p> 
                       <div className="Services-read">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                       </div>

                    </div>

                })}
            </div>

  </div>
       
    
  )
}

export default Services
