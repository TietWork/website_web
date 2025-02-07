"use client";

import React from "react";
import { Code, Hub, DevicesOther, BarChart } from "@mui/icons-material"; // Icons from MUI
import data from "@/l-data/services.json";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
          <div className="pt-25 position-relative text-center">
            {/* Heading */}
            <motion.h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#333333",
                margin: 0,
                position: "relative",
                display: "inline-block",
                paddingBottom: "10px",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ color: "#007BFF" }}>WHAT WE OFFER</span>
            </motion.h2>
          </div>
        </div>

        <div className="row pt-30">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-20">
              <div className="item-box bg rounded-xl">
                <div className="icon mb-40 ">{getIcon(item.title)}</div>
                <h5 className="mb-15 text-u">{item.title}</h5>
                <p
                  style={{
                    fontFamily: "Satoshi-Variable",
                    color: "#000",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button Below Services Section */}
      <div className="mt-40 text-center">
        <a
          href="/light/page-services"
          target="_blank"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#007BFF",
            textDecoration: "none",
            border: "2px solid #007BFF",
            borderRadius: "25px",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#007BFF";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#007BFF";
          }}
        >
          Explore More
          <ArrowForwardIcon style={{ fontSize: "18px" }} />
        </a>
      </div>
    </section>
  );
}

export default Services;
