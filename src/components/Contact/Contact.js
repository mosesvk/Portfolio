import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7zm9i28', e.target, 'user_7GyyUHla5NbuBMxzW3Aip')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
      e.target.reset()
  }

  return(
    <>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email"/>
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="Submit" className="btn btn-info" value="Send Message"/>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;


