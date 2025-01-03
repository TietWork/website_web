"use client";
import React from "react";

function Footer() {
  return (
    <footer className="modern-footer pt-80">
      <div className="footer-container">
        <div className="container ontop">
          <div className="row pb-30 bord-thin-bottom">
            <div className="col-lg-5">
              <div className="logo icon-img-120">
                <img src="/light/assets/imgs/logo-light.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="social-media d-flex justify-content-end">
                <ul className="rest d-flex align-items-center fz-14">
                  <li>
                    <a href="#" className="hover-anim">
                      <i className="fab fa-facebook-f ml-20"></i> Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/third-eye-info-technology/" className="hover-anim" target="_blank">
                      <i className="fab fa-linkedin-in ml-20"></i> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover-anim">
                      <i className="fab fa-instagram ml-20"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-80">
            <div className="col-lg-7">
              <div className="call-action">
                <h2 className="d-slideup wow fz-60 fw-600">
                  <span className="sideup-text">
                    <span className="up-text">Have a project in mind?</span>
                  </span>
                  <span className="sideup-text">
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
                <div className="info mt-80 d-flex align-items-center">
                  <div>
                    <a
                      href="mailto:contact@thirdeyeinfotech.com"
                      className="butn butn-md butn-bord-thin radius-30"
                    >
                      <span className="text">contact@thirdeyeinfotech.com</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="light/page-contact"
                      className="butn butn-md butn-bord-thin radius-30 ml-30"
                    >
                      <span className="text">+91 44 4207 2248</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 bord-left">
              <div className="column">
                <h6 className="sub-title mb-30">Useful Links</h6>
                <div className="row">
                  <div className="col-6">
                    <ul className="rest fz-14">
                      <li className="mb-15">
                        <a href="/light/page-about">About Company</a>
                      </li>
                      <li className="mb-15">
                        <a href="/light/page-services">Services</a>
                      </li>
                      <li className="mb-15">
                        <a href="/light/page-whyus">Why Us?</a>
                      </li>
                      <li>
                        <a href="/light/page-contact">Contact US</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="rest fz-14">
                    <li className="mb-15">
                        <a href="/light/page-engage">Engagement Model</a>
                      </li>
                      <li className="mb-15">
                        <a href="/light/page-FAQS">FAQS</a>
                      </li>
                      <li className="mb-15">
                        <a href="/light/page-TermsPolicy">Term & Conditions</a>
                      </li>
                      <li className="mb-15">
                        <a href="/light/page-PrivacyPolicy">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-30 pb-30 sub-bg mt-80">
            <p className="fz-14">
              © 2025 All rights reserved by{" "}
              <span className="underline main-color">
                Third Eye Info Technology Pvt.Ltd
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <Script src="/light/assets/js/hscroll.js"></Script> */}
    </footer>
  );
}

export default Footer;
