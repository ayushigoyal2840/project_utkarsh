import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactFormStyles.css';

const ContactForm = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z1orsbe', 'template_naghhik', form.current, 'xkKjIHQSqXqWg4Ftk')
        .then((result) => {
            console.log(result.text);
            alert("We will contact you back soon!")
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder='Name' type='text' name='user_name' required />
        <input placeholder='Email'type='email' name='user_email' required/>
        <input placeholder='Contact No.' type='tel' name='contactno' required />  
        <input placeholder='Subject' type='text' name='subject' required/>
        <textarea placeholder='Message' rows='4' name='message' required></textarea>
        <button>Submit</button>
      </form>
      </div>
    );
  // return (
  //   <div className='form-container'>
  //     <h1>Send a message to us!</h1>
  //     <form action="https://formspree.io/f/xayzzrny" method="POST">
  //       <input placeholder='Name' type='text' name='Name' required />
  //       <input placeholder='Email'type='email' name='Email' required/>
  //       <input placeholder='Contact No.' type='tel' name='Contact No.' required />  
  //       <input placeholder='Subject' type='text' name='Subject' required/>
  //       <textarea placeholder='Message' rows='4' name='Message' required></textarea>
  //       <button>Submit</button>
  //     </form>
  //   </div>
  // )
}

export default ContactForm
