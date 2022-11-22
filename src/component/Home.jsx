import React from 'react';
import Common from './Common';
import headrImg from '../images/image-3.png';

const Home = () => {
  return (
    <>
    <div className='container'>
        <div className='row my-5 d-flex justify-content-center align-items-center'>
        <Common
      title="Grow Your Business"
      subtitle="Our Web Develoment Experts"
      btnname="Get Started"
      link="/service"
      imgsrc={headrImg}
       />
      </div>
      </div> 

      
    </>
  )
}

export default Home;
