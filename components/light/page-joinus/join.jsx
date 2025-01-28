"use client";
import React from "react";

const positions = [
  {
    title: "Software Developer Trainee",
    description:
      "Kickstart your software development career by contributing to the design, development, testing, and maintenance of cutting-edge applications. Collaborate with experienced teams to deliver high-quality software solutions while gaining hands-on experience with the latest technologies.",
  },
  {
    title: "Mobile App Developer (2+ years)",
    description:
      "Develop and enhance high-performance mobile applications for Android and iOS platforms using React Native. With a minimum of 2 years of experience, focus on delivering clean, maintainable code, optimizing app performance, and ensuring seamless user experiences. Collaborate with designers and backend developers to implement engaging and functional features.",
  },
  {
    title: ".NET Developer (2+ years)",
    description:
      "Design, develop, and maintain robust software solutions using .NET technologies. Bring at least 2 years of experience to the role, implementing scalable architectures, performance optimization, and security testing to ensure software reliability and quality. Collaborate with cross-functional teams to deliver effective and efficient solutions that meet business needs.",
  },
  // Add more positions here
];

function Join() {
  return (
    <section className="careers section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="careers-content">
              <h2 className="main-title mb-30 main-color" style={{textTransform: "uppercase" , fontSize: "30px", textAlign: "center"}}>
                Passionate about technology and innovation?
              </h2>
              <p
                className="intro-text mb-40"
                style={{
                  fontSize: "18px",
                  // color: "#000",
                  textAlign: "left",
                  fontFamily: "Satoshi-Variable",
                }}
              >
                At Third Eye Info Technology, we believe in pushing boundaries,
                creating solutions, and making a difference in the tech world.
                Join a dynamic and collaborative environment where growth,
                creativity, and impact are at the heart of everything we do.
              </p>

              {/* Open Positions */}
              <div className="positions-section mb-50">
                <h4 className="sub-title mb-20">Current Openings</h4>
                {positions.map((position, index) => (
                  <div key={index} className="position">
                    <h5
                      style={{ textTransform: "uppercase", textAlign: "left" }}
                    >
                      {position.title}
                    </h5>
                    <p
                      style={{
                        fontSize: "18px",
                        // color: "#000",
                        textAlign: "left",
                        fontFamily: "Satoshi-Variable",
                      }}
                    >
                      {position.description}
                    </p>
                  </div>
                ))}
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
          border-bottom: 2px solid #022d5bff;
          padding-bottom: 10px;
        }
        .positions-section .position {
          margin-bottom: 20px;
        }
        .positions-section .position h5 {
          color: #007bff;
          margin-bottom: 10px;
        }
        .application-section a {
          color: #007bff;
        }
        .diversity-section {
          background-color: #e8f1f5ff;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
        }
      `}</style>
    </section>
  );
}

export default Join;
