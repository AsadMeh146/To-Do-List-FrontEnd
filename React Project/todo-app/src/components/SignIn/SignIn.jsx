import React from "react";
import "./sign-in.css";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Link ,  useNavigate } from "react-router-dom";

export default function SignIn({ onLogin }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // const isUserLogin = true;
  const handleLogin = (event) => {
    event.preventDefault();
    if(inputValue.email === "asm789987@gmail.com" && inputValue.password === "Asaddar123321@")
    {
      onLogin();
      navigate('/home');
    }
    else
    {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const [inputValue,setInputValues] = useState(
    {
      email:'',
      password:''

    }
  );

  const handleInputValues = (event) => {
    const { name, value } = event.target;
    console.log("name" + name)
    console.log("value " + value)
    setInputValues((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container signInContainer">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center py-5">
          <h2>Sign In</h2>
        </div>
      </div>
      <form>
        <div className="row">
          <div className="col-md-12">
            <div className="container d-flex flex-column px-4">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
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
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={inputValue.password}
                  onChange={handleInputValues}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="container d-flex flex-column justify-content-center align-items-center m-2 my-4">
                <button type="submit" className="btn btn-outline-dark px-5 py-2" onClick={handleLogin}>
                  Sign In
                </button>
                <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header>
          <Modal.Title>Login Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have entered invalid email address or password. Try Again.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

                <p className="my-2">OR</p>
                <GoogleButton
                  onClick={() => {
                    console.log("Google button clicked");
                  }}
                />

              </div>
              <div className="divider"></div>
              <div className="container d-flex justify-content-center align-items-center my-5">
                <p className="">
                  Not a user?
                  <Link to="/signUp" className="mx-2">
                    Register Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
