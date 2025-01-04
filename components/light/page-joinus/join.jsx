"use client";
import React from "react";

function Join() {
  return (
    <section className="careers section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="careers-content">
              <h2 className="main-title mb-30">Join Our Team at Third Eye Info Technology</h2>
              <p className="intro-text mb-40">
                Are you passionate about technology and innovation? At Third Eye Info Technology, we believe in pushing boundaries, creating solutions, and making a difference in the tech world. Join a dynamic and collaborative environment where growth, creativity, and impact are at the heart of everything we do.
              </p>

              {/* About Us */}
              <div className="about-section mb-50">
                <h4 className="sub-title mb-20">About Us</h4>
                <p>
                  Innovating since 2001, Third Eye Info Technology has over 20 years of experience, catering to 100+ clients across 12+ industries. Headquartered in Chennai, with partnerships in the USA, Australia, and UAE, we simplify complexities through smart technology and deliver scalable solutions that empower businesses.
                </p>
                <p>
                  Our vision: <strong>"A Future Built on Integrity and Innovation"</strong>.
                </p>
              </div>

              {/* Open Positions */}
              <div className="positions-section mb-50">
                <h4 className="sub-title mb-20">Current Openings</h4>
                
                <div className="position">
                  <h5>Software Developer</h5>
                  <p>
                    Design, develop, test, and maintain software applications using the latest technologies. Collaborate with cross-functional teams to ensure high-quality deliverables.
                  </p>
                </div>

                <div className="position">
                  <h5>Software Designer</h5>
                  <p>
                    Create and implement intuitive UI/UX designs. Conduct user research, usability testing, and prototyping to deliver exceptional user experiences.
                  </p>
                </div>

                <div className="position">
                  <h5>Software Tester</h5>
                  <p>
                    Plan and execute testing strategies to ensure the reliability and quality of software products. Conduct functional, performance, and security testing.
                  </p>
                </div>

                <div className="position">
                  <h5>Software Project Manager</h5>
                  <p>
                    Manage project scope, schedule, and resources. Collaborate with stakeholders to deliver projects on time and within budget.
                  </p>
                </div>

                <div className="position">
                  <h5>Software Salesperson</h5>
                  <p>
                    Drive sales by identifying opportunities, building client relationships, and demonstrating the value of our solutions.
                  </p>
                </div>
              </div>

              {/* Application Section */}
              <div className="application-section">
                <h4 className="sub-title mb-20">How to Apply?</h4>
                <p>
                  If you are interested in any of these positions, send your resume to <a href="mailto:career@thirdeyeinfotech.com">career@thirdeyeinfotech.com</a>. Please include your availability, salary expectations, and relevant skills and experience in your application.
                </p>
                <p>
                  We thank all applicants for their interest, but only those selected for an interview will be contacted.
                </p>
              </div>

              {/* Diversity Statement */}
              <div className="diversity-section mt-40">
                <p>
                  <strong>Third Eye Info Technology</strong> is an equal opportunity employer that values diversity and inclusion. We encourage applications from all qualified candidates, regardless of race, color, religion, gender, or any other protected status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .careers-content {
          background-color: #f9f9f9;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .main-title {
          text-align: center;
          color: #333;
        }
        .sub-title {
          color: #333;
          border-bottom: 2px solid #ff7f50;
          padding-bottom: 10px;
        }
        .positions-section .position {
          margin-bottom: 20px;
        }
        .positions-section .position h5 {
          color: #ff7f50;
          margin-bottom: 10px;
        }
        .application-section a {
          color: #007bff;
        }
        .diversity-section {
          background-color: #e8f5e9;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
      `}</style>
    </section>
  );
}

export default Join;
