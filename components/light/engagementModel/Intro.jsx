import React from "react";

function Intro() {
  return (
    <section className="page-intro position-re">
      <div className="container section-padding">
        {/* Row for Sub-title and Main Content */}
        <div className="row align-items-center mb-5">
          {/* Main Content Section */}
          <div>
            <div className="text">
              <h4
                className="font-weight-bold mb-4"
                style={{ fontSize: "24px", lineHeight: "1.5",  justifyContent: "center" }}
              >
                At Third Eye, we combine cutting-edge technology with an
                unwavering commitment to innovation and quality.
              </h4>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  marginBottom: "15px",
                }}
              >
                Our engagement models are designed to support businesses across
                the software development lifecycle—from concept to
                execution—delivering scalable and cost-effective solutions
                tailored to your goals.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
                We offer a number of engagement options to meet short-term and
                long-term R&D outsourcing needs of our customers. Our engagement
                model offers complete support, starting from the stage when the
                idea is conceived, throughout the software development
                lifecycle, working towards achieving your desired business
                goals.
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider Heading */}
        <div >
          <div>
            <h3
              className="font-weight-bold"
              style={{
                fontSize: "28px",
                marginBottom: "10px",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <span style={{ color: "black" }}>Key </span>{" "}
              <span style={{ color: "#007bff" }}>Advantages</span>
            </h3>
          </div>
        </div>

        {/* Points Section */}
        <div className="row mt-4">
          {[
            {
              title: "Comprehensive Support",
              description:
                "From ideation to product rollout, we provide end-to-end support tailored to your business needs.",
            },
            {
              title: "Flexible Engagement",
              description:
                "Choose from consultation, resource hiring, fixed-cost models, or offshore development centers.",
            },
            {
              title: "Customer-Centric Approach",
              description:
                "Integrity, transparency, and collaboration ensure long-term partnerships and measurable success.",
            },
          ].map((point, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div
                className="card shadow-sm p-4 text-left"
                style={{
                  borderRadius: "15px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h5
                  className="font-weight-bold mb-3"
                  style={{ color: "#007bff", fontSize: "20px" }}
                >
                  {point.title}
                </h5>
                <p
                  style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}
                >
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intro;
