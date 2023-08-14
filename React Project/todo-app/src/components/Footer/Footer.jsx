import React from "react";
import "./css/style.css";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer-14398 ">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <a href="/" className="footer-site-logo">
                TaskTracker
              </a>
              <p>
                TaskTracker is a user-friendly and efficient to-do list app
                designed to help you stay organized and manage your tasks with
                ease. Whether you're a professional looking to streamline your
                work tasks or a busy individual juggling personal
                responsibilities, TaskTracker is your ultimate companion for
                staying on top of your commitments.{" "}
              </p>
            </div>
            {/* <div className="col-md-2 ml-auto">
              <h3>Shop</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="/">Sell online</a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Examples</a>
                </li>
                <li>
                  <a href="/">Website editors</a>
                </li>
                <li>
                  <a href="/">Online retail</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 ml-auto">
              <h3>Press</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="/">Events</a>
                </li>
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">Awards</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
                <li>
                  <a href="/">Online retail</a>
                </li>
              </ul>
            </div> */}
            <div className="col-md-2 ml-auto">
              <h3>About</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Career</a>
                </li>
                <li>
                  <a href="/">Contacts</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12 pb-4">
              <div className="line"></div>
            </div>
            <div className="col-md-6 text-md-left">
              <ul className="list-unstyled link-menu nav-left">
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/">Code of Conduct</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="list-unstyled social nav-right">
                <li>
                  <a href="/">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaPinterest />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
