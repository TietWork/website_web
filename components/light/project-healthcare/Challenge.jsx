import React from 'react';

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Subheading */}
              <div className="col-lg-5">
                <h4 className="mb-50">01 . The CaseStudy</h4>
                <h6 style={{ color: '#007bff' }} className="mb-30">
                  Case Study: Real-Time Skin Radiation Detection for Early Cancer Diagnosis
                </h6>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                    Early detection of skin cancer is crucial for improving patient survival rates. However, traditional diagnostic methods often miss early-stage signs, delaying treatment. Healthcare providers sought a non-invasive, portable solution capable of detecting abnormal skin radiation levels in real time.
                  </h5>
                  <p className="fz-18" style={{ color: '#555' }}>
                    Thirdeye collaborated with a medical device manufacturer to develop software for a pen-like device equipped with Bluetooth technology, designed to detect skin radiation in real time. Our software, utilizing Windows Surface technology, powers the device’s interface, enabling live visualization of radiation levels through a digital gauge. This allows healthcare providers to identify anomalies and initiate early intervention.
                  </p>

                  <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                    Solution
                  </h6>
                  <p className="fz-18" style={{ color: '#555' }}>
                    Thirdeye’s software solution powers the pen-like device, providing healthcare professionals with real-time, accurate radiation readings. Key features of the solution included:
                  </p>
                  <ul className="fz-18" style={{ color: '#555', paddingLeft: '20px' }}>
                    <li><strong>Real-Time Radiation Detection</strong> – Instant feedback through a live gauge, providing visual cues of abnormal skin radiation.</li>
                    <li><strong>Bluetooth Connectivity</strong> – Wireless data transmission to Windows Surface devices, ensuring mobility and ease of use.</li>
                    <li><strong>Advanced Analytics</strong> – Analyzing radiation patterns to detect potential cancer cells, improving diagnostic accuracy.</li>
                    <li><strong>User-Friendly Interface</strong> – Intuitive design for seamless operation by healthcare professionals in various environments.</li>
                    <li><strong>Portability and Scalability</strong> – Designed to function in clinics, hospitals, and remote medical camps.</li>
                  </ul>

                  <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                    Key Outcomes & Impact
                  </h6>
                  <ul className="fz-18" style={{ color: '#555', paddingLeft: '20px' }}>
                    <li><strong>Enhanced Early Detection</strong> – Increased detection rates of early-stage skin cancer, enabling timely treatment and improving patient outcomes.</li>
                    <li><strong>Operational Efficiency</strong> – Streamlined diagnostic processes, reducing the need for invasive biopsies.</li>
                    <li><strong>Improved Patient Engagement</strong> – Real-time feedback offers transparency, enhancing patient trust and involvement in their healthcare journey.</li>
                    <li><strong>Scalable Deployment</strong> – Successfully deployed across multiple healthcare facilities, with potential for expansion into dermatology clinics globally.</li>
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
