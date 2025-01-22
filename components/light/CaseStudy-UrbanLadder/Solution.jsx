import React from "react";

function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Subheading */}
              <div className="col-lg-5">
                <h4 className="mb-50">
                  02 . <span style={{ color: "#007bff" }}>The Quotes</span>
                </h4>{" "}
                <h4 className="mb-50">
                  03 . <span style={{ color: "#007bff" }}>Conclusion</span>
                </h4>{" "}
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Key Quotes Section */}
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
                    The track and trace solution developed by Thirdeye has
                    transformed how we manage production. Every stage is now
                    visible and automated, reducing inefficiencies across our
                    operations.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Production Head, Urban Ladder
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
                    With optimized cutting patterns and real-time inventory
                    tracking, we&apos;ve significantly reduced material wastage
                    and increased productivity. This solution has positioned us
                    to scale our operations seamlessly.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Operations Manager
                    </span>
                  </blockquote>

                 
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
