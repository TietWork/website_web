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
                <h4 className="mb-50">02 . The Client Success</h4>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
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
