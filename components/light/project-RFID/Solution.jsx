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
                  03 . <span style={{ color: "#007bff" }}>Client Success</span>
                </h4>{" "}
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Client Testimonials */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    The Quotes
                  </h6>

                  <blockquote
                    className="mb-30 fz-18"
                    style={{ color: "#555", fontStyle: "italic" }}
                  >
                    The RFID-based Jewel Tracking and Locker Management System
                    has transformed how we manage our valuable inventory. With
                    real-time tracking and automated check-in/check-out
                    processes, we&apos;ve seen a significant reduction in errors
                    and an increase in security, providing us with peace of
                    mind.
                    <br />
                    <strong>
                      – Senior Operations Manager, ANL 
                    </strong>
                  </blockquote>

                  <blockquote
                    className="mb-40 fz-18"
                    style={{ color: "#555", fontStyle: "italic" }}
                  >
                    Since implementing the RFID system, the accuracy and
                    efficiency of our inventory management have greatly
                    improved. The automated tracking and detailed audit trails
                    have allowed us to ensure the security of our jewels while
                    optimizing our workflow.
                    <br />
                    <strong>
                      – Operations Supervisor, ANL 
                    </strong>
                  </blockquote>

                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Client Success
                  </h6>
                  <p className="fz-18" style={{ color: "#555" }}>
                    Since the implementation of the RFID-based Jewel Tracking
                    and Locker Management System, ANL has experienced improved
                    security, faster inventory management, and a more
                    streamlined customer experience. The solution has empowered
                    ANL to operate with greater efficiency while ensuring the
                    utmost security for their valuable inventory.
                  </p>
                  <p className="fz-18" style={{ color: "#555" }}>
                    By adopting this innovative solution, ANL has taken
                    significant steps toward modernizing their operations and
                    meeting the demands of a dynamic, security-conscious
                    industry.
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
