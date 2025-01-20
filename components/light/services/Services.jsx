"use client";
import React, { useState } from "react";
import data from "@/l-data/services.json";
import { BuildCircle, Computer, Security, Analytics, CurrencyBitcoin  } from '@mui/icons-material'; // Import MUI Icons

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to get icon based on service title
  const getIcon = (title) => {
    switch (title) {
      case "Software Development":
        return <Computer style={{ fontSize: 60 }} />;
      case "AI/ML & Blockchain":
        return <CurrencyBitcoin style={{ fontSize: 60 }} />;
      case "IoT Development":
        return <BuildCircle style={{ fontSize: 60 }} />;
      case "Big Data & Business Intelligence":
        return <Analytics style={{ fontSize: 60 }} />;
      default:
        return <BuildCircle style={{ fontSize: 60 }} />; // Default icon
    }
  };

  return (
    <section className="services-boxs section-padding">
      <div className="container">
        {/* Header */}
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Services</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              What We <span className="fw-200">Offer</span>
            </h2>
          </div>
        </div>

        {/* Introductory Paragraph */}
        <div className="row">
          <div className="col-12 text-center mb-50">
            <p style={{ fontSize: "18px", color: "#555" }}>
              At Third Eye, we are committed to providing high-quality,
              innovative services that are tailored to meet your unique business
              needs. Our offerings range from IT services to web solutions, all
              designed to help you achieve long-term success.
            </p>
          </div>
        </div>

        {/* Blue Accent Line */}
        <div className="row">
          <div className="col-12 text-center">
            <hr
              style={{
                width: "100px",
                borderTop: "3px solid #007bff",
                margin: "20px auto",
              }}
            />
          </div>
        </div>

        {/* Services */}
        <div className="row pt-30">
          {data.map((item, i) => (
            <div key={i} className="col-lg-6 col-md-12 items mb-30">
              <div
                className=" bg"
                style={{
                  borderRadius: "10px",
                  border: "1px solid #f0f0f0",
                  padding: "20px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="icon mb-20">
                  {/* Render Material UI Icon based on title */}
                  {getIcon(item.title)}
                </div>
                <h5
                  className="mb-15 text-u text-center"
                  style={{ color: "#003049", cursor: "pointer" }}
                  onClick={() => toggleAccordion(i)}
                >
                  {item.title}
                </h5>
                <p>{item.desc}</p>

                {/* Accordion Content */}
                {activeIndex === i && item.details && (
                  <div
                    className="accordion-content mt-20"
                    style={{
                      padding: "10px 20px",
                      borderTop: "1px solid #ddd",
                    }}
                  >
                    <h6 className="fw-600 mb-15">Overview</h6>
                    <p>{item.details.overview}</p>

                    {item.details.expertise && (
                      <>
                        <h6 className="fw-600 mt-20 mb-10">Expertise</h6>
                        <ul>
                          {item.details.expertise.map((exp, idx) => (
                            <li key={idx} style={{ marginBottom: "8px" }}>
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {item.details.smart_lock_features && (
                      <>
                        <h6 className="fw-600 mt-20 mb-10">
                          Smart Lock Features
                        </h6>
                        <ul>
                          {item.details.smart_lock_features.map(
                            (feature, idx) => (
                              <li key={idx} style={{ marginBottom: "8px" }}>
                                {feature}
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}

                    {item.details.tools && (
                      <>
                        <h6 className="fw-600 mt-20 mb-10">Tools</h6>
                        <ul>
                          {item.details.tools.map((tool, idx) => (
                            <li key={idx} style={{ marginBottom: "8px" }}>
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
                            <li key={idx} style={{ marginBottom: "8px" }}>
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
