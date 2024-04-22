import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import TripUp from '../components/TripUp';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Review from '../components/Review';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName='hero'
        heroImg='https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
        title='Building Brands'
        text= "Augere Technologies is your strategic partner in brand building for businesses. With creativity and innovation, we craft compelling brand identities that resonate and drive growth, empowering you to succeed in today's competitive market."
        buttonText='Contact Us'
        url='/'
        btnClass='show'
      />
      <TripUp/>
      <Destination/>
      <Trip/>
      <Review/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home;
