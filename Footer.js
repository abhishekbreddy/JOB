import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Address</h4>
            <ui className="list-unstyled">
              <li>342</li>
              <li>IIIT South venue</li>
              <li>Gachibowli</li>
              <li>Hyderabad</li>
            
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Follow Us</h4>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Helpful Links</h4>
            <ui className="list-unstyled">
              <li>Services</li>
              <li>Supports</li>
              <li>Contact Us</li>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Soal | All rights reserved |
            Terms Of Service | Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
