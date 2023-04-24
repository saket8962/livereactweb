import React from 'react'
import Common from '../Common';
import web from '../img/1.webp';

function About() {
  return (
    <div>
      <Common 
        name= " welcome tp about page"
        imgsrc = {web} alt="about-img"
        visit = "/service"
        btname = "Get Started"
        brand ="let get started"
      />
    </div>
  )
}

export default About;
