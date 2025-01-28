import React from "react";

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Right Section - Content */}
              <div className="col-lg-12">
                <div className="text">
                  {/* Project Overview Section */}
                  <h3
                    className="mb-30 line-height-40"
                    style={{
                      color: "#007BFF",
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                  >
                    Overview
                  </h3>
                  <p
                    className="fz-18 mb-40"
                    style={{
                      color: "#000",
                      textAlign: "left",
                      fontFamily: "Satoshi-Variable",
                    }}
                  >
                    Our RFID-based Jewel Tracking and Locker Management System
                    is an innovative solution designed to streamline the
                    management of jewels in pawn shops, providing both security
                    and operational efficiency. This integrated
                    hardware-software solution allows businesses to track the
                    movement and storage of jewels with precision and ease,
                    ensuring improved accountability and peace of mind.
                  </p>

                  {/* Key Features Section */}
                  <h6
                    style={{
                      color: "#007bff",
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                    className="mb-20"
                  >
                    Key Features
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#000", fontFamily: "Satoshi-Variable" }}>
                    <li>
                      <strong>• Real-time Jewel Tracking:</strong> RFID tags and
                      readers ensure the accurate and immediate tracking of
                      jewels, providing complete visibility into their location
                      at all times. This eliminates the risk of misplacement and
                      ensures operational transparency.
                    </li>
                    <li>
                      <strong>• Web-Based Interface:</strong> A user-friendly,
                      responsive dashboard offers tools for locker management,
                      detailed transaction logs, and advanced audit trails,
                      making it easy for staff to manage and track jewels.
                    </li>
                    <li>
                      <strong>• Inventory & Security Management:</strong> The
                      system combines role-based access control with automated
                      alerts to enhance security. Real-time tracking and
                      inventory updates reduce errors and maintain data
                      integrity.
                    </li>
                    <li>
                      <strong>• Efficient Check-In/Check-Out Process:</strong> The
                      RFID-based system accelerates transaction processes,
                      ensuring that jewel movements are quick and accurately
                      recorded without manual intervention, saving time and
                      reducing errors.
                    </li>
                    <li>
                      <strong>• Reporting & Analytics:</strong> Detailed reports
                      and data visualizations provide insights into inventory
                      trends, operational efficiency, and security performance,
                      empowering data-driven decision-making.
                    </li>
                  </p>

                  {/* How it Works Section */}
                  <h6
                    style={{
                      color: "#007bff",
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                    className="mb-20"
                  >
                    How it Works
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#000", fontFamily: "Satoshi-Variable" }}>
                    <li>
                      <strong>• Jewel Registration:</strong> Jewels are equipped
                      with unique RFID tags containing essential information
                      such as ownership, value, and location. This ensures
                      detailed identification for every item in the inventory.
                    </li>
                    <li>
                      <strong>• Locker Tracking:</strong> RFID-enabled lockers
                      automatically detect when jewels are added or removed,
                      instantly updating the system and providing a complete log
                      of all movements.
                    </li>
                    <li>
                      <strong>• Check-In/Check-Out:</strong> Transactions are
                      streamlined with RFID scanning, automatically updating
                      inventory and ensuring precise tracking without manual
                      entry errors.
                    </li>
                    <li>
                      <strong>• Monitoring:</strong> Real-time updates allow
                      managers to monitor the exact location and status of every
                      jewel, ensuring operational visibility and accountability.
                    </li>
                    <li>
                      <strong>• Security:</strong> Comprehensive audit trails and
                      real-time alerts ensure enhanced security by identifying
                      any discrepancies or unauthorized actions immediately.
                    </li>
                  </p>

                  {/* Technology Stack Section */}
                  <h6
                    style={{
                      color: "#007bff",
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                    className="mb-20"
                  >
                    Technology Stack
                  </h6>
                  <p
                    className="fz-18 mb-40"
                    style={{
                      color: "#000",
                      textAlign: "left",
                      fontFamily: "Satoshi-Variable",
                    }}
                  >
                    <li>
                      <strong>• Hardware:</strong> RFID Tags, Readers, and
                      Antennas for seamless tracking and reliable data
                      collection.
                    </li>
                    <li>
                      <strong>• Software:</strong> A robust web application built
                      with React and Node.js, fully integrated with RFID SDKs
                      for exceptional performance.
                    </li>
                    <li>
                      <strong>• Database:</strong> MySQL/SQL Server for secure and
                      efficient data storage and retrieval.
                    </li>
                    <li>
                      <strong>• Cloud/Hosting:</strong> Scalable and secure
                      infrastructure powered by AWS or Azure.
                    </li>
                  </p>

                  {/* Benefits to ANL Section */}
                  <h6
                    style={{
                      color: "#007bff",
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontSize: "30px",
                      fontWeight: "600",
                    }}
                    className="mb-20"
                  >
                    Benefits to Businesses
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#000" , fontFamily: "Satoshi-Variable"}}>
                    <li>
                      <strong>• Enhanced Security:</strong> Real-time tracking
                      ensures that all jewels are accounted for, significantly
                      reducing risks associated with theft or loss.
                    </li>
                    <li>
                      <strong>• Improved Operational Efficiency:</strong> By
                      automating time-consuming tasks, the system enhances
                      workflow and enables staff to focus on more critical
                      activities.
                    </li>
                    <li>
                      <strong>• Accurate Inventory Management:</strong> The system
                      maintains up-to-date records with precise, real-time
                      updates, ensuring that inventory levels are always
                      accurate.
                    </li>
                    <li>
                      <strong>• Cost Savings:</strong> Reduces financial losses
                      caused by misplaced or stolen jewels while minimizing
                      operational overhead with automated processes.
                    </li>
                  </p>

                  {/* Right Section - Content */}
                  <div className="col-lg-12">
                    <div className="text">
                      <h6
                        style={{
                          color: "#007bff",
                          textTransform: "uppercase",
                          fontSize: "30px",
                          fontWeight: "600",
                        }}
                        className="mb-20"
                      >
                        Conclusion
                      </h6>
                      <p
                        className="fz-18"
                        style={{
                          color: "#000",
                          fontFamily: "Satoshi-Variable",
                        }}
                      >
                        Since the implementation of the RFID-based Jewel
                        Tracking and Locker Management System, the organization
                        has experienced improved security, faster inventory
                        management, and a more streamlined customer experience.
                        The solution has empowered the organization to operate
                        with greater efficiency while ensuring the utmost
                        security for their valuable inventory.
                        By adopting this innovative solution, ANL has taken
                        significant steps toward modernizing their operations
                        and meeting the demands of a dynamic, security-conscious
                        industry.
                      </p>
                      <br/>
                    </div>
                  </div>
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
