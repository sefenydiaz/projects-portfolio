// function Contact() {
//   return (
//     <div>
//       <h1>Contact</h1>
//     </div>
//   )
// }
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

  
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o348wv5', 'template_endoh32', form.current, 'Noy0bsZ5WdSzWku0ke2ju')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  // const [formStatus, setFormStatus] = React.useState('Send')
  // const onSubmit = (event) => {
  //   event.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = event.target.elements
  //   let contactForm = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   } 
  //   console.log(contactForm)
  // }
  return (
    <div className="container mt-5">
    <h2 className="mb-3">Contact Me</h2>
    {/* <form onSubmit={onSubmit}> */}
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" name='from_name' id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" name='from_email' id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" name='message' id="message" required> </textarea>
      </div >
    
      <button className="btn btn-danger"  type="submit">
     
      </button>
      
    </form>
  </div>
)
}
export default Contact;
 