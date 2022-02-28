

import React, { Component } from 'react';
import './Footer.css';


function Footer() {
    return (
      <div>
        <div style={{ background: "#13274F" }} className="mt-5 pt-3">
          <div className="container-fluid myfooter ">
            <div className="row" style={{ justifyContent: "left" }}>
              <div className="col-md-3 col-sm-6 text-light">
                <h4>Services</h4>
                <ul
                  className="list-unstyled"
                  style={{ justifyContent: "left" }}
                >
                  <li href="/albums">
                    <b>PreWedding Shoot</b>
                  </li>
                  <li>
                    <b>Abstract Photography</b>
                  </li>
                  <li>
                    <b>Adventure Photography</b>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 text-light">
                <h4>Contacts deatils</h4>
                <ul className="list-unstyled">
                  <li>
                    <b>contact us</b>
                  </li>
                  <li>
                    <b>address</b>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-6 text-light">
                <h4 className="h4">Social media</h4>
                <ul className="list-unstyled">
                  <li href="/albums">
                    <a
                      class="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <b>Facebook</b>
                    <a
                      class="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <b>twitter</b>
                  </li>
                  <li>
                    <a
                      class="btn btn-outline-light btn-floating m-1"
                      href="#!"
                      role="button"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                    <b>instagram</b>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 text-light">
                <h4>About Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <b>Our Story</b>
                  </li>
                  <li>
                    <b>Terms of Use</b>
                  </li>
                  <li>
                    <b>Privacy Policy</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row-copy border-top">
              <div
                style={{ backgroundcolor: (0, 0, 0, 0.2) }}
                class="text-center p-3 text-light"
              >
                ©️ 2021 Copyright:
                <a class="text-light" href="./Home">
                  <b>photography.com</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footer