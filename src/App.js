import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/service' element={<Service /> } />
        <Route exact path='/contact' element={<Contact />} />
        <Route path="*" element={<Home /> } />
      </Routes>
    </BrowserRouter>
    <Footer />

    </>
  )
}

export default App;
