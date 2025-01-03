import React from "react";

function Intro() {
  return (
    <section className="page-intro position-re">
      <div className="container section-padding">
        {/* Row for Sub-title and Main Content */}
        <div className="row align-items-center">
          {/* Sub-title Section */}
          <div className="col-lg-5">
            <h6
              className="sub-title main-color text-uppercase"
              style={{ color: "#007bff" }}
            >
              Engagement Model
            </h6>
          </div>

          {/* Main Content Section */}
          <div className="col-lg-7">
            <div className="text">
              <h4 className="font-weight-bold mb-3">
                At Third Eye, we combine cutting-edge technology with an
                unwavering commitment to innovation and quality.
              </h4>
              <p>
                Our engagement models are designed to support businesses across
                the software development lifecycle—from concept to
                execution—delivering scalable and cost-effective solutions
                tailored to your goals.
              </p>
              <p>
                We offer a number of engagement options to meet short-term and
                long-term R&D outsourcing needs of our customers.
                <br />
                Our engagement model offers you with compete support starting
                right from the stage when the idea is conceived throughout the
                software development life cycle, working throughout to achieve
                your desired business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider Heading */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3
              className="font-weight-bold"
              style={{ fontSize: "28px", marginTop: "20px" }}
            >
              <span style={{ color: "black" }}>Key </span>{" "}
              <span style={{ color: "#007bff" }}>Advantages</span>
            </h3>
            <hr
              style={{
                width: "50%",
                margin: "15px auto",
                borderTop: "2px solid #007bff",
              }}
            />
          </div>
        </div>

        {/* Points Section */}
        <div className="row mt-5">
          <div className="col-lg-4 mb-10">
            <div
              className="card shadow-sm p-4 text-center"
              style={{ borderRadius: "15px" }}
            >
              <h5
                className="font-weight-bold mb-3"
                style={{ color: "#007bff" }}
              >
                Comprehensive Support
              </h5>
              <p>
                From ideation to product rollout, we provide end-to-end support
                tailored to your business needs.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mb-10">
            <div
              className="card shadow-sm p-4 text-center"
              style={{ borderRadius: "15px" }}
            >
              <h5
                className="font-weight-bold mb-3"
                style={{ color: "#007bff" }}
              >
                Flexible Engagement
              </h5>
              <p>
                Choose from consultation, resource hiring, fixed-cost models, or
                offshore development centers.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card shadow-sm p-4 text-center"
              style={{ borderRadius: "15px" }}
            >
              <h5
                className="font-weight-bold mb-3"
                style={{ color: "#007bff" }}
              >
                Customer-Centric Approach
              </h5>
              <p>
                Integrity, transparency, and collaboration ensure long-term
                partnerships and measurable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
