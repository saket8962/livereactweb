import React, { useState } from 'react'

function Contact() {
  const [data, setDAta] = useState({
    Fullname: "",
    // phone: "",
    password: "",
    email: "",
    msg: "",

  });
  const InputEvent = (event) =>{
    const { name, value} = event.target;

      setDAta((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });

  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.FullName} and this is my emailid ${data.email} and i want say"${data.msg}" `)

  };
  return (
    <div>
      <h2>
        Welcome to contact page
      </h2>
      <div className='contaier'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3 text-start">
                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='FullName' value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
              </div>
              <div className="mb-3 text-start">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" name='password' value={data.pass} onChange={InputEvent} placeholder="Enter your password" />
              </div>
              <div className="mb-3 text-start">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3 text-start">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={InputEvent} rows="3"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Contact;
