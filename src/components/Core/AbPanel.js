import "./AbPanelStyles.css";
import React from 'react';
import Jacob from "../assets/jacob bio.jpg";
import Resume from "../assets/Resume.pdf";

const AbPanel = () => {
  return (
    <div className="abcon">
        <div className ="horz-form">
            <div class="projectTitle">
                <h1> Explorations of Web Development </h1>
            </div>
            <div class = "jacobPhoto">
                <img className="jacob-img"
                src={Jacob} alt="Jacob" />
            </div>
        </div>
        <div className="resume">
            <a href = {Resume} target = "_blank">Download Resume</a>
        </div>
        <div className="abcontent">
            <p> 
                Welcome to CodeMine! CodeMine is the site where you can get a crash 
                course in the basic programming skills you need for the language 
                you desire. We offer a number of modules for a variety of
                different languages to suit your needs. The following project 
                was developed by Jacob Simonek as a part of his 2022 Senior 
                Thesis to recieve his Bachelor of Arts from Carthage College.
                Originally set up in Django, due to other projects, 
                it became essential to move Code Mine over to a 
                different webframework. Luckily, React.js is a fantastic
                webframework that has allowed the creation of this site. React
                allows developers to break their webpages down into components.
                The actual webpage itself is more of a big container, while the
                components are programmed seperately and then added to the big
                webpage container. This methodology for creating components in React
                is very Object-Oriented focused and allows for easy reusability
                across the various webpages. The goal of CodeMine was to provide a resource for users to learn coding
                skills from various programming languages in a interactive way
                on one website. The timeline from the inception of this site to 
                its deployment was 3 months. I am continuing to add on to CodeMine
                in an effort to share programming skills with people of all backgrounds
                who want to learn something new!
            </p>
        </div>
    </div>
  );
}

export default AbPanel;