"use client";
import React from "react";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <section className="why-us mt-40 mb-40">
      <div className="container">
        {/* Our Promise Section */}
        <div className="row">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4
              className="fz-30 font-weight-bold"
              style={{ color: "#007bff", marginBottom: "20px" , textTransform: "uppercase"}}
            >
              Our Promise
            </h4>
            <p
              style={{
                fontSize: "18px",
                color: "#000",
                textAlign: "left",
                fontFamily: "Satoshi-Variable",
                lineHeight: "1.6",
              }}
            >
              Third Eye is dedicated to empowering businesses through innovative
              solutions, reliable partnerships, and a relentless pursuit of
              quality and value.
            </p>
          </motion.div>
        </div>

        {/* Our Team Section */}
        <div className="row mt-20">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4
              className="fz-30 font-weight-bold"
              style={{ color: "#007bff", marginBottom: "20px", textTransform: "uppercase" }}
            >
              Our Team
            </h4>
            <ul
              style={{
                fontSize: "18px",
                color: "#000",
                textAlign: "left",
                fontFamily: "Satoshi-Variable",
                lineHeight: "1.6",
                listStyle: "none",
                paddingLeft: "0",
              }}
            >
              <li>
                <strong>1. Technology Expertise:</strong> Deep understanding and
                proficiency in IT and web services.
              </li>
              <li>
                <strong>2. Strategic Execution:</strong> Proven track record in
                translating ambitious visions into tangible results.
              </li>
              <li>
                <strong>3. Integrity and Transparency:</strong> Upholding
                ethical standards and fostering trust through transparent
                business practices.
              </li>
              <li>
                <strong>4. Cost-Effective Excellence:</strong> Delivering
                high-quality solutions at competitive rates.
              </li>
              <li>
                <strong>5. Customer-Centric Approach:</strong> Prioritizing
                client needs and building long-term partnerships based on mutual
                success.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Our Strengths Section */}
        <div className="row">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4
              className="fz-30 font-weight-bold"
              style={{ color: "#007bff", marginBottom: "20px", textTransform: "uppercase" }}
            >
              Our Strengths
            </h4>
            <ul
              style={{
                fontSize: "18px",
                color: "#000",
                textAlign: "left",
                fontFamily: "Satoshi-Variable",
                lineHeight: "1.6",
                listStyle: "none",
                paddingLeft: "0",
              }}
            >
              <li>
                <strong>1. Expertise and Experience:</strong> Extensive
                experience across diverse industries, ensuring robust and
                efficient solutions.
              </li>
              <li>
                <strong>2. Skilled Workforce:</strong> A talented team committed
                to excellence and continuous improvement.
              </li>
              <li>
                <strong>3. Proven Track Record:</strong> Successfully delivering
                projects that meet and exceed client expectations.
              </li>
              <li>
                <strong>4. Tailored Solutions:</strong> Offering customizable
                engagement options to cater to startups and large enterprises
                alike.
              </li>
              <li>
                <strong>5. Adaptive Approach:</strong> Adjusting strategies to
                maximize profitability and drive sustainable growth.
              </li>
              <li>
                <strong>6. Scalability:</strong> Seamlessly scaling resources to
                align with project demands and business objectives.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
