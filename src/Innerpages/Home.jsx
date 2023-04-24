import React from 'react'
import Common from '../Common';
import web from '../img/home.webp';

function Home() {
  return (
 <div> 
  <Common
  name= " Grow your business with "
  imgsrc = {web}
  visit = "/service"
  btname = "Get Started" alt="home-image"
  brand ="SK Design"

  />
  </div>
  )
}

export default Home;