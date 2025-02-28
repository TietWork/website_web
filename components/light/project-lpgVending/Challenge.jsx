import React from "react";

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* on media */}
              <div className="col-lg-12 py-5 pt-0 position-relative">
                <div className="orangeround"></div>
                <div className="voiletround"></div>
                {/* headline-on media  */}
                <div className="col-12">
                  <h3
                    className="mb-30 line-height-40"
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      color: "#007BFF",
                      textAlign: "left",
                      textTransform: "uppercase",
                    }}
                  >
                    On Media
                  </h3>
                </div>
                {/* video  */}
                <div className="col-12 mb-4 videolpg">
                  <video
                    src="/light/assets/imgs/works/lpg/lpgvideo.mp4"
                    controls
                    // autoPlay
                    muted
                    className="rounded w-100"
                  ></video>
                </div>
                {/* images  */}
                <div className="col-12 lpgvending"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 4px 16px rgba(133, 161, 255, 0.16)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '24px',
                    padding: '10px',
                  }}
                >
                  <div className="row" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0'
                  }}>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 img-1">
                      <div className="image-container">
                        <img
                          src="/light/assets/imgs/works/lpg/lpgimg2.jpeg"
                          alt="Image 2"
                        />
                        <div className="overlay"></div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 img-2">
                      <div className="image-container">
                        <img
                          src="/light/assets/imgs/works/lpg/lpgimg1.jpeg"
                          alt="Image 1"
                        />
                        <div className="overlay"></div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 img-3">
                      <div className="image-container">
                        <img
                          src="/light/assets/imgs/works/lpg/lpgimg3.jpeg"
                          alt="Image 3"
                        />
                        <div className="overlay"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* content  */}
                <div className="col-12 mt-20">
                  <p
                    className="fz-18"
                    style={{
                      color: "#000",
                      textAlign: "left",
                      fontFamily: "Satoshi-Variable",
                      textAlign: 'center'
                    }}>
                    "We’re proud to showcase our <b style={{ fontSize: '20px' }}>Automated LPG Vending Machine</b> at India Energy Week 2025, held from February 11–14
                    at the Yashobhoomi Convention Centre in New Delhi, revolutionizing <b style={{ fontSize: '20px' }}>LPG distribution across India.</b>"
                    <br />
                    <span style={{ fontSize: '17px', paddingTop: '10px' }}>
                      "We’re also honored by PM Modi’s visit to our project at Advantage Assam 2.0 – Investment and Infrastructure Summit 2025,
                      taking place in Assam, highlighting the national significance of this initiative."
                    </span>

                  </p>
                </div>
              </div>
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
                    style={{ color: "#000", textAlign: "left", fontFamily: "Satoshi-Variable" }}
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
    </section >
  );
}

export default Challenge;
