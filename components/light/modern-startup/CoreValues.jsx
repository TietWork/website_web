"use client";
import React from "react";
import { motion } from "framer-motion";

function CoreValues() {
  const values = [
    {
      title: "Innovation",
      description:
        "We foster creativity and embrace cutting-edge solutions to anticipate and address future challenges effectively.",
    },
    {
      title: "Client-Centricity",
      description:
        "Your goals are our priority. We work relentlessly to provide tailored solutions that drive your success.",
    },
    {
      title: "Integrity",
      description:
        "With honesty and transparency at our core, we ensure every action aligns with our commitments and values.",
    },
    {
      title: "Collaboration",
      description:
        "We believe that meaningful partnerships and teamwork are the key to achieving extraordinary results.",
    },
    {
      title: "Sustainability",
      description:
        "We create solutions with a focus on long-term impact, ensuring a better future for generations to come.",
    },
    {
      title: "Credibility",
      description:
        "Demonstrating honesty, transparency, and ethical behavior in all actions and decisions is our hallmark.",
    },
  ];


  return (
    <section
      style={{
        backgroundColor: "#F9FAFB",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px", // Add padding to prevent cutting
        }}
      >
        {/* Heading */}
        <motion.h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#333333",
            marginBottom: "40px",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Core Values at{" "}
          <span style={{ color: "#007BFF" }}>Third Eye Info Technologies</span>
        </motion.h2>

        {/* Core Values Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#007BFF",
                  marginBottom: "10px",
                }}
              >
                {value.title}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#555555",
                  lineHeight: "1.6",
                }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
