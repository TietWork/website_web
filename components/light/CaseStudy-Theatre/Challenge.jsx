import React from "react";

function Challenge() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Right Section - Content */}
              <div className="col-lg-12">
                <div className="text">
                  {/* Project Overview Section */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mb-20"
                  >
                    Overview
                  </h6>
                  <p
                    className="fz-18 mb-40"
                    style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
                  >
                    Third Eye, in partnership with ZyberTech, collaborated with
                    a leading theatre in the USA to enhance user experience and
                    operational efficiency through a cutting-edge Digital
                    Information Display System. The project aimed to address
                    communication delays and operational inefficiencies,
                    transforming the theatre&apos;s management of real-time
                    information.
                  </p>

                  {/* Challenges Section */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mb-20"
                  >
                    Challenges
                  </h6>
                  <p
                    className="fz-18 mb-40"
                    style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
                  >
                    The theatre faced significant challenges in providing
                    patrons and staff with real-time, accurate information.
                    These inefficiencies hindered the overall theatre experience
                    and operational effectiveness.
                  </p>

                  {/* Key Issues Section */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mb-20"
                  >
                    Key Issues
                  </h6>
                  <ul
                    className="fz-18 mb-40"
                    style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
                  >
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
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mb-20"
                  >
                    The Solution
                  </h6>
                  <p
                    className="fz-18 mb-40"
                    style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
                  >
                    Third Eye and ZyberTech developed a modern Digital
                    Information Display System to automate and enhance real-time
                    information communication within the theatre. This solution
                    addressed the key issues by providing dynamic, consistent,
                    and real-time updates across all display screens,
                    significantly improving operational and user efficiency.
                  </p>

                  {/* Key Features Section */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mb-20"
                  >
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

                  {/* Key Outcomes Section */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mt-20 mb-20"
                  >
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
                  {/* Conclusion */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mt-40 mb-20"
                  >
                    Conclusion
                  </h6>
                  <p
                    className="fz-18"
                    style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
                  >
                    Third Eye&apos;s innovative Digital Information Display
                    System has revolutionized the theatre experience by
                    automating real-time updates, enhancing operational
                    efficiency, and improving patron satisfaction. This project
                    reinforces Third Eye&apos;s dedication to leveraging
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

export default Challenge;
