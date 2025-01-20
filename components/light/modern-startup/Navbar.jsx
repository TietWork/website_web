"use client";
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
          <a className="logo icon-img-100 mr-30 mb-5" href="/">
            <img
              src="/light/assets/imgs/logoF.png"
              alt="logo"
              style={{ width: "240px", height: "auto" }}
            />
          </a>

          <div
            className="collapse navbar-collapse justify-content-center ml-50"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              {/* services */}

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
                  <span className="rolling-text">Services</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/light/page-services">
                    What We Offer
                  </a>
                  <a className="dropdown-item" href="/light/page-ourprocess">
                    Process
                  </a>
                  <a className="dropdown-item" href="/light/page-whyus">
                    Why us?
                  </a>
                  <a className="dropdown-item" href="/light/page-engage">
                    Engagement Model
                  </a>
                </div>
              </li>

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
                  <span className="rolling-text">Projects</span>
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/light/project-lpgVending">
                    LPG Automated Vending Machine
                  </a>
                  <a className="dropdown-item" href="/light/project-Iot">
                    IoT Smart Locks
                  </a>
                  <a className="dropdown-item" href="/light/project-erp">
                    ERP Solutions
                  </a>{" "}
                  <a className="dropdown-item" href="/light/project-RFID">
                    RFID-based Jewel Tracking
                  </a>{" "}
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
                  <a className="dropdown-item" href="/light/casestudy-alekton">
                    Digitized Job Cards for Alekton
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/casestudy-faceDetection"
                  >
                    AI in Hollywood Casting
                  </a>
                  <a className="dropdown-item" href="/light/casestudy-theatre">
                    Digital Information Displays in Theatre
                  </a>{" "}
                  <a
                    className="dropdown-item"
                    href="/light/casestudy-healthcare"
                  >
                    Real-Time Skin Cancer Detection
                  </a>{" "}
                  <a
                    className="dropdown-item"
                    href="/light/casestudy-GeoSpatial"
                  >
                    Geospatial Agriculture Solutions
                  </a>
                  <a
                    className="dropdown-item"
                    href="/light/casestudy-urbanladder"
                  >
                    Urban Ladder Digital Makeover
                  </a>
                </div>
              </li>

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
                  <a className="dropdown-item" href="/light/page-team">
                    Our Team
                  </a>
                  <a className="dropdown-item" href="/light/page-ourClients">
                    Our Clients
                  </a>
                </div>
              </li>

              {/* Testimotials */}

              <ul className="navbar-nav">
                <li>
                  <a className="nav-link" href="/light/page-testimonials">
                    <span className="rolling-text">Testimonials</span>
                  </a>
                </li>
              </ul>

              {/* join us */}

              <ul className="navbar-nav">
                <li>
                  <a className="nav-link" href="/light/page-joinus">
                    <span className="rolling-text">Join Us</span>
                  </a>
                </li>
              </ul>

              {/* Contact Section */}

              <li className="nav-item">
                <a
                  className="nav-link nav-button-minimal"
                  href="/light/page-contact"
                  style={{
                    color: "#edede9",
                  }}
                >
                  <span className="">Let&apos;s Connect</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="topnav">
            <div
              className="menu-icon cursor-pointer"
              style={{ color: "#9E9E9EFF" }}
              onMouseEnter={toggleMenu}
            >
              <span className="icon ti-align-right mt-15"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className={`hamenu ${isOpen == true ? "open" : ""}`}>
        <div className="logo icon-img-100"></div>
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

                  {/* Services section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <span className="fill-text" data-text="Services">
                          Services
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a href="/light/page-services" className="sub-link">
                            What We Offer
                          </a>
                        </li>
                        <li>
                          <a href="/light/page-ourprocess" className="sub-link">
                            Process
                          </a>
                        </li>
                        <li>
                          <a href="/light/page-whyus" className="sub-link">
                            Why us?
                          </a>
                        </li>
                        <li>
                          <a href="/light/page-engage" className="sub-link">
                            Engagement Model
                          </a>
                        </li>
                      </ul>
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
                        <span className="fill-text" data-text="Projects">
                          Projects
                        </span>{" "}
                        <i></i>
                      </div>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <a
                            href="/light/project-lpgVending"
                            className="sub-link"
                          >
                            LPG Automated Vending Machine
                          </a>
                        </li>
                        <li>
                          <a href="/light/project-Iot" className="sub-link">
                            IoT Smart Locks
                          </a>
                        </li>
                        <li>
                          <a href="/light/project-erp" className="sub-link">
                            ERP Solutions
                          </a>
                        </li>
                        <li>
                          <a href="/light/project-RFID" className="sub-link">
                            RFID-based Jewel Tracking
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
                          <a
                            href="/light/casestudy-alekton"
                            className="sub-link"
                          >
                            Digitized Job Cards for Alekton
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/casestudy-faceDetection"
                            className="sub-link"
                          >
                            AI in Hollywood Casting
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/casestudy-theatre"
                            className="sub-link"
                          >
                            Digital Information Displays in Theatre
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/casestudy-healthcare"
                            className="sub-link"
                          >
                            Real-Time Skin Cancer Detection
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/casestudy-GeoSpatial"
                            className="sub-link"
                          >
                            Geospatial Agriculture Solutions
                          </a>
                        </li>
                        <li>
                          <a
                            href="/light/casestudy-urbanladder"
                            className="sub-link"
                          >
                            Urban Ladder Digital Makeover
                          </a>
                        </li>
                      </ul>
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
                          <a href="/light/page-team" className="sub-link">
                            Our Team
                          </a>
                        </li>
                        <li>
                          <a href="/light/page-ourClients" className="sub-link">
                            Our Clients
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* testimonials section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/light/page-testimonials" className="link">
                        <span className="fill-text" data-text="Testimonials">
                          Testimonials
                        </span>
                      </a>
                    </div>
                  </li>

                  {/* Career section */}

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/light/page-joinus" className="link">
                        <span className="fill-text" data-text="Join Us">
                          Join Us
                        </span>
                      </a>
                    </div>
                  </li>

                  <li
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                    onClick={toggleSubMenu}
                  >
                    <div className="o-hidden">
                      <a href="/light/page-contact" className="link">
                        <span className="fill-text" data-text="Let's Connect">
                          Let&apos;s Connect
                        </span>
                      </a>
                    </div>
                  </li>

                  {/* Address */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    AE-176, Plot No. 2248, Ramkrubha,
                    <br />
                    11th Main Road, Annanagar,
                    <br />
                    Chennai, India <br />
                    PIN:600040
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a
                        href="https://www.instagram.com/thirdeyeinfotechnology/profilecard/?igsh=d2Z3YXpoanZmZWI4"
                        className="hover-this"
                      >
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a
                        href="https://www.linkedin.com/company/third-eye-info-technology/"
                        className="hover-this"
                      >
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5 style={{ color: "#007BFF" }}>
                    <a href="mailto:contact@thirdeyeinfotech.com">
                      contact@thirdeyeinfotech.com
                    </a>
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
