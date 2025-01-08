import React from "react";

function Challenge() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Subheadings */}
              <div className="col-lg-5">
                <h4 className="mb-50">
                  01 . <span style={{ color: "#007bff" }}>Case study</span>
                </h4>{" "}
                <h3 className="mb-20" style={{ color: "#333" }}>
                   Overview
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Challenges
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Issues
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  The Solution
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Features
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Outcomes
                </h3>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Project Overview Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                     Overview
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Thirdeye, in partnership with ZyberTech, collaborated with a
                    leading theatre in the USA to enhance user experience and
                    operational efficiency through a cutting-edge{" "}
                    <strong>Digital Information Display System</strong>. The
                    project aimed to address communication delays and
                    operational inefficiencies, transforming the theatre&apos;s
                    management of real-time information.
                  </p>

                  {/* Challenges Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Challenges
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    The theatre faced significant challenges in providing
                    patrons and staff with real-time, accurate information.
                    These inefficiencies hindered the overall theatre experience
                    and operational effectiveness.
                  </p>

                  {/* Key Issues Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Key Issues
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Lack of Real-Time Seat Tracking:</strong> Patrons
                      and staff struggled with outdated seat availability
                      information.
                    </li>
                    <li>
                      <strong>Manual Updates:</strong> The system required
                      frequent manual updates, leading to delays and
                      inaccuracies.
                    </li>
                    <li>
                      <strong>Inconsistent Information Across Screens:</strong>{" "}
                      Multiple displays often showed conflicting data, causing
                      confusion.
                    </li>
                    <li>
                      <strong>Poor User Experience:</strong> Inefficient
                      communication negatively impacted the overall
                      theatre-going experience.
                    </li>
                  </ul>

                  {/* The Solution Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    The Solution
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Thirdeye and ZyberTech developed a modern <strong>Digital
                    Information Display System</strong> to automate and enhance
                    real-time information communication within the theatre. This
                    solution addressed the key issues by providing dynamic,
                    consistent, and real-time updates across all display
                    screens, significantly improving operational and user
                    efficiency.
                  </p>

                  {/* Key Features Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Key Features
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Dynamic Seat Filling Visualization:</strong>{" "}
                      Real-time seat occupancy tracking displayed with
                      intuitive, color-coded visuals.
                    </li>
                    <li>
                      <strong>Multi-Screen Information Sync:</strong> Consistent
                      and synchronized information displayed across all screens.
                    </li>
                    <li>
                      <strong>Automated Updates:</strong> Continuous, real-time
                      updates minimized manual intervention.
                    </li>
                    <li>
                      <strong>User-Friendly Interface:</strong> Simplified
                      content management for theatre staff.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
