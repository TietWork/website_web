"use client";
import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="intro section-padding position-re">
      <div className="container">
        <div className="row justify-content-center"> {/* Centering row */}
          <div className="col-lg-12 text-center"> {/* Centering text within column */}
            <motion.h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#333333",
                marginBottom: "20px",
                textAlign: "center", // Ensures text is centered
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                style={{
                  color: "#007BFF",
                  textTransform: "uppercase",
                }}
              >
                Empowering Businesses with Innovative Software Solutions
              </span>
            </motion.h2>
            <p style={{ color: "#001524", textAlign: "justify", marginBottom: "40px" }}>
              <br />
              With over 23 years of experience, Third Eye Info Technology
              delivers cutting-edge software solutions that drive growth and
              efficiency. Our expertise spans custom software development, AI,
              machine learning, blockchain, IoT, big data, and business
              development. We craft tailored solutions to address modern
              challenges, optimize processes, and unlock new opportunities. By
              leveraging innovation and the latest technology, we empower
              businesses to stay ahead in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
