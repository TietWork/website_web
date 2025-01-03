import React from 'react';

function Solution() {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Title */}
              <div className="col-lg-5">
                <h4 className="mb-50">
                  02 . The <span style={{ color: '#007bff' }}>Solution</span>
                </h4>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Client Testimonials */}
                  <h6 style={{ color: '#007bff' }} className="mb-20">
                    Client Testimonials
                  </h6>
                  <blockquote className="mb-30 fz-18" style={{ color: '#555', fontStyle: 'italic' }}>
                    "The IoT smart locks have transformed our office security system. The ability to
                    track and manage access remotely through the app has given us peace of mind and
                    flexibility."
                    <br />
                    <strong>– Facilities Manager, Leading IT Firm</strong>
                  </blockquote>
                  <blockquote className="mb-40 fz-18" style={{ color: '#555', fontStyle: 'italic' }}>
                    "As a factory owner, tamper-proof locks are critical for our operations. These
                    locks have proven to be resilient and reliable under tough conditions."
                    <br />
                    <strong>– Operations Head, Manufacturing Unit</strong>
                  </blockquote>

                  {/* Technical Specifications */}
                  <h6 style={{ color: '#007bff' }} className="mb-20">
                    Technical Specifications
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                    <li>
                      <strong>Material:</strong> Hardened Steel
                    </li>
                    <li>
                      <strong>Access Modes:</strong> Keypad, Mobile App
                    </li>
                    <li>
                      <strong>Security Levels:</strong> Dynamic Passcode, Proprietary Algorithm
                    </li>
                    <li>
                      <strong>Connectivity:</strong> IoT-enabled, Mobile App Controlled
                    </li>
                    <li>
                      <strong>Battery:</strong> Rechargeable with Low Battery Alerts
                    </li>
                    <li>
                      <strong>Environmental Protection:</strong> Tamper-Proof, Dustproof,
                      All-Weather Design
                    </li>
                  </ul>

                  {/* Conclusion */}
                  <h6 style={{ color: '#007bff' }} className="mb-20">
                    Conclusion
                  </h6>
                  <p className="fz-18" style={{ color: '#555' }}>
                    Our IoT-based digital smart locks redefine the security landscape by combining
                    cutting-edge technology with robust physical protection. Designed to offer
                    unmatched reliability, ease of use, and scalability, these locks empower users
                    with enhanced control over their premises.
                  </p>
                  <p className="fz-18" style={{ color: '#555' }}>
                    For more information or to request a demo, contact us today!
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
