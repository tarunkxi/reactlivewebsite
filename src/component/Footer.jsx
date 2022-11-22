import React from 'react'

const Footer = () => {
const year = new Date().getFullYear();
  return (
    <>
     <footer>
     <div className='small text-center py-3'>
     © {year} all rights reserved.
     </div>
     </footer> 
    </>
  )
}

export default Footer
