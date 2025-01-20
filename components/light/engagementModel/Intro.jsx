import React from "react";

function EngagementModels() {
  return (
    <section className="engagement-models-page position-re">
      <div className="container section-padding">
        {/* Row for Introductory Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="text">
              <h3
                className="main-heading fz-50 font-weight-bold "
                style={{ textTransform: "uppercase" }}
              >
                Tailored Solutions for Success
              </h3>
              <div className="row">
                <div className="col-12 text-center mb-50">
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#555",
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
              title: "Dedicated Team Model",
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
              title: "Fixed-Price Model",
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
              title: "Time and Material (T&M) Model",
              description:
                "Flexible approach for projects with evolving requirements and iterative development cycles.",
              keyFeatures: [
                "Pay-as-you-go based on actual work hours and resources utilized.",
                "Agile methodology for adaptive planning and continuous improvement.",
                "Transparent billing with detailed timesheets and progress reports.",
              ],
              bestFor:
                "Agile projects, research & development, and exploratory initiatives.",
            },
            {
              title: "Offshore Development Center (ODC)",
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
                className="card shadow-lg p-5 text-center"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  className="fz-30 font-weight-bold"
                  style={{ color: "#007bff" }}
                >
                  {model.title}
                </h3>
                <p className="fz-18 mt-3">{model.description}</p>
                <div className="mt-4">
                  <h5 className="fz-20 font-weight-bold">Key Features:</h5>
                  <ul className="list-unstyled">
                    {model.keyFeatures.map((feature, index) => (
                      <li key={index} className="fz-16 mt-2">
                        <strong>{feature}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="fz-20 font-weight-bold">Best For:</h5>
                  <p className="fz-16">{model.bestFor}</p>
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
