"use client";
import React from "react";
import { motion } from "framer-motion";
import ConstructionIcon from "@mui/icons-material/Construction";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Process() {
  const processData = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by understanding your goals, conducting research, and defining strategies, covering system planning, data collection, feasibility analysis and Delivery Roadmap.",
      icon: <ConstructionIcon style={{ fontSize: "48px", color: "#000" }} />,
      details: "/light/page-about",
      detailsList: [
        "Software Development: Requirement analysis and system architecture planning.",
        "AI/ML:  Data collection, feasibility analysis, and defining objectives.",
        "Blockchain: Identifying use cases, consensus mechanisms, and security needs.",
        "IoT: Device integration planning and data flow design.",
        "Big Data: Infrastructure planning and data pipeline architecture.",
      ],
    },
    {
      title: "Design & Prototyping",
      description:
        "We craft intuitive designs and create detailed prototypes, including thorough UI/UX design, wireframing, and initial data modeling.",
      icon: (
        <DesignServicesIcon style={{ fontSize: "48px", color: "#000" }} />
      ),
      details: "/light/page-about",
      detailsList: [
        "Software Development: Wireframing and creating mockups.",
        "AI/ML: Testing datasets and creating algorithms and models for prototyping.",
        "Blockchain: Smart contract design and network architecture.",
        "IoT: Designing device interfaces and communication protocols.",
        "Big Data: Designing data pipelines and visualization interfaces.",
      ],
    },
    {
      title: "Development & Execution",
      description:
        "Bringing designs to life using agile practices. This includes frontend/backend development, seamless API integration, scalable system architecture, and rigorous testing.",
      icon: <CodeIcon style={{ fontSize: "48px", color: "#000" }} />,
      details: "/light/page-about",
      detailsList: [
        "Software Development: Frontend and backend development with database integration.",
        "AI/ML: Model training, preprocessing, and performance tuning.",
        "Blockchain: Smart contract development and ledger setup.",
        "IoT: Device firmware development and connectivity.",
        "Big Data: Building ETL pipelines and real-time analytics.",
      ],
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Ensuring quality with rigorous testing for performance, security, and usability. Includes user acceptance testing, system validation, and stress testing for robustness and reliability of the system under various conditions.",
      icon: <BugReportIcon style={{ fontSize: "48px", color: "#000" }} />,
      details: "/light/page-about",
      detailsList: [
        "Software Development: Unit testing, integration testing, and security audits.",
        "AI/ML: Model validation and bias detection.",
        "Blockchain: Vulnerability analysis and consensus testing.",
        "IoT: Device Stress tests, Connectivity checks and performance validation.",
        "Big Data: System load testing and anomaly detection validation.",
      ],
    },
    {
      title: "Deployment & Integration",
      description:
        "Seamless deployment into your ecosystem with cloud or on-premise solutions. Includes CI/CD pipeline setup and workflow integration. We ensure minimal downtime during the deployment..",
      icon: <CloudUploadIcon style={{ fontSize: "48px", color: "#000" }} />,
      details: "/light/page-about",
      detailsList: [
        "Software Development: Cloud deployment and CI/CD integration.",
        "AI/ML: Model deployment into production environments.",
        "Blockchain: Network launch and transaction validation.",
        "IoT: Device rollout and system calibration and integration.",
        "Big Data: Data pipeline deployement, dashboard integration and cloud setup.",
      ],
    },
    {
      title: "Ongoing Support & Optimization",
      description:
        "Continuous monitoring and optimization for sustained performance. Includes feature updates, bug fixes, and scalability improvements to ensure your system is always up-to-date..",
      icon: <SupportAgentIcon style={{ fontSize: "48px", color: "#000" }} />,
      details: "/light/page-about",
      detailsList: [
        "Software Development: Feature Update, performance optimization and bug fixes.",
        "AI/ML: Model retraining and data updates.",
        "Blockchain: Updating smart contracts and ensuring compliance.",
        "IoT: Device maintenance and scalability improvements.",
        "Big Data: Infrastructure scaling and visualization enhancements.",
      ],
    },
  ];

  return (
    <section className="process section-padding bord-thin-bottom">
      <div className="container">
        <div className="sec-head mb-80">
          <div
            className=" d-flex justify-content-center align-items-center"
            style={{ textAlign: "center" }}
          >
            {/* Heading */}
            <motion.h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#333333",
                textAlign: "center", // Centers the text within the heading
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ color: "#007BFF" }}>SYSTEMATIC APPROACH</span>
            </motion.h2>
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
                }}
              >
                <div className="icon-img-60 mb-20">{process.icon}</div>
                <h5 className="mb-15 fw-600" style={{ color: "#007BFF" }}>
                  {process.title}
                </h5>
                <p style={{ fontSize: "14px", color: "#000" }}>
                  {process.description}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    marginTop: "10px",
                    color: "#000",
                  }}
                >
                  {process.detailsList.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
