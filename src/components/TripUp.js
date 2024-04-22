import React from 'react';
import "./TripUpStyles.css";
import TripUpData from './TripUpData';

const Trip = () => {
  return (
    <div className='tripUp'> 
      <div className='tripcard'>
      <TripUpData 
       heading="Integrated Marketing Automation Solutions"
       text="Maximize your marketing efforts with our integrated automation solutions. Seamlessly manage your campaigns across physical and digital channels, from email to social media and direct mail, ensuring consistent and effective outreach to your target audience."
      />
      <TripUpData 
       heading="AI-Powered Brand Strategy"
       text="Gain valuable insights into your market, consumers, and competitors with our AI-driven brand analysis. Our strategic recommendations help you stay ahead of the curve, guiding the development of your brand and marketing strategies for optimal results."
      />
      <TripUpData 
       heading="Innovative Web and App Development"
       text="Elevate your online presence with our innovative website and app development services. From sleek and responsive websites to intuitive mobile apps, we leverage the latest technologies to create engaging digital experiences that captivate your audience and drive growth."
      />
      <TripUpData 
       heading="Next-Gen Workforce Management Solutions"
       text="Optimize your workforce with our next-generation management solutions. Powered by cloud-based platforms and AI-driven algorithms, our workforce management tools streamline HR processes, enabling you to build and manage high-performing teams effortlessly."
      />
      </div>
    </div>
  )
}

export default Trip;
