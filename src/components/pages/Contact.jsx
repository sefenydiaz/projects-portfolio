// function Contact() {
//   return (
//     <div>
//       <h1>Contact</h1>
//     </div>
//   )
// }
import React from 'react';

  
const Form = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (event) => {
    event.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = event.target.elements
    let contactForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    } 
    console.log(contactForm)
  }
  return (
    <div className="container mt-5">
    <h2 className="mb-3">Contact Me</h2>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" required />
      </div >
    
      <button className="btn btn-danger"  type="submit">
        {formStatus}
      </button>
      
    </form>
  </div>
)
}
export default Form
 