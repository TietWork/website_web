import React from "react";

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Right Section - Project Description */}
              <div className="col-lg-12">
                {" "}
                {/* Changed from col-lg-15 to col-lg-12 for correct alignment */}
                <div className="text">
                  <h3
                    className="mb-30  line-height-40"
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      color: "#007BFF",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }} // Ensures left alignment
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
                    Our company is leading the charge in a prestigious national
                    initiative aimed at revolutionizing LPG distribution. We
                    have developed an innovative Automated Vending Machine
                    commissioned by the Indian public sector, designed to
                    enhance accessibility, safety, and efficiency in LPG
                    delivery. This project marks a significant step in
                    automating essential services for citizens across urban and
                    rural regions.
                  </p>

                  {/* Scope of Work */}
                  <h6
                    style={{
                      color: "#007bff",
                      fontSize: "25px",
                      fontWeight: "600",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                    className="mb-20"
                  >
                    Scope of Work
                  </h6>
                  <p
                    className="fz-18 mb-40"
                    style={{ color: "#000", textAlign: "left", fontFamily: "Satoshi-Variable" }}
                  >
                    <li>
                      <strong>Phase 1</strong>
                      <br />
                      • Designing: Comprehensive modeling and simulation of
                      machine architecture, development of scalable tech-stack
                      to support nationwide deployment, and human-centered
                      design ensuring ease of use and safety for consumers.
                    </li>
                    <li>
                      <strong>Phase 2</strong> <br /> • Technology Development:
                      AI/ML integration for advanced AI algorithms for cylinder
                      recognition, demand forecasting, and maintenance;
                      IoT-enabled infrastructure for real-time monitoring and
                      remote diagnostics to minimize downtime.
                    </li>
                    <li>
                      <strong>Phase 3</strong> <br />
                      • Manufacturing: Establishment of a state-of-the-art
                      production facility in Chennai, India; adherence to
                      international manufacturing standards to ensure durability
                      and precision; sustainable production practices to
                      minimize environmental impact.
                    </li>
                    <li>
                      <strong>Phase 4</strong> <br />
                      • Integration & Commissioning: Seamless integration with
                      existing LPG supply chains; deployment across key
                      metropolitan and rural areas to ensure widespread
                      accessibility; full-scale testing and calibration to
                      ensure reliability under diverse conditions.
                    </li>
                  </p>

                  {/* Key Features */}
                  <h6
                    style={{
                      color: "#007bff",
                      fontSize: "25px",
                      fontWeight: "600",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                    className="mb-20"
                  >
                    Key Features and Innovations
                  </h6>
                  <p
                    className="fz-18 mb-40"
                    style={{ color: "#000", textAlign: "left" , fontFamily: "Satoshi-Variable"}}
                  >
                    <li>
                      <strong>• AI-Driven Decision Making:</strong> Dynamic AI
                      models analyze usage patterns and optimize distribution
                      routes. Automated alerts for system anomalies ensure rapid
                      response and increased uptime.
                    </li>
                    <li>
                      <strong>• Advanced Safety Mechanisms:</strong> Thermal
                      Imaging Systems for continuous leak detection and
                      automated cylinder verification using weight sensors to
                      ensure safety standards compliance before dispensing.
                    </li>
                    <li>
                      <strong>• Enhanced Tracking and Traceability:</strong> QR
                      Code and RFID tracking with electroformed nickel stickers
                      on each cylinder, enabling seamless tracking from plant to
                      consumer. Real-time tracking provides supply chain
                      visibility and reduces loss or theft.
                    </li>
                    <li>
                      <strong>• User-Centric Design:</strong> An intuitive user
                      interface available in multiple languages caters to
                      diverse demographics. Mobile app integration allows for
                      self-service bookings and real-time notifications.
                    </li>
                  </p>

                  {/* Sustainability */}
                  <h6
                    style={{
                      color: "#007bff",
                      fontSize: "25px",
                      fontWeight: "600",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                    className="mb-20"
                  >
                    Sustainability and Environmental Responsibility
                  </h6>
                  <p
                    className="fz-18"
                    style={{
                      color: "#000",
                      textAlign: "left",
                      fontFamily: "Satoshi-Variable",
                    }}
                  >
                    Energy-efficient operations powered by renewable sources,
                    recyclable components, and minimal use of non-reusable
                    materials help to minimize environmental impact. Our efforts
                    ensure that the project aligns with sustainable and
                    eco-friendly practices.
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
