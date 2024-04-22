import React from 'react';
import './DestinationStyles.css';
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Why Choose Us?</h1>
      <p> BRAND EMPOWERMENT | GROWTH CATALYST</p>

      <DestinationData 
      className="first-des"
      heading="Innovative Technology Solutions"
      text=" We pride ourselves on offering cutting-edge technology solutions that go beyond conventional approaches. Our commitment to innovation ensures that your business stays ahead of the curve, delivering results that surpass expectations"
      img1="https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <DestinationData 
      className="first-des"
      heading="Customized Approach to Client Needs"
      text="Unlike one-size-fits-all solutions, we tailor our services to meet the unique needs of each client. Our personalized approach ensures that you receive solutions that are specifically designed to address your business challenges and goals."
      img1="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <DestinationData 
      className="first-des"
      heading="Dedicated Support and Partnership"
      text="We don't just deliver solutions; we forge long-term partnerships with our clients. Our dedicated team provides ongoing support and guidance, ensuring that you have the resources and assistance you need to succeed both now and in the future"
      img1="https://images.unsplash.com/photo-1534777410147-084a460870fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxkYXRhfGVufDB8fDB8fHww"
      />
      <DestinationData 
      className="first-des"
      heading="Proven Track Record"
      text="With a proven track record of success, we have helped numerous clients achieve their business objectives and exceed their expectations. Our portfolio of successful projects and satisfied clients speaks volumes about the quality and effectiveness of our services."
      img1="https://plus.unsplash.com/premium_photo-1676673222111-642b0ce431ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyYXBofGVufDB8fDB8fHww"
      />
    </div>
  )
}

export default Destination;
