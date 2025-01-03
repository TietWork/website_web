"use client";
import { color } from "framer-motion";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains("open")) closeBtn.style.display = "block";
    else closeBtn.style.display = "none";
  }
  function toggleMenu() {
    const hamenu = document.querySelector(".hamenu");

    setIsOpen((prev) => !prev);

    setTimeout(() => {
      if (document.querySelector(".hamenu").classList.contains("open")) {
        document.querySelector(".hamenu").style.left = "0";
      } else {
        document.querySelector(".hamenu").style.left = "-100%";
      }
    }, 300);
  }

  function closeMenu() {
    const hamenu = document.querySelector(".hamenu");

    setIsOpen(false);
    setTimeout(() => {
      hamenu.style.left = "-100%";
    }, 300);
  }

  function handleMouseEnter(event) {
    document.querySelectorAll("ul.main-menu li").forEach((item) => {
      item.classList.add("hoverd");
    });
    event.currentTarget.classList.remove("hoverd");
  }

  function handleMouseLeave() {
    document
      .querySelectorAll("ul.main-menu li")
      .forEach((item) => item.classList.remove("hoverd"));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector(".sub-menu");
    const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
    if (subMenu) {
      if (subMenu.classList.contains("sub-open") && SubMenu2 == null) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        subMenu.classList.remove("sub-open");
        subMenu.style.maxHeight = "0";
        subMenu.previousElementSibling.children[0].classList.remove("dopen");
      } else if (!subMenu.classList.contains("sub-open")) {
        if (SubMenu2 == null) {
          document.querySelectorAll(".sub-menu").forEach((item) => {
            item.classList.remove("sub-open");
            item.style.maxHeight = "0";
            item.previousElementSibling.children[0].classList.remove("dopen");
          });

          subMenu.classList.add("sub-open");
          subMenu.style.maxHeight = "450px";
          subMenu.previousElementSibling.children[0].classList.add("dopen");
        } else {
          subMenu.classList.add("sub-open");
          subMenu.style.maxHeight = "450px";
          subMenu.previousElementSibling.children[0].classList.add("dopen");
        }
      }
    }
  }
  function toggleSubMenu2(event) {
    const SubMenu2 = event.currentTarget.querySelector(".sub-menu2");
    if (SubMenu2) {
      if (SubMenu2.classList.contains("sub-open")) {
        event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        SubMenu2.classList.remove("sub-open");
        SubMenu2.style.maxHeight = "0";
        SubMenu2.previousElementSibling.children[0].classList.remove("dopen");
      } else if (!SubMenu2.classList.contains("sub-open")) {
        event.currentTarget.querySelectorAll(".sub-menu2").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        SubMenu2.classList.add("sub-open");
        SubMenu2.style.maxHeight = "450px";
        SubMenu2.previousElementSibling.children[0].classList.add("dopen");
      }
    }
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector(".dropdown-menu")
      .classList.remove("show");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg nav-crev">
        <div className="container">
          <a className="logo icon-img-100" href="/">
            <img
              src="/light/assets/imgs/logo-light.png"
              alt="logo"
              style={{ width: "200px", height: "auto" }}
            />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            {/* home */}

            <ul className="navbar-nav">
              <li>
                <a className="nav-link" href="/">
                  <span className="rolling-text">Home</span>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              {/* About us */}
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">About Us</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/light/page-about">
                    About Company
                  </a>
                  <a className="dropdown-item" href="/light/page-whyus">
                    Why us?
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Engagement Model
                  </a>
                </div>
              </li>

              {/* services */}

              <ul className="navbar-nav">
                <li>
                  <a className="nav-link" href="/light/page-services">
                    <span className="rolling-text">Services</span>
                  </a>
                </li>
              </ul>

              {/* Projects */}

              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Our Projects</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/dark/home-main">
                    LPG Automated Vending Machine
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    IoT Smart Locks
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Geospatial Data Processing
                  </a>{" "}
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    RFID-based Jewel Tracking
                  </a>{" "}
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Face Detection for Hollywood
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Healthcare Innovations
                  </a>
                </div>
              </li>
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Case Studies</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/dark/home-main">
                    Digitized Job Cards for Alekton
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    AI in Hollywood Casting
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Digital Information Displays in Theatre
                  </a>{" "}
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Real-Time Skin Cancer Detection
                  </a>{" "}
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    Geospatial Agriculture Solutions
                  </a>
                  <a
                    className="dropdown-item"
                    href="/dark/home-startup-onepage"
                  >
                    UrbanLadder Digital Makeover
                  </a>
                </div>
              </li>

              {/* Approach section */}
              <li
                onMouseLeave={handleDropdownMouseLeave}
                onMouseMove={handleDropdownMouseMove}
                className="nav-item dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="rolling-text">Approach</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/dark/blog-classic">
                    FAQ
                  </a>
                  <a className="dropdown-item" href="/dark/blog-list">
                    Terms of Use and Privacy Policy
                  </a>
                  <a className="dropdown-item" href="/dark/blog-list2">
                    Join Us!
                  </a>
                </div>
              </li>

              {/* Contact Section */}

              <li className="nav-item">
                <a className="nav-link" href="/dark/page-contact">
                  <span className="rolling-text">Get a Quote</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="topnav">
            <div onClick={toggleMenu} className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`hamenu ${isOpen == true ? "open" : ""}`}>
        <div className="logo icon-img-100">
          <img src="/dark/assets/imgs/logo-light.png" alt="" />
        </div>
        <div
          onClick={closeMenu}
          className="close-menu cursor-pointer ti-close"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  {/* Home  */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/" className="link">
                        <span className="fill-text" data-text="Home">
                          Home
                        </span>
                      </a>
                    </div>
                  </li>

                  {/* About us section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="About Us">
                          About Us
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/light/page-about" className="sub-link">
                            About Company
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/page-whyus"
                            className="sub-link"
                          >
                            Why us?
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Engagement Model
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Services section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/" className="link">
                        <span className="fill-text" data-text="Services">
                          Services
                        </span>
                      </a>
                    </div>
                  </li>

                  {/* Project Section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Our Projects">
                          Our Projects
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/dark/home-main" className="sub-link">
                            LPG Automated Vending Machine
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-startup-onepage"
                            className="sub-link"
                          >
                            IoT Smart Locks
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Geospatial Data Processing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            RFID-based Jewel Tracking
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Face Detection for Hollywood
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Healthcare Innovations
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* case study section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Case Studies">
                          Case Studies
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/dark/home-main" className="sub-link">
                            Digitized Job Cards for Alekton
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-startup-onepage"
                            className="sub-link"
                          >
                            AI in Hollywood Casting
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Digital Information Displays in Theatre
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Real-Time Skin Cancer Detection
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Geospatial Agriculture Solutions
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            UrbanLadder Digital Makeover
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Approach section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Approach">
                          Approach
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a
                            href="/dark/home-startup-onepage"
                            className="sub-link"
                          >
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dark/home-creative-agency"
                            className="sub-link"
                          >
                            Terms of Use and Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="/dark/home-main" className="sub-link">
                            Join Us!
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/dark/page-contact3" className="link">
                        <span className="fill-text" data-text="Get a Quote">
                          Get a Quote
                        </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    AE-176, Plot No. 2248,
                    <br />
                    11th Main Road, Annanagar,
                    <br />
                    Chennai - 600040. INDIA
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li> 
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5 style={{color: "#007BFF"}}>
                  <a href="mailto:contact@thirdeyeinfotech.com">contact@thirdeyeinfotech.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+91 44 4207 2248</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
