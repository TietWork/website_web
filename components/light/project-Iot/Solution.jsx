import React from "react";

function Solution() {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">

                  {/* Technical Specifications */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Technical Specifications
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Material:</strong> Hardened Steel
                    </li>
                    <li>
                      <strong>Access Modes:</strong> Keypad, Mobile App
                    </li>
                    <li>
                      <strong>Security Levels:</strong> Dynamic Passcode,
                      Proprietary Algorithm
                    </li>
                    <li>
                      <strong>Connectivity:</strong> IoT-enabled, Mobile App
                      Controlled
                    </li>
                    <li>
                      <strong>Battery:</strong> Rechargeable with Low Battery
                      Alerts
                    </li>
                    <li>
                      <strong>Environmental Protection:</strong> Tamper-Proof,
                      Dustproof, All-Weather Design
                    </li>
                  </ul>

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
