import React from 'react';
import { NavLink } from 'react-router-dom';
import Sdata from './Sdata';

const Card = () => {
  return (
    <>
    {
        Sdata.map( (val, ind) => {
            return(
            <div className='col-md-4'>
            <div className="card">
            <img src={val.imgsrc} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">{val.subtitle}</p>
            <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
            </div>
            </div>
            </div>
    )
        })
    }
    

    </>
  )
}

export default Card
