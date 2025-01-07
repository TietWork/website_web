import React from "react";
import data from "@/l-data/services.json";

function Services() {
  return (
    <section className="services-boxs section-padding pb-60">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialties</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center justify-content-between">
            <h2 className="fw-600 text-u ls1 mb-0">
              What We Have <span className="fw-200">to Offer</span>
            </h2>
            <a
              href="/light/page-services"
              className="btn btn-sm btn-outline-main"
              style={{
                padding: "5px 10px",
                fontSize: "14px",
                fontWeight:"600",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="row pt-30 ">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 items ">
              <div className="item-box bg md-mb50 rounded-xl">
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15 text-u">
                  {item.title} <br />
                </h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
