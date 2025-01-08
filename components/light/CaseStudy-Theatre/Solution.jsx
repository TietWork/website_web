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
                  02 . <span style={{ color: "#007bff" }}>Key Outcomes & Impact</span>
                </h4>{" "}
                <h4 className="mb-50">
                  03 . <span style={{ color: "#007bff" }}>The Quotes</span>
                </h4>{" "}
                <h4 className="mb-50">
                  04 . <span style={{ color: "#007bff" }}>Conclusion</span>
                </h4>{" "}
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Key Outcomes Section */}
                  <h6 style={{ color: "#007bff" }} className="mt-20 mb-20">
                    Key Outcomes & Impact
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Operational Efficiency:</strong> Automation
                      reduced manual work, improving the overall operational
                      workflow.
                    </li>
                    <li>
                      <strong>Enhanced Patron Experience:</strong> Real-time
                      seat filling visualization helped patrons make quicker and
                      more informed decisions.
                    </li>
                    <li>
                      <strong>Increased Revenue:</strong> Optimized seat filling
                      through real-time tracking resulted in better occupancy
                      management and increased ticket sales.
                    </li>
                    <li>
                      <strong>Scalability:</strong> The solution can easily
                      scale to accommodate additional screens and expand to
                      other theatre locations.
                    </li>
                  </ul>

                  {/* Key Quotes Section */}
                  <h6 style={{ color: "#007bff" }} className="mt-40 mb-20">
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
                    The Digital Information Display System transformed our
                    theatre&apos;s operations. The real-time seat visualization
                    has been a game-changer for our patrons.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Operations Manager, Leading Theatre in the USA
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
                    Partnering with Thirdeye brought innovative solutions to the
                    forefront, significantly enhancing our client&apos;s ability
                    to manage their operations effectively.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – ZyberTech
                    </span>
                  </blockquote>

                  {/* Conclusion */}
                  <h6 style={{ color: "#007bff" }} className="mt-40 mb-20">
                    Conclusion
                  </h6>
                  <p className="fz-18" style={{ color: "#555" }}>
                    Thirdeye&apos;s innovative Digital Information Display
                    System has revolutionized the theatre experience by
                    automating real-time updates, enhancing operational
                    efficiency, and improving patron satisfaction. This project
                    reinforces Thirdeye&apos;s dedication to leveraging
                    technology for operational excellence and exceptional user
                    experiences in the entertainment industry.
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
