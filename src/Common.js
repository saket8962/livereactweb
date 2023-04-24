import React from 'react'
import { Link } from 'react-router-dom';
function Common(props) {
  return (
    <div id="header">
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className='row d-flex align-items-center'>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 fade-right text">
              <h1 className="text-left">
                {props.name}
                <strong className='text-primary'> {props.brand}</strong> 
              </h1>
              <h2 className="my-3">
                We are the best in industry
              </h2>
              <Link to={props.visit} className='btn btn-outline-secondary'> {props.btname}</Link>

            </div>
            <div className="col-md-6 order-1 order-lg-2">
              <img src={props.imgsrc } alt="imge" className="w-100 img-fluid up-and-down"/>
            </div>
          </div>
            </div>

        </div>

      </div>

    </div>
  )
}

export default Common;