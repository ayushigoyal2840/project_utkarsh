import React from 'react';
import "./TripStyles.css";
import TripData from './TripData';

const Trip = () => {
  return (
    <div className='trip'> 
      <h1>What makes us different from others!</h1>
      <p>We envision a future without cyber risk.</p>
      <div className='tripcard'>
      <TripData 
       image="https://images.unsplash.com/photo-1607270788732-55d2cdb8f52a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
       heading="Holistic Approach to Brand Building"
       text="We take a holistic approach to brand building, going beyond traditional marketing tactics to create comprehensive solutions that encompass both physical and digital realms. Our integrated strategies ensure that every aspect of your brand is optimized for maximum impact and visibility."
      />
      <TripData 
       image="https://images.unsplash.com/photo-1530546171585-cc042ea5d7ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
       heading="Emphasis on Creativity and Innovation"
       text="At our core, we are innovators and creatives, constantly pushing boundaries to deliver unique and impactful solutions. From innovative marketing campaigns to cutting-edge technology implementations, we strive to set new standards of excellence and creativity in everything we do."
      />
      <TripData 
       image="https://images.unsplash.com/photo-1678057669251-804f9b10a5d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxzZW5zb3JzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
       heading="Client-Centric Philosophy"
       text="Our clients are at the heart of everything we do. We prioritize your needs, goals, and aspirations, working collaboratively to develop solutions that are tailored to your unique challenges and opportunities. With a focus on building long-term relationships, we are committed to your success every step of the way."
      />
      </div>
    </div>
  )
}

export default Trip;
