import React from 'react';
import "./galleries.css";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import pw from "../assets/pw.jpg";
import pw1 from "../assets/pw1.jpg";
import pw3 from "../assets/pw3.jpg";
import pw4 from "../assets/pw4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import t4 from "../assets/t4.jpg";

export default function Galleries() {
	return (
    <div className=" container row">
      <div class="col-2">
        <ul>
          <div className="h2link ">
            <h5>PreWedding Photography</h5>
            <h5>Wild Animal Photography</h5>
            <h5>Food Photography</h5>
            <h5>Travel Photography</h5>
            <h5> Business Photography</h5>
          </div>
        </ul>
      </div>
      <div class="col-10">
        <div>
          <h1 className="h1Galleries">Our Best Galleries</h1>
        </div>
        <div className="container " id="pet">
          <div>
            <h2 className="h2Galleries">Pet Animal Photography</h2>
          </div>
         
        </div>
        <div className="container ">
          <div>
            <h2 className="h2pre mt-3">PreWedding Photography</h2>
          </div>
        </div>
        <div className="container ">
          <div>
            <h2 className="h2pre ">Wild Animal Photography</h2>
          </div>
        </div>
        <div className="container ">
          <div>
            <h2 className="h2pre"> Food Photography</h2>
          </div>
        </div>
        <div className="container ">
          <div>
            <h2 className="h2pre">Travel Photography</h2>
          </div>
        </div>
        <div className="container ">
          <div>
            <h2 className="h2pre">Business Photography</h2>
          </div>
        </div>
      </div>
    </div>
  );
}