import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
     <div className='container'>
        <div className='row my-5 d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            <NavLink to={props.link} className='btn btn-outline-primary btn-lg mt-4'>{props.btnname}</NavLink>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid' src={props.imgsrc} alt="Headr Img" />
          </div>
        </div>
      </div> 
    </>
  )
}

export default Common
