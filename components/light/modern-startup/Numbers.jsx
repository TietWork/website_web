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
        <div className="row justify-content-center">
          {/* Project Numbers */}
          <motion.div
            className="col-lg-4 col-md-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <motion.h2
                className="fz-80 line-height-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  color: "#051923",
                }}
                whileHover={{ color: "#4b89dc" }}
              >
                150+
              </motion.h2>
              <motion.span
                className="sub-title opacity-7 ml-30"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "#555",
                  fontSize: "18px",
                }}
                whileHover={{ color: "#4b89dc" }}
              >
                Projects <br /> Completed
              </motion.span>
            </div>
          </motion.div>

          {/* Industries Served */}
          <motion.div
            className="col-lg-4 col-md-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="item d-flex align-items-center justify-content-center md-mb50">
              <motion.h2
                className="fz-80 line-height-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  color: "#051923",
                }}
                whileHover={{ color: "#4b89dc" }}
              >
                15+
              </motion.h2>
              <motion.span
                className="sub-title opacity-7 ml-30"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "#555",
                  fontSize: "18px",
                }}
                whileHover={{ color: "#4b89dc" }}
              >
                Industries <br /> Served
              </motion.span>
            </div>
          </motion.div>

          {/* Beneficiaries */}
          <motion.div
            className="col-lg-4 col-md-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="item d-flex align-items-center justify-content-center">
              <motion.h2
                className="fz-80 line-height-1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "500",
                  color: "#051923",
                }}
                whileHover={{ color: "#4b89dc" }}
              >
                100<span className="fz-50"></span>
              </motion.h2>
              <motion.span
                className="sub-title opacity-7 ml-30"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "#555",
                  fontSize: "12px",
                }}
                whileHover={{ color: "#4b89dc" }}
              >   million
                <br /> Beneficiaries
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
