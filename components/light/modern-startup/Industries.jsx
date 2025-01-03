"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  LocalHospital,
  Business,
  Engineering,
  Movie,
  Public,
  LocalShipping,
  School,
  House,
  Apartment,
  ShoppingCart,
  Phone,
  Agriculture,
  Bolt,
  DirectionsCar,
  SyncAlt,
} from "@mui/icons-material";

const industries = [
  { title: "Healthcare", icon: LocalHospital },
  { title: "Finance & Insurance", icon: Business },
  { title: "Oil & Gas", icon: Engineering },
  { title: "Entertainment", icon: Movie },
  { title: "Manufacturing", icon: Public },
  { title: "Government", icon: Apartment },
  { title: "Transportation", icon: LocalShipping },
  { title: "Education", icon: School },
  { title: "Hospitality", icon: House },
  { title: "Real Estate", icon: Apartment },
  { title: "Retail & E-commerce", icon: ShoppingCart },
  { title: "Telecommunications", icon: Phone },
  { title: "Agriculture & AgriTech", icon: Agriculture },
  { title: "Energy & Utilities", icon: Bolt },
  { title: "Automotive", icon: DirectionsCar },
  { title: "Logistics & Supply Chain", icon: SyncAlt },
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
                  color: "#003049",
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
          href="/light/page-contact"
          whileHover={{ scale: 1.05, backgroundColor: "#0056B3" }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: "40px",
            padding: "12px 32px",
            backgroundColor: "#0077b6",
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
