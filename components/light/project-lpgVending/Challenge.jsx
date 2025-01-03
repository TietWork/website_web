import React from 'react';

function Challenge() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          {/* Left Section - Title */}
          <div className="col-lg-5">
            <h2 className="mb-20">
              The <br />
              <span style={{ color: '#007bff' }}>Project</span>
            </h2>
          </div>

          {/* Right Section - Project Description */}
          <div className="col-lg-7">
            <div className="text">
              <h3 className="mb-30 fw-400 line-height-40" style={{ color: '#000' }}>
                LPG Automated Vending Machine – Revolutionizing LPG Distribution
              </h3>
              <p className="fz-18 mb-40" style={{ color: '#555' }}>
                Our company is at the forefront of a national initiative to automate LPG 
                delivery. This innovative vending machine enhances accessibility, safety, and 
                efficiency, bridging the gap between urban and rural regions.
              </p>

              {/* Scope of Work */}
              <h6 style={{ color: '#007bff' }} className="mb-20">
                Scope of Work
              </h6>
              <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                <li>
                  <strong>Phase 1 – Designing:</strong> Comprehensive machine architecture 
                  modeling, scalable tech-stack development, and human-centered design.
                </li>
                <li>
                  <strong>Phase 2 – Technology Development:</strong> AI/ML integration for 
                  demand forecasting, IoT-enabled infrastructure for real-time monitoring.
                </li>
                <li>
                  <strong>Phase 3 – Manufacturing:</strong> State-of-the-art production 
                  facility adhering to international standards, focusing on sustainability.
                </li>
                <li>
                  <strong>Phase 4 – Integration & Commissioning:</strong> Seamless supply 
                  chain integration, deployment across diverse areas, full-scale testing.
                </li>
              </ul>

              {/* Key Features */}
              <h6 style={{ color: '#007bff' }} className="mb-20">
                Key Features and Innovations
              </h6>
              <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                <li>AI-driven decision-making and automated anomaly alerts.</li>
                <li>Advanced safety mechanisms like thermal imaging for leak detection.</li>
                <li>Enhanced tracking with QR codes and RFID for end-to-end visibility.</li>
                <li>User-friendly interface and mobile app for seamless operations.</li>
              </ul>

              {/* Sustainability */}
              <h6 style={{ color: '#007bff' }} className="mb-20">
                Sustainability and Environmental Responsibility
              </h6>
              <p className="fz-18" style={{ color: '#555' }}>
                Energy-efficient operations using renewable sources, recyclable components, 
                and eco-friendly manufacturing practices to minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
