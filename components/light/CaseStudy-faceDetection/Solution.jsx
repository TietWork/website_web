import React from "react";

function Solution() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  <h6 style={{ color: "#007bff" }} className="mb-30">
                    The Quotes
                  </h6>
                  <blockquote
                    className="mb-30"
                    style={{
                      fontStyle: "italic",
                      borderLeft: "4px solid #007bff",
                      paddingLeft: "15px",
                      color: "#555",
                    }}
                  >
                    Thirdeye&apos;s innovative solution empowered actors
                    globally while streamlining our internal processes.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Senior Casting Director
                    </span>
                  </blockquote>
                  <blockquote
                    className="mb-30"
                    style={{
                      fontStyle: "italic",
                      borderLeft: "4px solid #007bff",
                      paddingLeft: "15px",
                      color: "#555",
                    }}
                  >
                    With ZyberTech&apos;s technical expertise and
                    Thirdeye&apos;s vision, we transformed the casting
                    experience, making it faster, more reliable, and inclusive.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Project Lead
                    </span>
                  </blockquote>
                  <blockquote
                    className="mb-30"
                    style={{
                      fontStyle: "italic",
                      borderLeft: "4px solid #007bff",
                      paddingLeft: "15px",
                      color: "#555",
                    }}
                  >
                    The AI-powered platform simplified our casting workflow,
                    allowing us to focus on talent rather than paperwork.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Casting Manager
                    </span>
                  </blockquote>
                  <h6 style={{ color: "#007bff" }} className="mt-40 mb-20">
                    Conclusion
                  </h6>
                  <p
                    className="fz-18"
                    style={{ color: "#555", marginTop: "20px" }}
                  >
                    This case study highlights Thirdeye&apos;s commitment to
                    delivering transformative digital solutions, driving
                    innovation, and enhancing user experiences across
                    industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
