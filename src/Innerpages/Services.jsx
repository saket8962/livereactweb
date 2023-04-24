import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

function Services() {
  return (
    <div>
      <div className='my-auto'>
        <h1>Our Services</h1>

      </div>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className='row gy-4'>
             
                {
                  Sdata.map((val, ind) => {
                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title} notes={val.notes}/>


                  })
                }
              
            </div>
          </div>
        </div>
      </div>
    </div>
    


  )
}

export default Services;