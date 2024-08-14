import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './IndexPagesCss.css';
import OwlCarousel from 'react-owl-carousel';

function IndexPage() {

    const [isOpen, setIsOpen] = useState(false);
    const [showHide, setShowHide] = useState("header");
    const [allProductData, setAllProductData] = useState([]);

    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        navigationText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 5,
            }
        },
    };

    const getAllProductData = async () => {
        axios.get("https://fakestoreapi.com/products")
            .then(function (response) {
                // handle success
                // console.log("api response is "+JSON.stringify(response.data));
                setAllProductData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getAllProductData()
    }, [])

    // code for responsive design that shows and hides left side navbar 


    const toggle = () => {
        setIsOpen(!isOpen);
        !isOpen ? setShowHide("header") : setShowHide("leftZero");
        showHide !== "header" ? setShowHide("header") : setShowHide("leftZero");
    }

    return (
        <div>
            <div id="header" className="header dark-background d-flex flex-column">
                <i className="headerToggle d-xl-none " onClick={toggle}>
                    <span className={isOpen ? 'bi bi-x' : 'bi bi-list'}></span>
                </i>
                <div className={showHide}>
                    <nav id="navmenu" className="navmenu">
                        <ul>                           
                        <li><input type="checkbox" value="on"/><label>Filter Checkbox</label></li>
      <li><input type="checkbox" value="on"/><label>Filter Checkbox</label></li>
      <li><input type="checkbox" value="on"/><label>Filter Checkbox</label></li>
                           
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='header-main'>
                {/* <!-- ***** Main Banner Area Start ***** --> */}
                <div class="main-banner" id="top">
                    <div class="container-fluid">
                        <div class="right-content">
                            <div class="row">
                                <div class="col-6 col-lg-3">
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
                                <div class="col-6 col-lg-3">
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
                                <div class="col-6 col-lg-3">
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
                                <div class="col-6 col-lg-3">
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
                {/* <!-- ***** Main Banner Area End ***** --> */}

                {/* <!-- ***** Men Area Starts ***** --> */}
                <section class="section container" id="owlCarousalSection">
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
                                    {allProductData.filter(person => person.category === "men's clothing").map(value => (
                                        <li>
                                            <div class="item">
                                                <div class="thumb">
                                                    <img src={value.image} class="img-fluid" />
                                                </div>
                                                <div class="down-content">
                                                    <h4>{value.title}</h4>
                                                    <span>&#8377; {value.price}</span>
                                                    <span>{value.rating.count}+  bought in past month</span>
                                                    {/* <ul class="stars">
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                        <li><i class="bi bi-star"></i></li>
                                    </ul> */}
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
                <section class="section container" id="owlCarousalSection">
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
                                    {allProductData.filter(person => person.category === "women's clothing").map(value => (
                                        <li>
                                            <div class="item">
                                                <div class="thumb">
                                                    <img src={value.image} class="img-fluid" />
                                                </div>
                                                <div class="down-content">
                                                    <h4>{value.title}</h4>
                                                    <span> &#8377; {value.price}</span>
                                                    <span>{value.rating.count}+  bought in past month</span>
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
                {/* <!-- ***** Women Area Ends ***** --> */}

                {/* <!-- ***** Electronics Area Starts ***** --> */}
                <section class="section container" id="owlCarousalSection">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="section-heading">
                                    <h2>Electronics</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <OwlCarousel className="owl-theme" {...options}>
                                    {allProductData.filter(person => person.category === "electronics").map(value => (
                                        <li>
                                            <div class="item">
                                                <div class="thumb">
                                                    <img src={value.image} class="img-fluid" />
                                                </div>
                                                <div class="down-content">
                                                    <h4>{value.title}</h4>
                                                    <span>&#8377; {value.price}</span>
                                                    <span>{value.rating.count}+  bought in past month</span>
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
                {/* <!-- ***** electronics Area Ends ***** --> */}

                {/* <!-- ***** jewellery Area Starts ***** --> */}
                <section class="section container" id="owlCarousalSection">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="section-heading">
                                    <h2>Jewellery</h2>
                                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <OwlCarousel className="owl-theme" {...options}>
                                    {allProductData.filter(person => person.category === "jewelery").map(value => (
                                        <li>
                                            <div class="item">
                                                <div class="thumb">
                                                    <img src={value.image} class="img-fluid" />
                                                </div>
                                                <div class="down-content">
                                                    <h4>{value.title}</h4>
                                                    <span>&#8377; {value.price}</span>
                                                    <span>{value.rating.count}+  bought in past month</span>
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
                {/* <!-- ***** jewellery Area Ends ***** --> */}

                {/* <!-- ***** Footer Start ***** --> */}
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="under-footer">
                                    <h1>Thank you for shopping</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default IndexPage