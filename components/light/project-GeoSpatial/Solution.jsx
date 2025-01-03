import React from 'react';

function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Title */}
              <div className="col-lg-5">
                <h4 className="mb-30">02 . The <span style={{ color: '#007bff' }}>Conclusion</span></h4>
                <h3 className="mb-20" style={{ color: '#333' }}>
                  Key Outcomes
                </h3>
                <h3 className="mb-20" style={{ color: '#333' }}>
                  Real-time Monitoring
                </h3>
                <h3 className="mb-20" style={{ color: '#333' }}>
                  Sustainability Benefits
                </h3>
                <h3 className="mb-20" style={{ color: '#333' }}>
                  Conclusion
                </h3>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Key Outcomes Section */}
                  <h6 style={{ color: '#007bff' }} className="mb-20">
                    Key Outcomes and Impact
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                    <li>
                      <strong>60% Increase in Revenue:</strong> Enhanced data-driven decision-making and reduced crop losses led to substantial revenue growth.
                    </li>
                    <li>
                      <strong>Pest Mitigation by 70%:</strong> Early detection and preemptive action resulted in a sharp decrease in pest-related damages.
                    </li>
                    <li>
                      <strong>Automated Reporting:</strong> Streamlined reporting processes saved considerable time, reducing manual labor by 50%.
                    </li>
                  </ul>

                  {/* Real-time Monitoring Section */}
                  <h6 style={{ color: '#007bff' }} className="mb-20">
                    Real-time Monitoring and Response
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                    <li>
                      <strong>Live Data Access:</strong> Managers could track agricultural performance across various sites in real time, improving response times to potential threats.
                    </li>
                    <li>
                      <strong>Quick Turnaround for Pest Control:</strong> Pest outbreak notifications allowed for faster pesticide application, protecting crops at critical times.
                    </li>
                  </ul>

                  {/* Sustainability Section */}
                  <h6 style={{ color: '#007bff' }} className="mb-20">
                    Sustainability and Environmental Benefits
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                    <li>
                      <strong>Optimized Resource Utilization:</strong> By monitoring soil health and crop growth, water and fertilizer usage was optimized, reducing wastage by 40%.
                    </li>
                    <li>
                      <strong>Reduced Carbon Footprint:</strong> Aircraft and drones replaced traditional ground surveillance methods, lowering fuel consumption and emissions.
                    </li>
                  </ul>

                  {/* Conclusion Section */}
                  <h6 style={{ color: '#007bff' }} className="mb-20">
                    Conclusion
                  </h6>
                  <p className="fz-18" style={{ color: '#555' }}>
                    This case study highlights Thirdeye’s expertise in delivering innovative, technology-driven solutions that empower clients to tackle complex challenges head-on. By leveraging cutting-edge geospatial technology and real-time data processing, Thirdeye has played a pivotal role in transforming agricultural operations for this leading Australian organization.
                  </p>
                  <p className="fz-18" style={{ color: '#555' }}>
                    The success of this project underscores Thirdeye’s commitment to developing tailored solutions that drive efficiency, enhance productivity, and foster sustainable practices in diverse industries.
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
