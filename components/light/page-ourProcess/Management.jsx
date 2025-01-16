"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FolderOpen,
  CalendarMonth,
  Group,
  CheckCircle,
  WarningAmber,
  Build,
  Loop,
  BarChart,
} from "@mui/icons-material";

const features = [
  { text: "Project Organization", icon: FolderOpen },
  { text: "Project Planning and Tracking", icon: CalendarMonth },
  { text: "Resource Management", icon: Group },
  { text: "Quality Compliance & Adherence", icon: CheckCircle },
  { text: "Risk Management", icon: WarningAmber },
  { text: "Issues Management", icon: Build },
  { text: "Change Control and Management", icon: Loop },
  { text: "Reporting and Escalation", icon: BarChart },
];

function Management() {
  return (
    <section className="why-us section-padding">
      <div className="container">

        {/* Project Management Section */}
        <motion.div
          className="row mt-50 justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-10">
            <div
              className="card p-5 shadow-sm"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "1px solid #e0e0e0",
              }}
            >
              <h4
                className="fz-24 font-weight-bold text-primary text-center"
                style={{ color: "#0077b6" }}
              >
                Our Project Management Expertise
              </h4>
              <p className="mt-3 text-center text-muted">
                With a comprehensive approach to project management, we ensure
                smooth execution and delivery through:
              </p>

              {/* Grid Layout for Features */}
              <div className="row mt-4">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-6 mt-3"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="feature-card text-center shadow-sm p-3"
                      style={{
                        backgroundColor: "#f9f9f9",
                        borderRadius: "10px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        border: "1px solid #e0e0e0",
                      }}
                    >
                      <div
                        className="icon text mb-3"
                        style={{ fontSize: "2rem", color: "#000814" }}
                      >
                        <item.icon fontSize="inherit" />
                      </div>
                      <h5 className="fz-16 font-weight-bold mb-0">
                        {item.text}
                      </h5>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Management;
