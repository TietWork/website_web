"use client";

import React from "react";
import { Code, Hub, DevicesOther, BarChart } from "@mui/icons-material"; // Icons from MUI
import data from "@/l-data/services.json";
// Map each service to a relevant Material-UI icon with consistent color
const icons = {
  "Software Development": <Code fontSize="large" style={{ color: "#003049" }} />, // Coding/Development icon
  "AI/ML & Blockchain": <Hub fontSize="large" style={{ color: "#003049" }} />, // Network/AI-related icon
  "IoT Development": <DevicesOther fontSize="large" style={{ color: "#003049" }} />, // IoT/Devices icon
  "Big Data & Business Intelligence": <BarChart fontSize="large" style={{ color: "#003049" }} />, // Analytics/Data icon
};


// Fallback for undefined icons
const getIcon = (title) => icons[title] || <Code fontSize="large" color="primary" />; // Default to "Code" icon

function Services() {
  return (
    <section className="services-boxs section-padding pb-60">
      <div className="container "> 
        <div className="sec-head mb-80">
          <div className="bord pt-25 bord-thin-top d-flex align-items-center justify-content-between">
            <h2 className="fw-600 text-u ls1 mb-0" style={{
                  color: "#007BFF",
                  textTransform: "uppercase",
                }}>What We Have to Offer</h2>
            <a
              href="/light/page-services"
              className="btn btn-sm btn-outline-main"
              style={{
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
        <div className="row pt-30" >
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 mb-20">
              <div className="item-box bg rounded-xl">
                <div className="icon mb-40 ">{getIcon(item.title)}</div>
                <h5 className="mb-15 text-u">{item.title}</h5>
                <p style={{ fontFamily: "Satoshi-Variable" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
