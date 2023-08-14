import React, { useState } from 'react';
import "./contact_us.css"
import { MdEmail , MdPhoneEnabled ,MdOutlineLocationOn} from "react-icons/md";


export default function Contact_Us() {
  const [inputValue,setInputValues] = useState(
    {
      name:'',
      email:'',
      message:''
    }
  );

  const mailtoHref = "mailto:asm789987@gmail.com?subject=SendMail&body=Description";
  const handleInputValues = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };



  return (
    <div className='contactContainer'>
      <div className="row my-2">
        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
        <h2 className='my-4'>Contact Me</h2>
        <p className='para-size'>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center px-2">
          <MdEmail></MdEmail>
          <a href={mailtoHref}>
              asm789987@gmail.com
          </a>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center mt-3">
          <MdPhoneEnabled></MdPhoneEnabled>
          <p>+92-3494801561</p>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
        <MdOutlineLocationOn></MdOutlineLocationOn>
          <p>UET Lahore</p>
        </div>
      </div>
      <form>
      <div className="row px-5">
            <div className="col-md-12">
            <div className="form-group">
                <label for="exampleInputEmail1">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control input-Size"
                  value={inputValue.name}
                  onChange={handleInputValues}
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  required
                />
              </div>
            </div>
        </div>
        <div className="row px-5">
        <div className="col-md-12">
            <div className="form-group">
                <label for="exampleInputEmail1">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={inputValue.email}
                  onChange={handleInputValues}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required

                />
              </div>
            </div>

        </div>
          <div className="row px-5">
            <div className="col-md-12 ">
            <div className="form-group d-flex flex-column">
                <label for="exampleInputEmail1">Enter Your Message:</label>
                <textarea name="message" id="message" className="px-3" placeholder='Enter your message' required cols="10" rows="5" value={inputValue.message} onChange={handleInputValues}></textarea>
            </div>
            </div>
          </div>
          <div className="row px-5 my-3 ">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <button className="submit btn btn-primary">Submit</button>

              </div>

            </div>
          </div>
      </form>


      
    </div>
  )
}
