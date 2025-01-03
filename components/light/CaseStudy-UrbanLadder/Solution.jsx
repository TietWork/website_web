import React from 'react';

function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Subheading */}
              <div className="col-lg-5">
                <h4 className="mb-50">02 . The Quotes</h4>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Key Quotes Section */}
                  <h6 style={{ color: '#007bff' }} className="mb-30">
                    Key Quotes from the Client
                  </h6>
                  <blockquote className="mb-30" style={{ fontStyle: 'italic', borderLeft: '4px solid #007bff', paddingLeft: '15px', color: '#555' }}>
                    “The track and trace solution developed by Thirdeye has transformed how we manage production. Every stage is now visible and automated, reducing inefficiencies across our operations.”
                    <br />
                    <span style={{ fontWeight: 'bold', color: '#333' }}>– Production Head, UrbanLadder</span>
                  </blockquote>
                  <blockquote className="mb-30" style={{ fontStyle: 'italic', borderLeft: '4px solid #007bff', paddingLeft: '15px', color: '#555' }}>
                    “With optimized cutting patterns and real-time inventory tracking, we’ve significantly reduced material wastage and increased productivity. This solution has positioned us to scale our operations seamlessly.”
                    <br />
                    <span style={{ fontWeight: 'bold', color: '#333' }}>– Operations Manager</span>
                  </blockquote>

                  {/* Conclusion Section */}
                  <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                    Conclusion
                  </h6>
                  <p className="fz-18" style={{ color: '#555' }}>
                    The collaboration between Thirdeye and UrbanLadder stands as a testament to how digital transformation can drive efficiency and innovation in manufacturing processes. By integrating track and trace capabilities with ERP systems, Thirdeye empowered UrbanLadder to streamline workflows, optimize resource utilization, and deliver superior products to their clients.
                  </p>
                  <p className="fz-18" style={{ color: '#555', marginTop: '20px' }}>
                    This case study reflects Thirdeye’s commitment to delivering high-impact solutions that enhance productivity and operational excellence in manufacturing and interior design industries.
                  </p>
                </div>

                {/* Technology Stack */}
                <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                  Technology Stack
                </h6>
                <ul className="fz-18" style={{ color: '#555', paddingLeft: '20px' }}>
                  <li><strong>Track and Trace:</strong> Real-time production stage tracking and automation.</li>
                  <li><strong>ERP System:</strong> Integrated inventory and resource management.</li>
                  <li><strong>Cutting Optimization:</strong> Algorithms to minimize material waste by up to 30%.</li>
                  <li><strong>Data Analytics:</strong> Dashboards for real-time insights and decision-making.</li>
                  <li><strong>Integration:</strong> Seamless collaboration with logistics and production teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
