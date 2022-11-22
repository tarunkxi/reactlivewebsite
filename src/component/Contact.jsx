import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState( {
    fullname:'',
    email: '',
    phone: '',
    message: ''
  });
  
  const inputEvent = (event) => {
    const {name, value} = event.target;
    setData( (preVal) => {
      return{
        ...preVal,
        [name]: value,
        
      }

    })

  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name ${data.fullname}, email ${data.email}, phone ${data.phone} and message ${data.message}`);
  }

  return (
    <>
      <div className='container'>
        <div className='row my-4'>
          <div className='col-12'>
            <h1 className='text-center'>Contact Us</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-5 mx-auto'>
          <form onSubmit={formSubmit}>
          <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" name='fullname' value={data.fullname} onChange={inputEvent} className="form-control" placeholder="Enter Your Name" />
          </div>
          <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="email" name='email' value={data.email} onChange={inputEvent} className="form-control" placeholder="Enter Your Email" />
          </div>
          <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" name='phone' value={data.phone} onChange={inputEvent} className="form-control" placeholder="Enter Your Phone" />
          </div>
          <div className="mb-3">
          <label>Message</label>
          <textarea name='message' value={data.message} onChange={inputEvent} className="form-control" rows="3" placeholder='Your message...'></textarea>
          </div>
          <div className="mb-3">
          <button type="submit" className="btn btn-outline-primary btn-lg">Primary</button>
          </div>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
