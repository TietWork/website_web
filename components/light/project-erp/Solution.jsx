import React from "react";

function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row">

              {/* Right Section - Content */}
              <div className="col-lg-12 ">
                <div className="text">

                  {/* Benefits Delivered */}
                  <h6 style={{ color: "#007bff", textTransform:"uppercase" }} className="mb-20">
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

                  {/* Conclusion */}
                  <h6 style={{ color: "#007bff", textTransform:"uppercase" }} className="mb-20">
                    Conclusion
                  </h6>
                  <p className="fz-18" style={{ color: "#000", fontFamily:"Satoshi-Variable"}}>
                    Our IoT-based digital smart locks redefine the security
                    landscape by combining cutting-edge technology with robust
                    physical protection. Designed to offer unmatched
                    reliability, ease of use, and scalability, these locks
                    empower users with enhanced control over their premises.
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
