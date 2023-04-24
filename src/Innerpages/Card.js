import React from 'react'
import { Link } from 'react-router-dom';


function Card(props) {
    return (
       
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card">
                   
                    <img src={props.imgsrc} className="card-img-top w-100 h-100" alt="..." />
                
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.notes}</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        



    )
}

export default Card;
