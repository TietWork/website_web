"use client";
import React from "react";
import { motion } from "framer-motion";

function EngagementModels() {
  return (
    <section className="engagement-models-page position-re">
      <div className="container section-padding">
        {/* Row for Introductory Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="text text-center">
              <motion.h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#007BFF",
                  textTransform: "uppercase",
                  marginBottom: "40px",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                TAILORED SOLUTIONS FOR SUCCESS
              </motion.h2>
              <div className="row">
                <div className="col-12 text-center mb-50">
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#000",
                      textAlign: "left",
                    }}
                  >
                    Explore our diverse engagement models crafted to deliver
                    scalable, cost-effective, and high-quality software
                    solutions throughout your project journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Models Section */}
        <div className="row mt-50 justify-content-center">
          {[
            {
              title: "DEDICATED TEAM MODEL",
              description:
                "Ideal for long-term projects requiring dedicated professionals committed to your goals.",
              keyFeatures: [
                "Comprehensive team of developers, designers, and QA engineers.",
                "Scalable team size tailored to your evolving needs.",
                "Rigorous management with regular updates and clear reporting.",
              ],
              bestFor:
                "Continuous development, enterprise-grade solutions, and ongoing support.",
            },
            {
              title: "FIXED-PRICE MODEL",
              description:
                "Perfect for projects with well-defined scopes and clear deliverables.",
              keyFeatures: [
                "Predictable costs and timelines with defined milestones.",
                "Detailed project planning and scope documentation.",
                "Minimal financial risks with no cost overruns.",
              ],
              bestFor:
                "MVP development, pilot projects, and projects with fixed requirements.",
            },
            {
              title: "TIME AND MATERIAL (T&M) MODEL",
              description:
                "Flexible approach for projects with evolving requirements and iterative development cycles.",
              keyFeatures: [
                "Pay-as-you-go based on actual work hours.",
                "Agile methodology for adaptive planning and implementation.",
                "Transparent billing with detailed timesheets and progress reports.",
              ],
              bestFor:
                "Agile projects, research & development, and exploratory initiatives.",
            },
            {
              title: "OFFSHORE DEVELOPMENT CENTER (ODC)",
              description:
                "Establish a dedicated offshore team for extended support and cost-efficient operations.",
              keyFeatures: [
                "Access to skilled professionals in a secure, offshore environment.",
                "Complete infrastructure setup and management by our team.",
                "Long-term partnership with streamlined operations.",
              ],
              bestFor:
                "Scaling operations, global talent access, and ongoing needs.",
            },
          ].map((model, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div
                className="card shadow-lg p-5"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: "700",
                    color: "#007BFF",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  {model.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#000",
                    marginTop: "20px",
                  }}
                >
                  {model.description}
                </p>
                <div className="mt-4">
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#007BFF",
                      textTransform: "uppercase",
                    }}
                  >
                    Key Features:
                  </h5>
                  <ul className="list-unstyled">
                    {model.keyFeatures.map((feature, index) => (
                      <p
                        key={index}
                        style={{
                          fontSize: "16px",
                          color: "#000",
                          marginTop: "10px",
                        }}
                      >
                        {feature}
                      </p>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h5
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#007BFF",
                      textTransform: "uppercase",
                    }}
                  >
                    Best For:
                  </h5>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#000",
                    }}
                  >
                    {model.bestFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementModels;
