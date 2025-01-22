"use client";
import React from "react";

function Footer() {
  return (
    <footer className="modern-footer pt-80">
      <div className="footer-container">
        <div className="container">
          {/* Logo and Social Media */}
          <div className="row pb-40 align-items-center justify-content-between">
            {/* Logo Section */}
            <div className="col-12 col-lg-4 text-left mb-4">
              <div className="logo icon-img-120">
                <img
                  src="/light/assets/imgs/logoF.png"
                  alt="Logo"
                  style={{ width: "240px", height: "auto" }}
                />
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-12 col-lg-8 text-right">
              <ul className="d-flex align-items-center justify-content-end social-icons fz-16">
                <li className="ml-20">
                  <a
                    href="https://www.linkedin.com/company/third-eye-info-technology/"
                    className="hover-anim"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#0077B5", // LinkedIn Blue
                      fontSize: "24px", // Larger icon size
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="ml-20">
                  <a
                    href="https://www.instagram.com/thirdeyeinfotechnology/profilecard/?igsh=d2Z3YXpoanZmZWI4"
                    className="hover-anim"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#E1306C", // Instagram Pink
                      fontSize: "24px", // Larger icon size
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row pt-50 pb-50 align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 className="fz-60 fw-600">
                Have a project in mind?{" "}
                <span className="underline">
                  <a href="/light/page-contact" style={{ color: "#007BFF" }}>
                    Let&apos;s Connect.
                  </a>
                </span>
              </h2>
            </div>
            <div className="col-lg-5 ">
              <a
                href="mailto:contact@thirdeyeinfotech.com"
                className="butn butn-md butn-bord-thin radius-30"
              >
                contact@thirdeyeinfotech.com
              </a>
              <a
                href="/light/page-contact"
                className="butn butn-md butn-bord-thin radius-30 ml-3 mt-3"
              >
                +91 44 4207 2248
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="row">
            <div className="col-lg-10">
              <h6 className="sub-title mb-30">Quick Links</h6>
              <div className="d-flex flex-wrap">
                <ul className="rest fz-14 mr-50 mb-10">
                  <li>
                    <strong>Projects</strong>
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
                    <a href="/light/project-RFID">RFID Jewel Tracking</a>
                  </li>
                </ul>
                <ul className="rest fz-14 mr-50 mb-10">
                  <li>
                    <strong>Services</strong>
                  </li>
                  <li>
                    <a href="/light/page-services">What We Offer</a>
                  </li>
                  <li>
                    <a href="/light/page-ourprocess">Process</a>
                  </li>
                  <li>
                    <a href="/light/page-whyus">Why Us?</a>
                  </li>
                  <li>
                    <a href="/light/page-engage">Engagement Models</a>
                  </li>
                </ul>
                <ul className="rest fz-14 mr-50 mb-10">
                  <li>
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
                  <li>
                    <a href="/light/page-testimonials">Testimonials</a>
                  </li>
                </ul>
                <ul className="rest fz-14 mr-50 mb-10">
                  <li>
                    <strong>Legal</strong>
                  </li>
                  <li>
                    <a href="/light/page-TermsPolicy">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/light/page-PrivacyPolicy">Privacy Policy</a>
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
