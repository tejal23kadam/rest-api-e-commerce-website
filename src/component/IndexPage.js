
import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';

import './IndexPagesCss.css';
import axios from 'axios';

function IndexPage() {
    let [categoryFilters, setcategoryFilters] = useState(new Set());
    let [filterPrice, setFilterPrice] = useState(0);
    const [data, setData] = useState([]);

    const [showHide, setShowHide] = useState("header");
    const [isOpen, setIsOpen] = useState(false);
    let filteredProducts = [];

    const categories = [20,50,100,,300,500,700,900,1000];

    const toggle = () => {
        setIsOpen(prev => !prev);
        setShowHide(prev => prev === "header" ? "leftZero" : "header");
    };

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    function updateFilters(checked, categoryFilter) {
        if (checked) {
            setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
            setFilterPrice(categoryFilter);
        }
        if (!checked)
            setcategoryFilters((prev) => {
                const next = new Set(prev);
                next.delete(categoryFilter);
                return next;
            });
    }

    filteredProducts = categoryFilters.size === 0 ? data : data.filter((p) => p.price <= filterPrice);
    return (
        <div>
            <div id="header" className="header d-flex flex-column">
                <i className="headerToggle d-xl-none" onClick={toggle}>
                    <span className={isOpen ? 'bi bi-x' : 'bi bi-list'}></span>
                </i>
                <div className={showHide}>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <h3><u>Range </u></h3>
                            <li>
                                {categories.map((elm, index) => {
                                    return (
                                        <div key={index}>
                                            <label className="form-check-label">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    // onChange={(e) => searchbyprice(elm)}
                                                    onChange={(e) => updateFilters(e.target.checked, elm)}
                                                />
                                                &lt; &#8377;{elm}
                                            </label>
                                        </div>
                                    );
                                })}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='header-main'>
                {/* Main Banner */}
                <div className="main-banner" id="top">
                    <div className="container-fluid">
                        <div className="right-content">
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Women</h4>
                                                <span>Best Clothes For Women</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <div className="main-border-button">
                                                        <a href="#">Discover More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require('./images/baner-right-image-01.jpg')} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Men</h4>
                                                <span>Best Clothes For Men</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <div className="main-border-button">
                                                        <a href="#">Discover More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require('./images/baner-right-image-02.jpg')} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Electronics</h4>
                                                <span>Best Deals ever!!</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <div className="main-border-button">
                                                        <a href="#">Discover More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require('./images/baner-right-image-03.jpg')} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="right-first-image">
                                        <div className="thumb">
                                            <div className="inner-content">
                                                <h4>Jewellery</h4>
                                                <span>Best Trend Jewellery</span>
                                            </div>
                                            <div className="hover-content">
                                                <div className="inner">
                                                    <div className="main-border-button">
                                                        <a href="#">Discover More</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={require('./images/baner-right-image-04.jpg')} className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                {['men\'s clothing', 'women\'s clothing', 'electronics', 'jewelery'].map((category, index) => (
                    <section key={index} className="section container-fluid main-banner" >
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-heading">
                                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="container-fluid">
                                        <div className="row">
                                            {filteredProducts.filter(product => product.category === category).map((value) => (
                                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2" key={value.id}>
                                                    <div className="thumb"> 
                                                        <img src={value.image} className="img-fluid img-hw" alt={value.title} />
                                                    </div>
                                                    <div className="down-content">
                                                        <h4>{value.title}</h4>
                                                        <div>&#8377; {value.price}</div>
                                                        <span>{value.rating.count}+ bought in past month</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Footer */}
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="under-footer">
                                    <h1>Thank you for shopping</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div >
        </div >
    );
}

export default IndexPage;
