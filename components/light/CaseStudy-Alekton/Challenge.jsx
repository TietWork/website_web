import React from "react";

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-12">
                <div className="text">
                  {/* Project Overview Section */}
                  <h3
                    style={{
                      color: "#000",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                    className="mb-30 fw-400 line-height-40"
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
                    A leading steel component manufacturer collaborated with
                    Thirdeye to revolutionize their manufacturing workflow by
                    implementing a Digital Job Card System. The
                    project aimed to address inefficiencies in component
                    tracking and enhance production transparency through a
                    custom mobile application integrated with QR code
                    technology.
                  </p>

                  {/* Challenges Section */}
                  <h6
                    style={{
                      color: "#007bff",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                    className="mb-20"
                  >
                    Challenges
                  </h6>
                  <p
                    className="fz-18 mb-40"
                    style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
                  >
                    The manufacturer faced critical challenges in maintaining
                    efficient production workflows due to manual processes.
                    Their reliance on traditional job cards led to delays,
                    inaccuracies, and reduced productivity, significantly
                    affecting their operational performance.
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
                    style={{ color: "#000", textAlign: "left" }}
                  >
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
                    Thirdeye introduced a{" "}
                    Digital Job Card System powered by QR code
                    technology to replace manual processes. This mobile-friendly
                    Android app provided real-time updates on job statuses and
                    improved communication between production teams,
                    significantly enhancing operational efficiency.
                  </p>

                  {/* Key Features Section */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mb-20"
                  >
                    Key Features
                  </h6>
                  <ul
                    className="fz-18 mb-40"
                    style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
                  >
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
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mb-20"
                  >
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
                      support the manufacturer&apos;s expanding operations.
                    </li>
                  </ul>

                  {/* Technology Stack */}
                  <h6
                    style={{ color: "#007bff", textTransform: "uppercase" }}
                    className="mt-40 mb-20"
                  >
                    Technology Stack
                  </h6>
                  <ul
                    className="fz-18"
                    style={{ color: "#000", paddingLeft: "20px" }}
                  >
                    <li>
                      <strong>Platform:</strong> Android (Mobile App)
                    </li>
                    <li>
                      <strong>Tools:</strong> QR Code API, Firebase (for
                      real-time updates)
                    </li>
                    <li>
                      <strong>Backend:</strong> Node.js, MongoDB
                    </li>
                    <li>
                      <strong>Frontend:</strong> React Native
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
                    Thirdeye&apos;s innovative Digital Job Card System has
                    revolutionized the manufacturing workflow, driving
                    efficiency and enhancing operational transparency. By
                    digitizing the job tracking process and integrating QR code
                    technology, the manufacturer experienced faster production
                    cycles, improved accuracy, and increased overall
                    productivity. This project underscores Thirdeye&apos;s
                    commitment to delivering transformative digital solutions
                    tailored to the unique needs of the manufacturing sector.
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
