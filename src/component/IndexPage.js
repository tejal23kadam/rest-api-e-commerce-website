import React from 'react'
import './IndexPagesCss.css';
import OwlCarousel from 'react-owl-carousel';
function IndexPage() {

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
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
        },
    };

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


            {/* <!-- ***** Header Area Start ***** --> */}
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" class="logo">
                                    <img src={require('./images/logo.png')} class="img-fluid" />
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                <ul class="nav">
                                    <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                                    <li class="scroll-to-section"><a href="#men">Men's</a></li>
                                    <li class="scroll-to-section"><a href="#women">Women's</a></li>
                                    <li class="scroll-to-section"><a href="#kids">Kid's</a></li>
                                    <li class="submenu">
                                        <a href="javascript:;">Pages</a>

                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="products.html">Products</a></li>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </li>
                                    <li class="submenu">
                                        <a href="javascript:;">Features</a>
                                        <ul>
                                            <li><a href="#">Features Page 1</a></li>
                                            <li><a href="#">Features Page 2</a></li>
                                            <li><a href="#">Features Page 3</a></li>
                                            <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                        </ul>
                                    </li>
                                    <li class="scroll-to-section"><a href="#explore">Explore</a></li>
                                </ul>
                                <a class='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            {/* <!-- ***** Main Banner Area Start ***** --> */}
            <div class="main-banner" id="top">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="left-content">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>We Are Hexashop</h4>
                                        <span>Awesome, clean &amp; creative HTML5 Template</span>
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
                                                        <h4>Women</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
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
                                                        <h4>Men</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
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
                                                    <h4>Kids</h4>
                                                    <span>Best Clothes For Kids</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Kids</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
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
                                                    <h4>Accessories</h4>
                                                    <span>Best Trend Accessories</span>
                                                </div>
                                                <div class="hover-content">
                                                    <div class="inner">
                                                        <h4>Accessories</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
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
                            <div class="women-item-carousel">
                                <div class="owl-women-item owl-carousel">
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/women-01.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>New Green Jacket</h4>
                                            <span>$75.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/women-02.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Dress</h4>
                                            <span>$45.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/women-03.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Spring Collection</h4>
                                            <span>$130.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/women-01.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <div class="kid-item-carousel">
                                <div class="owl-kid-item owl-carousel">
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/kid-01.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>School Collection</h4>
                                            <span>$80.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/kid-02.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Summer Cap</h4>
                                            <span>$12.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/kid-03.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Kid</h4>
                                            <span>$30.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="thumb">
                                            <div class="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i class="fa fa-eye"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={require('./images/kid-01.jpg')} class="img-fluid" />
                                        </div>
                                        <div class="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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