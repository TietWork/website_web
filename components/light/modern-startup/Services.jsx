"use client";

import React from "react";
import { Code, Hub, DevicesOther, BarChart } from "@mui/icons-material"; // Icons from MUI
import data from "@/l-data/services.json";
import { motion } from "framer-motion";
// Map each service to a relevant Material-UI icon with consistent color
const icons = {
  "Software Development": (
    <Code style={{ color: "#003049", fontSize: "60px" }} />
  ), // Coding/Development icon
  "AI/ML & Blockchain": <Hub style={{ color: "#003049", fontSize: "60px" }} />, // Network/AI-related icon
  "IoT Development": (
    <DevicesOther style={{ color: "#003049", fontSize: "60px" }} />
  ), // IoT/Devices icon
  "Big Data & Business Intelligence": (
    <BarChart style={{ color: "#003049", fontSize: "60px" }} />
  ), // Analytics/Data icon
};

// Fallback for undefined icons
const getIcon = (title) =>
  icons[title] || <Code fontSize="large" color="primary" />; // Default to "Code" icon

function Services() {
  return (
    <section className="services-boxs section-padding pb-60">
      <div className="container ">
        <div className="sec-head mb-20">
          <div className="bord pt-25 bord-thin-top position-relative">
            {/* Heading */}
            <motion.h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#333333",
                textAlign: "center", // Centers the text
                margin: 0, // Ensures proper vertical alignment
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ color: "#007BFF" }}>WHAT WE OFFER</span>
            </motion.h2>

            {/* Button */}
            <a
              href="/light/page-services"
              className="btn btn-sm btn-outline-main"
              style={{
                position: "absolute", // Positions the button relative to the parent container
                right: "0", // Aligns the button to the right
                top: "25%", // Centers it vertically relative to the container
                transform: "translateY(-50%)", // Adjusts for perfect centering
                padding: "5px 10px",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "5px",
                textDecoration: "none",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="row pt-30">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-20">
              <div className="item-box bg rounded-xl">
                <div className="icon mb-40 ">{getIcon(item.title)}</div>
                <h5 className="mb-15 text-u">{item.title}</h5>
                <p style={{ fontFamily: "Satoshi-Variable", color: "#000", fontSize: "16px", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
