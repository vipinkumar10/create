

import React, { Component } from 'react';
import './Footer.css';


function Footer() {
    return (
        <div >

            <footer className="footer1 mt-5 ">

                <div className="container bottom_border  ">
                    <div className="row ">
                        <div className=" col-sm-4 col-md col-sm-4  col-12 col dd">
                            <h5 className="headin5_amrc col_white_amrc pt2" >About Photography</h5>

                            <ul className="footer_ul_amrc ss" style={{fontStyle:'italic'}}>
                                <li>Food Photography</li>
                                <li>Indoor Photography</li>
                                <li>Candid Photography</li>
                                <li>Sports Photography</li>
                                <li>Drone photography</li>
                                <li>Event Photography</li>
                            </ul>


                        </div>


                        <div className=" col-sm-4 col-md  col-6 col dd">
                            <h5 className="headin5_amrc col_white_amrc pt2">My seophahra</h5>
                            <ul className="footer_ul_amrc" style={{fontStyle:'italic'}}>
                                <li>My account</li>
                                <li>order status</li>
                                <li>Logo Design</li>
                                <li>Beauty insider</li>
                                <li>Reward bazar</li>
                                <li>Loves</li>
                            </ul>

                        </div>


                        <div className=" col-sm-4 col-md  col-6 col dd" >
                            <h5 className="headin5_amrc col_white_amrc pt2" >Help & FAQS</h5>

                            <ul className="footer_ul_amrc" style={{fontStyle:'italic'}}>
                                
                                <li>Return & exchange</li>
                                <li>Online ordering</li>
                                <li> Sketching</li>
                                <li>Contact</li>
                                <li>shipping</li>
                                <li>billing</li>
                                
                                
                                
                            </ul>

                        </div>


                        <div className=" col-sm-4 col-md  col-12 col dd">
                            <h5 className="headin5_amrc col_white_amrc pt2">Ways to Shop</h5>


                            <ul className="footer_ul_amrc" style={{fontStyle:'italic'}}>
                                <li>My account</li>
                                <li>order status</li>
                                <li>Logo Design</li>
                                <li>Beauty insider</li>
                                <li>Reward bazar</li>
                                <li>Loves</li>
                            </ul>

                        </div>
                    </div>
                </div>




                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="email" placeholder="enter your email" aria-label="enter your email" />

                            </form>

                        </div>
                    

                    <div className="col-md-8">
                        <p className="text-center" style={{fontStyle:'italic'}}>Copyright @2021 | Designed With by <a href="#">Your Company Name</a></p>

                       
                    </div>
                </div>
                </div>
                  
                
                

            </footer>


        </div >

    )
}
export default Footer