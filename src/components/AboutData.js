import React from 'react';
import "./AboutData.css";
import AboutTeam from './AboutTeam';
import img1 from "../asset/utkarsh.jpg";
import img2 from "../asset/ayushi.jpg";
import img3 from "../asset/sonam.jpg";
import img4 from "../asset/naman.jpg";

const AboutData = () => {
  return (
    <div>
    <div className='AboutData'>
      <h2>Our Vision</h2>
      <p>"Our vision at Augere Technologies is to revolutionize the brand building landscape, empowering businesses of all sizes to thrive in a rapidly evolving digital world. We aspire to be the catalyst for innovation and success, driving meaningful growth for our clients through cutting-edge solutions and unwavering dedication."</p>
      <h3>Our Mission : <span>Innovate. Empower. Succeed.</span></h3>
      <h1>Foundation</h1>
      <p>At Augere Technologies, our foundation is rooted in a commitment to innovation, integrity, and excellence. <br/><br/>

      Innovation is at the core of everything we do; we constantly seek out new ideas, technologies, and strategies to drive meaningful progress and deliver exceptional results for our clients.<br/><br/>

      Integrity guides our actions and decisions, ensuring that we always operate with honesty, transparency, and respect for our clients, partners, and colleagues. We uphold the highest standards of professionalism and ethics in all aspects of our work, earning the trust and confidence of those we serve. <br/><br/>

      Excellence is our ultimate goal; we strive for excellence in every project, endeavoring to surpass expectations and set new standards of quality and performance. <br/><br/>

      By staying true to these principles, we are able to build strong foundations for success, both for our clients and for our own company. <br/><br/>

      At Augere Technologies, we are dedicated to creating lasting value, making a positive impact, and empowering businesses to thrive in a dynamic and ever-changing world.</p>
      
      <div className='destinationUp'>
      <h1>Management Team</h1>

      <AboutTeam
      className="first-des2"
      heading="Utkarsh Goyal"
      heading2="Founder | CEO"
      text="Meet Utkarsh Goyal, our CEO and Founder, a visionary leader with a passion for innovation and a track record of driving business growth. Under his visionary guidance, Augere Technologies has become a pioneering force in the realm of brand building, empowering businesses to thrive in today's dynamic market landscape."
      img1={img1}
      />
      <AboutTeam 
      className="first-des2"
      heading="Naman Kashyap"
      heading2="Co-Founder | COO"
      text="Naman Kashyap, our Chief Operating Officer (COO), is a seasoned executive with a proven track record in operational excellence. With a focus on efficiency and strategic execution, Naman oversees our day-to-day operations, ensuring seamless delivery of services and driving sustainable growth for Augere Technologies."
      img1={img4}
      />
      <AboutTeam 
      className="first-des2"
      heading="Ayushi Goyal"
      heading2="CTO"
      text="Ayushi Goyal, our Chief Technology Officer (CTO), is a dynamic leader at the forefront of technological innovation. With a keen eye for emerging trends and a dedication to excellence, Ayushi drives our company's technological advancements, ensuring Augere Technologies remains at the cutting edge of industry innovation."
      img1={img2}
      />
      <AboutTeam 
      className="first-des2"
      heading="Sonam Khera"
      heading2="CMO"
      text="Sonam Khera, our Chief Marketing Officer (CMO), is a visionary strategist with a flair for creative branding and a passion for driving market success. With her expertise in consumer insights and brand storytelling, Sonam spearheads our marketing initiatives, positioning Augere Technologies as a leader in the industry."
      img1={img3}
      />
    </div>
    </div>
    </div>
  )
}

export default AboutData
