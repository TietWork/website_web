"use client";
import React from "react";
import { motion } from "framer-motion";

function Numbers() {
  return (
    <section
      className="numbers mb-40"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Project Numbers */}
          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="item d-flex flex-column align-items-center text-center">
              <motion.h2
                className="fz-80 line-height-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  color: "#051923",
                }}
              >
                200
              </motion.h2>
              <motion.span
                className="sub-title opacity-7"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "#555",
                  fontSize: "18px",
                }}
              >
                Combined Years <br /> of Experience
              </motion.span>
            </div>
          </motion.div>

          {/* Projects Completed */}
          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="item d-flex flex-column align-items-center text-center">
              <motion.h2
                className="fz-80 line-height-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  color: "#051923",
                }}
              >
                150+
              </motion.h2>
              <motion.span
                className="sub-title opacity-7"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "#555",
                  fontSize: "18px",
                }}
              >
                Projects <br /> Completed
              </motion.span>
            </div>
          </motion.div>

          {/* Industries Served */}
          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="item d-flex flex-column align-items-center text-center">
              <motion.h2
                className="fz-80 line-height-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  color: "#051923",
                }}
              >
                15+
              </motion.h2>
              <motion.span
                className="sub-title opacity-7"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "#555",
                  fontSize: "18px",
                }}
              >
                Industries <br /> Served
              </motion.span>
            </div>
          </motion.div>

          {/* Beneficiaries */}
          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="item d-flex flex-column align-items-center text-center">
              <motion.h2
                className="fz-80 line-height-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  color: "#051923",
                }}
              >
                100
              </motion.h2>
              <motion.span
                className="sub-title opacity-7"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "#555",
                  fontSize: "18px",
                }}
              >
                million <br /> Beneficiaries
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
