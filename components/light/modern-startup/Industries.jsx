"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaMoneyBillWave,
  FaOilCan,
  FaFilm,
  FaIndustry,
  FaGlobe,
  FaTruck,
  FaGraduationCap,
  FaCoffee,
  FaBuilding,
  FaShoppingCart,
  FaPhone,
  FaSeedling,
  FaBolt,
  FaCar,
  FaShippingFast,
} from "react-icons/fa";

const industries = [
  { title: "Healthcare", icon: FaStethoscope },
  { title: "Finance & Insurance", icon: FaMoneyBillWave },
  { title: "Oil & Gas", icon: FaOilCan },
  { title: "Entertainment", icon: FaFilm },
  { title: "Manufacturing", icon: FaIndustry },
  { title: "Government", icon: FaGlobe },
  { title: "Transportation", icon: FaTruck },
  { title: "Education", icon: FaGraduationCap },
  { title: "Hospitality", icon: FaCoffee },
  { title: "Real Estate", icon: FaBuilding },
  { title: "Retail & E-commerce", icon: FaShoppingCart },
  { title: "Telecommunications", icon: FaPhone },
  { title: "Agriculture & AgriTech", icon: FaSeedling },
  { title: "Energy & Utilities", icon: FaBolt },
  { title: "Automotive", icon: FaCar },
  { title: "Logistics & Supply Chain", icon: FaShippingFast },
];

function IndustriesWeServe() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        color: "#333333",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div className="container">
        {/* Heading */}
        <motion.h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#333333",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
        </motion.h2>

        <motion.p
          style={{
            color: "#555555",
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide tailored solutions across industries to help businesses achieve their goals.
        </motion.p>

        {/* Industries Icons and Titles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "30px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              style={{
                textAlign: "center",
                cursor: "pointer",
              }}
              transition={{ duration: 0.2 }}
            >
              <div
                style={{
                  fontSize: "48px",
                  color: "#007BFF",
                  marginBottom: "10px",
                  transition: "color 0.2s ease",
                }}
              >
                <industry.icon />
              </div>
              <h5
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#333333",
                }}
              >
                {industry.title}
              </h5>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05, backgroundColor: "#0056B3" }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: "40px",
            padding: "12px 32px",
            backgroundColor: "#007BFF",
            color: "#FFFFFF",
            borderRadius: "25px",
            fontSize: "16px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}

export default IndustriesWeServe;
