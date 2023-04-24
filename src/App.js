
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Innerpages/Home';
import About from './Innerpages/About';
import Services from './Innerpages/Services';
import Contact from './Innerpages/Contact';

function App() {
  return (
    
      <div className="App" bg="dark">
        {/* <Home />
        <About />
        <Services />
        <Contact /> */}
        <div>
        <BrowserRouter> 
        <Navbar />
         
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="About" element={<About />} />
              <Route exact path="Contact" element={<Contact />} />
              <Route exact path="Services" element={<Services />} />
              <Route path="*" element={<Navigate to={"<Home />"}/>}/>
            </Routes>
          </BrowserRouter>
          
        </div>

      </div>
    
  );
}

export default App;
