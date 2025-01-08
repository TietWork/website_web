import React from "react";

function Solution() {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Title */}
              <div className="col-lg-5">
                <h4 className="mb-50">
                  02 . <span style={{ color: "#007bff" }}>The Quotes</span>
                </h4>
                <h4 className="mb-50">
                  03 .{" "}
                  <span style={{ color: "#007bff" }}>Benefits Delivered</span>
                </h4>
                <h4 className="mb-50">
                  04 . <span style={{ color: "#007bff" }}>Client Success</span>
                </h4>
                <h4 className="mb-50">
                  05 . <span style={{ color: "#007bff" }}>Conclusion</span>
                </h4>
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
                    The custom ERP solution has transformed our operations.
                    From streamlined production scheduling to accurate payroll
                    management, the system has eliminated inefficiencies and
                    provided us with real-time insights that have been
                    instrumental in driving our growth.
                    <br />
                    <strong>
                      – Operations Manager, UAE-based Manufacturing Company
                    </strong>
                  </blockquote>

                  <blockquote
                    className="mb-40 fz-18"
                    style={{ color: "#555", fontStyle: "italic" }}
                  >
                    With the ERP system in place, we&apos;ve reduced planning time
                    by 90% and gained better control over our inventory and
                    workforce management. The automated workflows and quality
                    checklists have significantly boosted our productivity and
                    ensured consistent product quality.
                    <br />
                    <strong>
                      – Production Supervisor, Bangalore-based Firm
                    </strong>
                  </blockquote>


                  {/* Benefits Delivered */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Benefits Delivered
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>90% Reduction in Planning Time:</strong>{" "}
                      Streamlined processes allowed for faster decision-making
                      and resource allocation.
                    </li>
                    <li>
                      <strong>Increased Productivity:</strong> Automated
                      workflows minimized manual intervention, boosting
                      operational efficiency.
                    </li>
                    <li>
                      <strong>Reduced Inventory Costs:</strong> Improved stock
                      management reduced excess inventory and associated costs.
                    </li>
                    <li>
                      <strong>Enhanced Workforce Management:</strong> Biometric
                      tracking ensured accuracy in attendance and payroll.
                    </li>
                    <li>
                      <strong>Improved Quality Control:</strong> Checklists at
                      production stages guaranteed higher product quality.
                    </li>
                  </ul>

                  {/* Client Success */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Client Success
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Since deploying the ERP solution, both clients have reported
                    significant improvements in operational efficiency,
                    workforce management, and inventory control. The automation
                    and real-time reporting capabilities have empowered
                    leadership to make data-driven decisions, leading to
                    sustainable growth and cost savings.
                  </p>

                  {/* Conclusion */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Conclusion
                  </h6>
                  <p className="fz-18" style={{ color: "#555" }}>
                    Our IoT-based digital smart locks redefine the security
                    landscape by combining cutting-edge technology with robust
                    physical protection. Designed to offer unmatched
                    reliability, ease of use, and scalability, these locks
                    empower users with enhanced control over their premises.
                  </p>
                  <p className="fz-18" style={{ color: "#555" }}>
                    For more information or to request a demo, contact us today!
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
