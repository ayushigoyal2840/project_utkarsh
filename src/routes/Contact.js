import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg='https://images.unsplash.com/photo-1632808575219-68d77ee2dadf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80'
        title='Contact Us'
        url='/contact'
      />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact;
