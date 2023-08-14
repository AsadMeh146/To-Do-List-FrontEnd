import React from 'react'
import "./sign-up.css";
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [showModal, setShowModal] = useState(false);


  const handleClose = () => {
    setShowModal(false);
  };


  const [inputValue,setInputValues] = useState(
    {
      name:'',
      email:'',
      cnic:'',
      number:'',
      password:'',
      confirmPassword:'',
    }
  );

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    cnic: '',
    number: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let newErrors = {};

    if (!inputValue.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(inputValue.name)) {
      newErrors.name= 'Full Name should contain only alphabets and spaces';
    }

    if (!inputValue.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValue.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!inputValue.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (inputValue.password.length < 8) {
      newErrors.password = 'Password should have at least 8 characters';
    } else if (!/[a-z]/.test(inputValue.password) || !/[A-Z]/.test(inputValue.password) || !/[0-9]/.test(inputValue.password)) {
      newErrors.password = 'Password should contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (!inputValue.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (inputValue.confirmPassword !== inputValue.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!inputValue.number.trim()) {
      newErrors.number = 'Contact Number is required';
    } else if (!/^\d{11}$/.test(inputValue.number)) {
      newErrors.number = 'Contact Number should be in correct format (11 digits)';
    }
  
    if (!inputValue.cnic.trim()) {
      newErrors.cnic = 'CNIC is required';
    } else if (!/^\d{5}-\d{7}-\d{1}$/.test(inputValue.cnic)) {
      newErrors.cnic = 'CNIC should be in correct format (xxxxx-xxxxxxx-x)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowModal(true);
    }
  };

  const handleInputValues = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };


  return (
    <div className='container signUpContainer'>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center py-5">
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit}> 
          <div className="row myRow">
            <div className="col-md-6">
            <div className="form-group">
                <label for="exampleInputEmail1">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={inputValue.name}
                  onChange={handleInputValues}
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
                <label for="exampleInputEmail1">Email Address:</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  value={inputValue.email}
                  onChange={handleInputValues}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"

                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
          </div>
          <div className="row myRow">
            <div className="col-md-6">
            <div className="form-group">
                <label for="exampleInputEmail1">CNIC:</label>
                <input
                  type="text"
                  name="cnic"
                  className="form-control"
                  value={inputValue.cnic}
                  onChange={handleInputValues}
                  aria-describedby="cnicHelp"
                  placeholder="Enter CNIC"

                />
                {errors.cnic && <p className="error">{errors.cnic}</p>}
              </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
                <label for="exampleInputEmail1">Contact No. :</label>
                <input
                  type="tel"
                  name="number"
                  className="form-control"
                  value={inputValue.number}
                  onChange={handleInputValues}
                  aria-describedby="numberHelp"
                  placeholder="Enter contact no."
 
                />
                {errors.number && <p className="error">{errors.number}</p>}
              </div>
            </div>
          </div>
          <div className="row myRow">
            <div className="col-md-6">
            <div className="form-group">
                <label for="exampleInputEmail1">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={inputValue.password}
                  onChange={handleInputValues}
                  aria-describedby="passwordHelp"
                  placeholder="Enter Password"

                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
                <label for="exampleInputEmail1">Confirm Your Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={inputValue.confirmPassword}
                  onChange={handleInputValues}
                  aria-describedby="confirmPasswordHelp"
                  placeholder="Confirm Your Password"

                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>
          <div className="container d-flex flex-column justify-content-center align-items-center m-2 my-4">
                <button type="submit" className="btn btn-outline-dark px-5 py-2">
                  Sign Up
                </button>
                <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header>
          <Modal.Title>Account Created  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Signed Up Successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
          <div className="divider ml-5"></div>
              <div className="container d-flex justify-content-center align-items-center my-5">
                <p className="">
                  Already a user?
                  <Link to="/" className="mx-1">
                    Sign In.
                  </Link>
                </p>
              </div>
        </form>
      </div>
    </div>
  )
}
