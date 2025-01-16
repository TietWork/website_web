"use client";
import React from "react";

function Footer() {
  return (
    <footer className="modern-footer pt-80">
      <div className="footer-container">
        <div className="container ontop">
          {/* Logo and Social Media */}
          <div className="row pb-30 align-items-center">
            <div className="col-lg-4">
              <div className="logo icon-img-120">
                <img src="/light/assets/imgs/logo-light.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-8 d-flex justify-content-end">
              <ul className="rest d-flex align-items-center fz-14 social-icons">
                <li>
                  <a
                    href="https://www.linkedin.com/company/third-eye-info-technology/"
                    className="hover-anim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in ml-20"></i>
                    <span className="social-name ml-10">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/thirdeyeinfotechnology/profilecard/?igsh=d2Z3YXpoanZmZWI4"
                    className="hover-anim"
                  >
                    <i className="fab fa-instagram ml-20"></i>
                    <span className="social-name ml-10">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row pt-50 pb-50 align-items-center">
            <div className="col-lg-7">
              <div className="call-action">
                <h2 className="d-slideup wow fz-60 fw-600">
                  Have a project in mind?{" "}
                  < span className="sideup-text">
                  <span className="up-text underline">
                    <a
                      href="/light/page-contact"
                      style={{ color: "#007BFF" }}
                    >
                      Let&apos;s get to work.
                    </a>
                  </span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 text-lg-right">
              <div className="info d-flex align-items-center justify-content-lg-end">
                <a
                  href="mailto:contact@thirdeyeinfotech.com"
                  className="butn butn-md butn-bord-thin radius-30"
                >
                  contact@thirdeyeinfotech.com
                </a>
                <a
                  href="light/page-contact"
                  className="butn butn-md butn-bord-thin radius-30 ml-5 mt-5"
                >
                  +91 44 4207 2248
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
              <h6 className="sub-title mb-30">Quick Links</h6>
              <div className="d-flex">
                <ul className="rest fz-14 mr-50">
                  <li className="mb-15">
                    <strong>Services</strong>
                  </li>
                  <li>
                    <a href="/light/page-services">What We Offer</a>
                  </li>
                  <li>
                    <a href="/light/page-ourprocess">Our Process</a>
                  </li>
                  <li>
                    <a href="/light/page-whyus">Why Us?</a>
                  </li>
                  <li>
                    <a href="/light/page-engage">Engagement Models</a>
                  </li>
                </ul>
                <ul className="rest fz-14">
                  <li className="mb-15">
                    <strong>About Us</strong>
                  </li>
                  <li>
                    <a href="/light/page-about">About Company</a>
                  </li>
                  <li>
                    <a href="/light/page-team">Our Team</a>
                  </li>
                  <li>
                    <a href="/light/page-ourClients">Our Clients</a>
                  </li>
                </ul>
                <ul className="rest fz-14 ml-25">
                  <li className="mb-15">
                    <strong>Approach</strong>
                  </li>
                  <li>
                    <a href="/light/page-FAQS">FAQs</a>
                  </li>
                  <li>
                    <a href="/light/page-TermsPolicy">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/light/page-PrivacyPolicy">Privacy Policy</a>
                  </li>
                </ul>
                <ul className="rest fz-14 ml-25">
                  <li className="mb-15">
                    <strong>Careers</strong>
                  </li>
                  <li>
                    <a href="/light/page-joinus">Join us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="d-flex mt-50">
                <ul className="rest fz-14 mr-50">
                  <li className="mb-15">
                    <strong>Our Projects</strong>
                  </li>
                  <li>
                    <a href="/light/project-lpgVending">LPG Vending Machine</a>
                  </li>
                  <li>
                    <a href="/light/project-Iot">IoT Smart Locks</a>
                  </li>
                  <li>
                    <a href="/light/project-erp">ERP Solutions</a>
                  </li>
                  <li>
                    <a href="/light/project-RFID">
                      RFID Jewel Tracking
                    </a>
                  </li>
                </ul>
                <ul className="rest fz-14">
                  <li className="mb-15">
                    <strong>Case Studies</strong>
                  </li>
                  <li>
                    <a href="/light/casestudy-alekton">
                      Digitized Job Cards
                    </a>
                  </li>
                  <li>
                    <a href="/light/casestudy-faceDetection">
                      AI in Casting
                    </a>
                  </li>
                  <li>
                    <a href="/light/casestudy-theatre">
                      Digital Displays
                    </a>
                  </li>
                  <li>
                    <a href="/light/casestudy-healthcare">
                      Skin Cancer Detection
                    </a>
                  </li>
                  <li>
                    <a href="/light/casestudy-GeoSpatial">
                      Geospatial Agriculture Solutions
                    </a>
                  </li>
                  <li>
                    <a href="/light/casestudy-urbanladder">
                      Urban Ladder Digital Makeover
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center pt-30 pb-30 sub-bg mt-50">
            <p className="fz-14">
              © 2025 All rights reserved by{" "}
              <span className="underline main-color">
                Third Eye Info Technology Pvt. Ltd.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
