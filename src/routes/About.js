import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import AboutData from '../components/AboutData';
import "../components/AboutData.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg='https://images.unsplash.com/photo-1633588189628-2be58b5ec125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
        title='About Us'
        text=' Your visionary partner in crafting compelling brand identities and driving business growth through innovation and expertise.'
        url='/about'
      />
      <AboutData/>  
      <Footer/>
    </div>
  )
}

export default About
