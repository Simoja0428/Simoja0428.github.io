import "./FooterStyles.css";
import React from 'react';
import {FaHome, FaPhone, FaMailBulk} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>8545 22nd Ave, Kenosha, WI. 53143</p>
                    </div>
                </div>
                <div className = "phone">
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem"}} /> 708-267-3342</h4>
                </div>
                <div className = "mail">
                    <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem"}} /> <a href="mailto: jacobsimonek19@gmail.com" target="_blank">jacobsimonek19@gmail.com</a></h4>
                </div>
            </div>
            <div className="right">
                <h4> Educational Passion Project </h4>
                <p>
                    The following website was created and
                    developed by Jacob Simonek for his 
                    2023 Carthage Senior Thesis. Since then,
                    the website has been continually maintained
                    in order to improve on the quality of the website
                    and expand its content. The ability to use
                    the website is open to all users to learn
                    programming skills.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer;