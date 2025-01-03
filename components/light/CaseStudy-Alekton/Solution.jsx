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
                <h4 className="mb-50">02 . The Solution</h4>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  <h6 style={{ color: '#007bff' }} className="mb-30">
                    Key Quotes
                  </h6>
                  <blockquote
                    className="mb-30"
                    style={{
                      fontStyle: 'italic',
                      borderLeft: '4px solid #007bff',
                      paddingLeft: '15px',
                      color: '#555',
                    }}
                  >
                    The Digital Job Card system transformed our production floor. Real-time updates have drastically cut down delays and improved our efficiency.
                    <br />
                    <span style={{ fontWeight: 'bold', color: '#333' }}>
                      – Production Manager, Alekton
                    </span>
                  </blockquote>
                  <blockquote
                    className="mb-30"
                    style={{
                      fontStyle: 'italic',
                      borderLeft: '4px solid #007bff',
                      paddingLeft: '15px',
                      color: '#555',
                    }}
                  >
                    “The QR code tracking system streamlined our operations, reducing process errors and enhancing productivity. We now have full visibility into our manufacturing process.” 
                    <br />
                    <span style={{ fontWeight: 'bold', color: '#333' }}>
                      – Operations Head, Alekton
                    </span>
                  </blockquote>
                  <p
                    className="fz-18"
                    style={{ color: '#555', marginTop: '20px' }}
                  >
                    This case study highlights Thirdeye&apos;s commitment to delivering transformative digital solutions tailored to the unique needs of the manufacturing sector.
                  </p>
                </div>

                {/* Technology Stack */}
                <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                  Technology Stack
                </h6>
                <ul
                  className="fz-18"
                  style={{ color: '#555', paddingLeft: '20px' }}
                >
                  <li>
                    <strong>Platform:</strong> Android (Mobile App)
                  </li>
                  <li>
                    <strong>Tools:</strong> QR Code API, Firebase (for real-time updates)
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, MongoDB
                  </li>
                  <li>
                    <strong>Frontend:</strong> React Native
                  </li>
                </ul>

                {/* Conclusion */}
                <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                  Conclusion
                </h6>
                <p className="fz-18" style={{ color: '#555' }}>
                  Thirdeye&apos;s innovative Digital Job Card System has revolutionized Alekton&apos;s manufacturing workflow, driving efficiency and enhancing operational transparency. By digitizing the job tracking process and integrating QR code technology, Alekton experienced faster production cycles, improved accuracy, and increased overall productivity. This project underscores Thirdeye&apos;s commitment to delivering transformative digital solutions tailored to the unique needs of the manufacturing sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
