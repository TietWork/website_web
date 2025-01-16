'use client'
import React, { useState } from 'react';
import data from '@/l-data/services.json';

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services-boxs section-padding">
      <div className="container">
        {/* Header */}
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialties</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              What We <span className="fw-200">Offer</span>
            </h2>
          </div>
        </div>

        {/* Introductory Paragraph */}
        <div className="row">
          <div className="col-12 text-center mb-50">
            <p style={{ fontSize: '18px', color: '#555' }}>
              At Third Eye Info Technology Pvt. Ltd, we are committed to providing high-quality, innovative services that are tailored to meet your unique business needs. Our offerings range from IT services to web solutions, all designed to help you achieve long-term success.
            </p>
          </div>
        </div>

        {/* Blue Accent Line */}
        <div className="row">
          <div className="col-12 text-center">
            <hr style={{ width: '100px', borderTop: '3px solid #007bff', margin: '20px auto' }} />
          </div>
        </div>

        {/* Services */}
        <div className="row pt-30">
          {data.map((item, i) => (
            <div key={i} className="col-lg-6 col-md-12 items mb-30">
              <div
                className="item-box bg"
                style={{
                  borderRadius: '10px',
                  border: '1px solid #f0f0f0',
                  padding: '20px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="icon mb-20 text-center">
                  <img src={item.img} alt={item.title} style={{ height: '60px' }} />
                </div>
                <h5
                  className="mb-15 text-u text-center"
                  style={{ color: '#007bff', cursor: 'pointer' }}
                  onClick={() => toggleAccordion(i)}
                >
                  {item.title}
                </h5>
                <p className="text-center">{item.desc}</p>

                {/* Accordion Content */}
                {activeIndex === i && item.details && (
                  <div className="accordion-content mt-20" style={{ padding: '10px 20px', borderTop: '1px solid #ddd' }}>
                    <h6 className="fw-600 mb-15">Overview</h6>
                    <p>{item.details.overview}</p>

                    {item.details.expertise && (
                      <>
                        <h6 className="fw-600 mt-20 mb-10">Expertise</h6>
                        <ul>
                          {item.details.expertise.map((exp, idx) => (
                            <li key={idx} style={{ marginBottom: '8px' }}>
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {item.details.smart_lock_features && (
                      <>
                        <h6 className="fw-600 mt-20 mb-10">Smart Lock Features</h6>
                        <ul>
                          {item.details.smart_lock_features.map((feature, idx) => (
                            <li key={idx} style={{ marginBottom: '8px' }}>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {item.details.tools && (
                      <>
                        <h6 className="fw-600 mt-20 mb-10">Tools</h6>
                        <ul>
                          {item.details.tools.map((tool, idx) => (
                            <li key={idx} style={{ marginBottom: '8px' }}>
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {item.details.highlights && (
                      <>
                        <h6 className="fw-600 mt-20 mb-10">Highlights</h6>
                        <ul>
                          {item.details.highlights.map((highlight, idx) => (
                            <li key={idx} style={{ marginBottom: '8px' }}>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
