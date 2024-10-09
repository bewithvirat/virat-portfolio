import React, { useState } from 'react'; 
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = useState(""); 
    const [showPopup, setShowPopup] = useState(false); 
    const [isError, setIsError] = useState(false);

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");

        if (!isValidEmail(email)) {
            setResult("Please enter a valid email address.");
            setIsError(true);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000); 
            return; 
        }

        formData.append("access_key", "13d9294f-7753-4734-9c4e-c2f7759d2dec");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setIsError(false);
            setShowPopup(true);
            event.target.reset();
        } else {
            setResult(data.message);
            setIsError(true);
            setShowPopup(true);
        }

        setTimeout(() => setShowPopup(false), 2000);
    };

    // Inline styles for popup
    const popupStyle = {
        position: 'fixed',
        top: '30px',
        left: '52%',
        transform: 'translateX(-50%)',
        padding: '10px 10px',
        borderRadius: '5px',
        color: 'white',
        zIndex: 1000,
        transition: 'opacity 0.3s ease',
        width: '65%',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        opacity: showPopup ? 1 : 0,
        pointerEvents: showPopup ? 'auto' : 'none',
    };

    const successPopupStyle = {
        ...popupStyle,
        backgroundColor: '#28a745', // Green color for success
    };

    const errorPopupStyle = {
        ...popupStyle,
        backgroundColor: '#dc3545', // Red color for error
        width: '60%',
       
    };

    return (
        <div className="con" id='contact'>
            <div className="cont-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="section">
                <div className="section-left">
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message.</p>
                    <div className="cont-details">
                        <div className="cont-detail">
                            <img src={mail_icon} alt="" /><p>viratsharma1909@gmail.com</p>
                        </div>
                        <div className="cont-detail">
                            <img src={call_icon} alt="" /><p>9711754925</p>
                        </div>
                        <div className="cont-detail">
                            <img src={location_icon} alt="" /><p>New Delhi</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='con-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your Name' name="name" required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your Email' name="email" required />
                    <label htmlFor="msg">Write your Message here</label>
                    <textarea name="message" id="msg" rows={8} placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
            {showPopup && (
                <div style={isError ? errorPopupStyle : successPopupStyle}>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;
