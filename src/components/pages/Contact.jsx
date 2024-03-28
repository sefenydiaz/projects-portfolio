
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

  
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o348wv5', 'template_endoh32', form.current, 'xUdregTPH2U4uOMJ6')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  }; 

  return (
    <div className="container mt-5" style={{ height: '100vh'}}>
    <h1 className="text" >Contact Me</h1>
  
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" name="from_name" id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" name="from_email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" rows="5" name="message" id="message" required> </textarea>
      </div >
    
      <button className="submitBtn"  type="submit" value='Send'>
     Submit
      </button>
      
    </form>
  </div>
)
}
export default Contact;
 