"use client";
import React from "react";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <section className="why-us section-padding">
      <div className="container">
        {/* Our Promise Section */}
        <div className="row mt-50 justify-content-center">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="card p-5"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                border: "2px solid #49A1FFFF",
              }}
            >
              <h4
                className="fz-30 font-weight-bold text-center"
                style={{ color: "#007bff" }}
              >
                Our Promise
              </h4>
              <p className="mt-20 text-center">
                Third Eye is dedicated to empowering businesses through
                innovative solutions, reliable partnerships, and a relentless
                pursuit of quality and value.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Commitment Section */}
        <div className="row mt-50 justify-content-center">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="card p-5"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                border: "2px solid #49A1FFFF",
              }}
            >
              <h4
                className="fz-30 font-weight-bold text-center"
                style={{ color: "#007bff" }}
              >
                Our Team
              </h4>
              <ul className="list mt-20">
                <li className="text-center">
                  <strong>Technology Expertise:</strong>
                  <br />
                  1. Deep understanding and proficiency in IT and web services.
                </li>
                <li className="text-center">
                  <strong>Strategic Execution:</strong>
                  <br />
                  2. Proven track record in translating ambitious visions into
                  tangible results.
                </li>
                <li className="text-center">
                  <strong>Integrity and Transparency:</strong>
                  <br />
                  3. Upholding ethical standards and fostering trust through
                  transparent business practices.
                </li>
                <li className="text-center">
                  <strong>Cost-Effective Excellence:</strong>
                  <br />
                  4. Delivering high-quality solutions at competitive rates.
                </li>
                <li className="text-center">
                  <strong>Customer-Centric Approach:</strong>
                  <br />
                  5. Prioritizing client needs and building long-term
                  partnerships based on mutual success.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Why Third Eye Section */}
        <div className="row mt-50 justify-content-center">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="card p-5"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                border: "2px solid #49A1FFFF",
              }}
            >
              <h4
                className="fz-30 font-weight-bold text-center"
                style={{ color: "#007bff" }}
              >
                Our Strengths
              </h4>
              <ul className="list mt-20">
                <li className="text-center">
                  <strong>Expertise and Experience:</strong>
                  <br />
                  1. Extensive experience across diverse industries, ensuring
                  robust and efficient solutions.
                </li>
                <li className="text-center">
                  <strong>Skilled Workforce:</strong>
                  <br />
                  2. A talented team committed to excellence and continuous
                  improvement.
                </li>
                <li className="text-center">
                  <strong>Proven Track Record:</strong>
                  <br />
                  3. Successfully delivering projects that meet and exceed
                  client expectations.
                </li>
                <li className="text-center">
                  <strong>Tailored Solutions:</strong>
                  <br />
                  4. Offering customizable engagement options to cater to
                  startups and large enterprises alike.
                </li>
                <li className="text-center">
                  <strong>Adaptive Approach:</strong>
                  <br />
                  5. Adjusting strategies to maximize profitability and drive
                  sustainable growth.
                </li>
                <li className="text-center">
                  <strong>Scalability:</strong>
                  <br />
                  6. Seamlessly scaling resources to align with project demands
                  and business objectives.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
