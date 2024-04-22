import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import DestinationUp from '../components/DestinationUp';


const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg='https://images.unsplash.com/photo-1651151798244-e2641c1af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80'
        title='Our Services'
        text="Elevate your brand with our comprehensive suite of innovative solutions, driving growth and success in today's competitive market."
        url='/services'
      />
      <DestinationUp/>
      <Footer/>
    </div>
  )
}

export default Services
