import React from "react";

function EngagementModels() {
  return (
    <section className="engagement-models-page position-re">
      <div className="container section-padding">
        {/* Row for Introductory Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-12">
            <div className="text text-center">
              <h2 className="main-heading fz-50 font-weight-bold">
                Engagement Models: Tailored Solutions for Success
              </h2>
              <p
                className="subheading mt-20 fz-18"
                style={{ color: "#007bff", maxWidth: "800px", margin: "0 auto" }}
              >
                Explore our diverse engagement models crafted to deliver scalable, cost-effective, and high-quality software solutions throughout your project journey.
              </p>
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
                "Rigorous project management with regular updates and transparent reporting.",
              ],
              bestFor: "Continuous development, enterprise-grade solutions, and ongoing support.",
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
              bestFor: "MVP development, pilot projects, and projects with fixed requirements.",
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
              bestFor: "Agile projects, research & development, and exploratory initiatives.",
            },
            {
              title: "Offshore Development Center (ODC)",
              description:
                "Establish a dedicated offshore team for extended support and cost-efficient operations.",
              keyFeatures: [
                "Access to skilled professionals in a secure, offshore environment.",
                "Complete infrastructure setup and management by our team.",
                "Long-term partnership with streamlined operations and reduced overheads.",
              ],
              bestFor: "Scaling operations, accessing global talent, and ongoing project needs.",
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
                <h3 className="fz-30 font-weight-bold" style={{ color: "#007bff" }}>
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

        {/* Proven Process Section */}
        <div className="row mt-50 justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h3
                className="font-weight-bold"
                style={{ fontSize: "28px", marginBottom: "30px", color: "#007bff" }}
              >
                Our Proven Process
              </h3>
              <ol className="fz-18" style={{ lineHeight: "1.8" }}>
                <li><strong>Step 1:</strong> Requirement Analysis – Collaborate with our experts to define project goals, objectives, and technical specifications.</li>
                <li><strong>Step 2:</strong> Model Selection – Based on your requirements, we recommend the most suitable engagement model aligned with your business objectives.</li>
                <li><strong>Step 3:</strong> Project Execution – Efficient and transparent execution using industry best practices, ensuring timely delivery and quality outcomes.</li>
                <li><strong>Step 4:</strong> Evaluation & Optimization – Continuous monitoring, evaluation, and optimization to enhance performance and achieve measurable results.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Why Choose Our Engagement Models Section */}
        <div className="row mt-50 justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h3
                className="font-weight-bold"
                style={{
                  fontSize: "28px",
                  marginBottom: "30px",
                  textAlign: "center",
                  color: "#007bff",
                }}
              >
                Why Choose Our Engagement Models?
              </h3>
              <ul className="list-unstyled fz-18" style={{ lineHeight: "1.8" }}>
                <li><strong>Commitment to Quality:</strong> Deliver high-quality solutions backed by rigorous testing and continuous improvement processes.</li>
                <li><strong>Flexibility & Scalability:</strong> Adapt to changing business needs with flexible team structures and scalable solutions.</li>
                <li><strong>Cost-Effectiveness:</strong> Optimize your budget with competitive pricing models and efficient resource allocation.</li>
                <li><strong>Transparent Communication:</strong> Maintain clear and open communication throughout the project lifecycle, ensuring alignment and client satisfaction.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value-Added Services Section */}
        <div className="row mt-50 justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h3
                className="font-weight-bold"
                style={{
                  fontSize: "28px",
                  marginBottom: "30px",
                  textAlign: "center",
                  color: "#007bff",
                }}
              >
                Value-Added Services
              </h3>
              <ul className="list-unstyled fz-18" style={{ lineHeight: "1.8" }}>
                <li><strong>Consultation Services:</strong> Strategic advice to align technology solutions with your business strategy.</li>
                <li><strong>Risk Management:</strong> Proven methodologies to mitigate risks and ensure project success.</li>
                <li><strong>Post-Delivery Support:</strong> Comprehensive maintenance and support services to keep your systems optimized.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngagementModels;
