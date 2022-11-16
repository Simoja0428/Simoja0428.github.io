import "./FooterStyles.css";
import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>2001 Alford Park Dr. Kenosha, WI. 53143</p>
                    </div>
                </div>
                <div className = "phone">
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem"}} /> 708-267-3342</h4>
                </div>
                <div className = "mail">
                    <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem"}} /> <a href="mailto:jsimonek@carthage.edu" target="_blank">jsimonek@carthage.edu</a></h4>
                </div>
            </div>
            <div className="right">
                <h4> 2022 Carthage College Senior Thesis </h4>
                <p>
                    The following website was created and
                    developed by Jacob Simonek for his 
                    2022 Carthage Senior Thesis. The ability to use
                    the site is open to all users to learn
                    programming skills, however, I remind you this
                    site is being completed for a Senior Thesis and
                    is not a professional source.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;