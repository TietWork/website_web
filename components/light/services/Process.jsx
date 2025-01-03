import React from "react";

function Process() {
  return (
    <section className="process section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Process</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Business <span className="fw-200">Discovery & Research</span>
            </h2>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-3 col-md-6 item md-mb50">
            <div className="icon-img-60 mb-30">
              <img src="/light/assets/imgs/serv-icons/3.png" alt="" />
            </div>
            <h5 className="mb-15">Concept & Design</h5>
            <p>
              We start by deeply understanding your business goals, conducting
              research, and gathering insights to create a customized strategy
              for success.
            </p>{" "}
            <div className="o-hidden">
              <a href="/light/page-about2" className="rmore to-in mt-30">
                <img
                  src="/light/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item md-mb50">
            <div className="icon-img-60 mb-30">
              <img src="/light/assets/imgs/serv-icons/4.png" alt="" />
            </div>
            <h5 className="mb-15">Development & Execution</h5>
            <p>
              Based on research, we develop creative concepts and user-centered
              designs that reflect your brand's vision and meet customer
              expectations.{" "}
            </p>
            <div className="o-hidden">
              <a href="/light/page-about2" className="rmore to-in mt-30">
                <img
                  src="/light/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item sm-mb50">
            <div className="icon-img-60 mb-30">
              <img src="/light/assets/imgs/serv-icons/5.png" alt="" />
            </div>
            <h5 className="mb-15">Launch & Ongoing Support</h5>
            <p>
              Our skilled team builds robust, scalable solutions, ensuring high
              performance, security, and usability tailored to your specific
              business needs.{" "}
            </p>
            <div className="o-hidden">
              <a href="/light/page-about2" className="rmore to-in mt-30">
                <img
                  src="/light/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 item">
            <div className="icon-img-60 mb-30">
              <img src="/light/assets/imgs/serv-icons/6.png" alt="" />
            </div>
            <h5 className="mb-15">Handover</h5>
            <p>
              After deployment, we ensure a smooth launch and offer ongoing
              support, continuous optimization, and enhancements to keep your
              solution up-to-date and effective.
            </p>
            <div className="o-hidden">
              <a href="/light/page-about2" className="rmore to-in mt-30">
                <img
                  src="/light/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
