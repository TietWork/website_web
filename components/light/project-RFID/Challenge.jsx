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
                  01 . <span style={{ color: "#007bff" }}>The Project</span>
                </h4>{" "}
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Project Overview
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Features
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  How it Works
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Technology Stack
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Benefits to ANL
                </h3>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Project Overview Section */}
                  <h3
                    className="mb-30 fw-400 line-height-40"
                    style={{ color: "#000" }}
                  >
                    Overview
                  </h3>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Our RFID-based Jewel Tracking and Locker Management System
                    is an innovative solution designed to streamline the
                    management of jewels in pawn shops, providing both security
                    and operational efficiency. This integrated
                    hardware-software solution allows businesses like ANL to
                    track the movement and storage of jewels with precision and
                    ease.
                  </p>

                  {/* Key Features Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Key Features
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Real-time Jewel Tracking:</strong> RFID tags and
                      readers track jewel locations with precision.
                    </li>
                    <li>
                      <strong>Web-Based Interface:</strong> Includes a
                      user-friendly dashboard, locker management, and audit
                      trails.
                    </li>
                    <li>
                      <strong>Inventory & Security Management:</strong> Features
                      real-time tracking, role-based access control, and
                      automated alerts.
                    </li>
                    <li>
                      <strong>Efficient Check-In/Check-Out Process:</strong>{" "}
                      Quick and accurate processes powered by RFID technology.
                    </li>
                    <li>
                      <strong>Reporting & Analytics:</strong> Generate detailed
                      reports and visualize trends for operational insights.
                    </li>
                  </ul>

                  {/* How it Works Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    How it Works
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Jewel Registration:</strong> Jewels are tagged
                      with unique RFID identifiers storing essential
                      information.
                    </li>
                    <li>
                      <strong>Locker Tracking:</strong> RFID readers update the
                      system whenever jewels are added or removed from lockers.
                    </li>
                    <li>
                      <strong>Check-In/Check-Out:</strong> Scanned RFID tags
                      update inventory instantly during transactions.
                    </li>
                    <li>
                      <strong>Monitoring:</strong> Real-time updates and logs
                      provide comprehensive tracking of jewel movements.
                    </li>
                    <li>
                      <strong>Security:</strong> Full audit trails ensure
                      accountability and enhance security.
                    </li>
                  </ul>

                  {/* Technology Stack Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Technology Stack
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    <strong>Hardware:</strong> RFID Tags, Readers, and Antennas.
                    <br />
                    <strong>Software:</strong> Custom web application built with
                    React, Node.js, and RFID SDKs.
                    <br />
                    <strong>Database:</strong> MySQL/SQL Server.
                    <br />
                    <strong>Cloud/Hosting:</strong> AWS or Azure for secure and
                    scalable hosting.
                  </p>

                  {/* Benefits to ANL Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Benefits to ANL
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Increased Security:</strong> Real-time tracking
                      reduces theft and loss risks.
                    </li>
                    <li>
                      <strong>Operational Efficiency:</strong> Automates manual
                      tasks, improving workflow.
                    </li>
                    <li>
                      <strong>Accurate Inventory Management:</strong> Ensures
                      up-to-date records with real-time updates.
                    </li>
                    <li>
                      <strong>Cost Savings:</strong> Minimizes losses associated
                      with misplaced or stolen items.
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
