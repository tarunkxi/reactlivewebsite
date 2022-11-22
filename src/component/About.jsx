import React from 'react';
import Common from './Common';
import aboutImg from '../images/devoted-1.png';

const About = () => {
  return (
    <>
    <Common
      title="Welcome Our Website"
      subtitle="Our Web Develoment Experts"
      btnname="Contact Us"
      link="/contact"
      imgsrc={aboutImg}
       />
      {/* <div className='container'>
        <div className='row my-5 d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <h1>Welcome Our Website</h1>
            <h4>Our Web Develoment Experts</h4>
            <NavLink to="/contact" className='btn btn-outline-primary btn-lg mt-4'>Contact Us</NavLink>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid' src={aboutImg} alt="Headr Img" />
          </div>
        </div>
      </div> */}
    </>
  )
}

export default About;
