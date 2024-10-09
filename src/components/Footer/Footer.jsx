import React, { useState } from 'react';
import './Footer.css';
import logopng from '../../assets/logopng.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setSubscribed(true);
      setEmail('');
      setError(false);
      setShake(false);
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000);
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="top-left">
          <img src={logopng} alt="" />
          <p>I'm a Frontend Developer Based in New Delhi :)</p>
        </div>
        <div className="footer-top-ryt">
          <div className="footer-email-container">
            {error && <p className="error-message">Invalid email! Please enter a valid email.</p>}
            <div className={`footer-email ${error ? 'error' : ''} ${shake ? 'shake' : ''}`}>
              <img src={user_icon} alt="" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Virat Sharma. All rights reserved...
        </p>
        <div className="footer-bottom-right">
          <p>Term of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>

      {subscribed && (
        <div className="popup">
          <div className="popup-content">
            <p>Thank you for subscribing!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
