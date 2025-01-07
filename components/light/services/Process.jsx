'use client'
import React from "react";

function Process() {
  const processData = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business goals, conducting research, and defining project strategies. This includes system architecture planning, data collection, and feasibility analysis.",
      icon: "/light/assets/imgs/serv-icons/1.png",
      details: "/light/page-about",
      detailsList: [
        "Requirement analysis and system architecture planning.",
        "Data collection, feasibility analysis, and defining objectives.",
        "Blockchain: Identifying use cases, consensus mechanisms, and security needs.",
        "IoT: Device integration planning and data flow design.",
        "Big Data: Infrastructure planning and data pipeline architecture.",
      ],
    },
    {
      title: "Design & Prototyping",
      description:
        "Crafting intuitive designs and creating prototypes for alignment. This includes UI/UX design, wireframing, and building initial data models.",
      icon: "/light/assets/imgs/serv-icons/2.png",
      details: "/light/page-about",
      detailsList: [
        "Software Development: Wireframing and creating mockups.",
        "AI/ML: Testing datasets and creating algorithms.",
        "Blockchain: Smart contract design and network architecture.",
        "IoT: Designing device interfaces and communication protocols.",
        "Big Data: Designing data pipelines and visualization interfaces.",
      ],
    },
    {
      title: "Development & Execution",
      description:
        "Bringing designs to life using agile practices. Includes frontend/backend development, API integration, and scalable system architecture.",
      icon: "/light/assets/imgs/serv-icons/3.png",
      details: "/light/page-about",
      detailsList: [
        "Frontend and backend development with database integration.",
        "AI/ML: Model training, preprocessing, and performance tuning.",
        "Blockchain: Smart contract development and ledger setup.",
        "IoT: Device firmware development and connectivity setup.",
        "Big Data: Building ETL pipelines and real-time analytics systems.",
      ],
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Ensuring quality with rigorous testing for performance, security, and usability. Includes user acceptance testing, system validation, and stress testing for robustness and reliability of the system under various conditions.",
      icon: "/light/assets/imgs/serv-icons/4.png",
      details: "/light/page-about",
      detailsList: [
        "Unit testing, integration testing, and security audits.",
        "AI/ML: Model validation and bias detection.",
        "Blockchain: Vulnerability analysis and consensus testing.",
        "IoT: Connectivity checks and performance validation.",
        "Big Data: System load testing and anomaly detection.",
      ],
    },
    {
      title: "Deployment & Integration",
      description:
      "Seamless deployment into your ecosystem with cloud or on-premise solutions. Includes CI/CD pipeline setup and workflow integration. We ensure minimal downtime during the deployment process to avoid disruptions.",
      icon: "/light/assets/imgs/serv-icons/5.png",
      details: "/light/page-about",
      detailsList: [
        "Cloud deployment and CI/CD integration.",
        "AI/ML: Model deployment into production environments.",
        "Blockchain: Network launch and transaction validation.",
        "IoT: Device rollout and system calibration.",
        "Big Data: Dashboard integration and cloud setup.",
      ],
    },
    {
      title: "Ongoing Support & Optimization",
      description:
        "Continuous monitoring and optimization for sustained performance. Includes feature updates, bug fixes, and scalability improvements.",
      icon: "/light/assets/imgs/serv-icons/6.png",
      details: "/light/page-about",
      detailsList: [
        "AI/ML: Model retraining and data updates.",
        "Blockchain: Updating smart contracts and ensuring compliance.",
        "IoT: Device maintenance and scalability improvements.",
        "Big Data: Infrastructure scaling and visualization enhancements.",
      ],
    },
  ];

  return (
    <section className="process section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Process</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Business <span className="fw-200">Discovery & Research</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {processData.map((process, index) => (
            <div key={index} className="col-lg-4 col-md-6 item mb-50">
              <div
                className="process-box rounded-xl p-4"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div className="icon-img-60 mb-20">
                  <img src={process.icon} alt={process.title} />
                </div>
                <h5 className="mb-15 fw-600">{process.title}</h5>
                <p style={{ fontSize: "14px", color: "#555" }}>{process.description}</p>
                <ul style={{ fontSize: "13px", marginTop: "10px", paddingLeft: "18px", color: "#666" }}>
                  {process.detailsList.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
