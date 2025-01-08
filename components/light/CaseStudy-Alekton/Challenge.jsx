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
                <h3 className="mb-20">
                   Overview
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Challenges
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Issues
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Our Solution
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Features
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Outcomes & Impact
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
                    Alekton, a leading steel component manufacturer,
                    collaborated with Thirdeye to revolutionize their
                    manufacturing workflow by implementing a{" "}
                    <strong>Digital Job Card System</strong>. The project aimed
                    to address inefficiencies in component tracking and enhance
                    production transparency through a custom mobile application
                    integrated with QR code technology.
                  </p>

                  {/* Challenges Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Challenges
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Alekton faced critical challenges in maintaining efficient
                    production workflows due to manual processes. Their reliance
                    on traditional job cards led to delays, inaccuracies, and
                    reduced productivity, significantly affecting their
                    operational performance.
                  </p>

                  {/* Key Issues Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Key Issues
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Manual Tracking:</strong> Slowed production due to
                      reliance on paper-based processes.
                    </li>
                    <li>
                      <strong>Inaccurate Job Status Reporting:</strong> Frequent
                      errors caused by manual data entries.
                    </li>
                    <li>
                      <strong>Lack of Real-Time Visibility:</strong> Inefficient
                      tracking of components across production stages.
                    </li>
                    <li>
                      <strong>Bottlenecks:</strong> Delays in quality checks and
                      inventory updates hindered workflow.
                    </li>
                  </ul>

                  {/* The Solution Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    The Solution
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Thirdeye introduced a{" "}
                    <strong>Digital Job Card System</strong> powered by QR code
                    technology to replace manual processes. This mobile-friendly
                    Android app provided real-time updates on job statuses and
                    improved communication between production teams,
                    significantly enhancing operational efficiency.
                  </p>

                  {/* Key Features Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Key Features
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Digital Job Cards:</strong> Transitioned from
                      paper to a digital platform for streamlined workflows.
                    </li>
                    <li>
                      <strong>QR Code Integration:</strong> Unique QR codes for
                      components to track progress at each stage.
                    </li>
                    <li>
                      <strong>Automated Status Updates:</strong> Real-time
                      updates via QR scans for every production checkpoint.
                    </li>
                    <li>
                      <strong>Mobile App for Live Tracking:</strong> Supervisors
                      and managers accessed component statuses instantly.
                    </li>
                    <li>
                      <strong>Reduced Processing Time:</strong> Automation
                      minimized manual interventions and accelerated production.
                    </li>
                  </ul>

                  {/* Key Outcomes Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Key Outcomes & Impact
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Production Efficiency:</strong> Reduced process
                      time by 40%, ensuring faster order fulfillment.
                    </li>
                    <li>
                      <strong>Accuracy:</strong> Significant decrease in errors
                      associated with manual job card entries.
                    </li>
                    <li>
                      <strong>Enhanced Productivity:</strong> Streamlined
                      workflows increased productivity by 35%.
                    </li>
                    <li>
                      <strong>Transparency:</strong> Real-time updates improved
                      communication and coordination across teams.
                    </li>
                    <li>
                      <strong>Scalability:</strong> The solution was scalable to
                      support Alekton&apos;s expanding operations.
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
