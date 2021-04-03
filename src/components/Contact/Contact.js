import React from 'react';
// import emailjs from 'emailjs-com';
import './Contact.css';
import * as emailjs from 'emailjs-com'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Contact = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c9a3rqg', 'template_7zm9i28', e.target, 'user_7GyyUHla5NbuBMxzW3Aip')
      .then((result) => {
          toast("Thank you for sending an email! I will get back to you within 24 hours");
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
      e.target.reset()
  }


  return(
    <>
      <div id="contact" className="contact-container" >
        <div className="contact-header">
          <h1>REACH OUT & LET'S CHAT</h1>
          <p className="contact-p">You can also reach me through LinkedIn</p>
        </div>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name..." name="name"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address..." name="email"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="submit form-control" placeholder="Subject..." name="subject"/>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="Submit" className="submitBtn btn btn-info" value="Send Message"/>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;


