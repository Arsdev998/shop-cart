import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
const NavItems = () => {
  const [menuTogle, setMenuTogle] = useState(false);
  const [socialTogle, setSocialTogle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //add eventListener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialTogle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/sign-up" className="lab-btn me-3">
              <span> Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
      {/* header top end */}
      {/* header bottom start */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="lab logo" />
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
                <div className="menu">
                    <ul className={`lab-ul ${menuTogle ? "active" : ""} `}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/shop'}>Shop</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>

                </div>
                {/* sign in and login */}
                    <Link to={'/sign-up '} className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                    <Link to={'/login '} className="d-none d-md-block">Log In</Link>
                    {/*menu togle button*/}
                <div onClick={() => setMenuTogle(!menuTogle)} className={`header-bar d-lg-none ${menuTogle ? "active" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* social togler */}
                <div onClick={() => setSocialTogle(!socialTogle)} className="ellepsis-bar d-md-none">
                <i className="icofont-info-square"></i>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* header bottom end */}
    </header>
  );
};

export default NavItems;
