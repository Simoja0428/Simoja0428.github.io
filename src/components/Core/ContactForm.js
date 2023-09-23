import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactFormStyles.css";

export const ContactForm = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    if (document.getElementById("nameF").value == "" || document.getElementById("emailF").value == "" || document.getElementById("messageF").value == "" || document.getElementById("messageF").value == " \n\tEmail successfully sent! ")
    {
      document.getElementById("messageF").value = "";
      document.getElementById("spam").innerHTML = "Please do not spam the form!";
    }
    else
    {
      document.getElementById("spam").innerHTML = "";
      emailjs.sendForm('service_fs3319u', 'template_kc3b6kt', form.current, 'GC5VjvWQcWdYjLBPO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      document.getElementById("nameF").value = "";
      document.getElementById("emailF").value = "";
      document.getElementById("messageF").value = " \n\tEmail successfully sent! ";
    }
  };
  return (
    <div className='masker'>
      <div className="form-container">
        <h4> Complete the contact form to send me an email! </h4>
        <div className="titleLine"></div>
        <div className="spam-warning">
              <label id="spam">  </label>
        </div>
        <div className="elements">
          <form ref={form} onSubmit={sendEmail}>
              <div className="horz">
                <label>Name:</label>
                <input type="text" name="user_name" id="nameF" />
                <label>Email:</label>
                <input type="email" name="user_email" id="emailF" />
              </div>
              <div className="center-too">
                <div className="ms"> 
                  <label>Message:</label>
                </div>
                <textarea name="message" id="messageF"/>
              </div>
              <div className="sub">
                <input type="submit" value="Send"/>
              </div>
          </form>
        </div>
      </div>
      </div>
  );
};
export default ContactForm;