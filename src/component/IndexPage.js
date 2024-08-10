import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './IndexPagesCss.css';
import OwlCarousel from 'react-owl-carousel';

function IndexPage() {
    const [mensData, SetMensdata] = useState([]);
    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        navText: ["Prev", "Next"],
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000:{
                items:3,
            }
        },
    };

    const getProductList = async () => {
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(function (response) {
                // handle success
                SetMensdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getProductList()
    }, [])

    return (
        <div>
            {/* ***** Preloader Start ***** --> */}
            {/* <div id="preloader">
                <div class="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            {/* ***** Preloader End ***** --> */}

            {/* <!-- ***** Main Banner Area Start ***** --> */}
            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>Discover the new you.</h4>
                                        <span>More Than Fashion</span>
                                        <div class="main-border-button">
                                            <a href="#">Purchase Now!</a>
                                        </div>
                                    </div>
                                    <img src={require('./images/left-banner-image.jpg')} class="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-content">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Women</h4>
                                                    <span>Best Clothes For Women</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require('./images/baner-right-image-01.jpg')} class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Men</h4>
                                                    <span>Best Clothes For Men</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require('./images/baner-right-image-02.jpg')} class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Electronics</h4>
                                                    <span>Best Deals ever!!</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require('./images/baner-right-image-03.jpg')} class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="right-first-image">
                                            <div class="thumb">
                                                <div class="inner-content">
                                                    <h4>Jewellery</h4>
                                                    <span>Best Trend Jewellery</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <div class="main-border-button">
                                                            <a href="#">Discover More</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={require('./images/baner-right-image-04.jpg')} class="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Main Banner Area End ***** --> */}

            {/* <!-- ***** Men Area Starts ***** --> */}
            <section class="section" id="men">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Men's Latest</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <OwlCarousel className="owl-theme" {...options}>
                                {  mensData.map((value, i) => (
                                        <li key={i}>
                                            <div class="item">
                                                <div class="thumb">
                                                    <div class="hover-content">
                                                    </div>                                                    
                                                    <img src={value.image} class="img-fluid" />
                                                </div>
                                                <div class="down-content">
                                                    <h4>{value.title}</h4>
                                                    <span>{value.price}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Men Area Ends ***** --> */}

            {/* <!-- ***** Women Area Starts ***** --> */}
            <section class="section" id="women">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Women's Latest</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <OwlCarousel className="owl-theme" {...options}>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-02.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 1 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-02.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 1 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-03.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 223 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-01.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 221223 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-02.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 21 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Women Area Ends ***** --> */}

            {/* <!-- ***** Kids Area Starts ***** --> */}
            <section class="section" id="kids">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <h2>Kid's Latest</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <OwlCarousel className="owl-theme" {...options}>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-02.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 1 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-02.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 1 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-03.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 223 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-01.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 221223 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="thumb">
                                        <div class="hover-content">
                                        </div>
                                        <img src={require('./images/men-02.jpg')} class="img-fluid" />
                                    </div>
                                    <div class="down-content">
                                        <h4>Air Force 21 X</h4>
                                        <span>$90.00</span>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Kids Area Ends ***** --> */}

            {/* <!-- ***** Footer Start ***** --> */}
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="first-item">
                                <div class="logo">
                                    <img src={require('./images/white-logo.png')} class="img-fluid" alt="hexashop ecommerce templatemo" />

                                </div>
                                <ul>
                                    <li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                                    <li><a href="#">hexashop@company.com</a></li>
                                    <li><a href="#">010-020-0340</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h4>Shopping &amp; Categories</h4>
                            <ul>
                                <li><a href="#">Men’s Shopping</a></li>
                                <li><a href="#">Women’s Shopping</a></li>
                                <li><a href="#">Kid's Shopping</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Homepage</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3">
                            <h4>Help &amp; Information</h4>
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Tracking ID</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-12">
                            <div class="under-footer">
                                <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.

                                    <br />Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p>
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default IndexPage