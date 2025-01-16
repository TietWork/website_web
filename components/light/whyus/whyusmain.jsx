"use client";
import React from "react";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <section className="why-us section-padding">
      <div className="container">
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
                Our Commitment
              </h4>
              <ul className="list mt-20">
                <li className="text-center">
                  <strong>Technology Expertise:</strong>
                  <br />
                  Deep understanding and proficiency in IT and web services.
                </li>
                <li className="text-center">
                  <strong>Strategic Execution:</strong>
                  <br />
                  Proven track record in translating ambitious visions into
                  tangible results.
                </li>
                <li className="text-center">
                  <strong>Integrity and Transparency:</strong>
                  <br />
                  Upholding ethical standards and fostering trust through
                  transparent business practices.
                </li>
                <li className="text-center">
                  <strong>Cost-Effective Excellence:</strong>
                  <br />
                  Delivering high-quality solutions at competitive rates.
                </li>
                <li className="text-center">
                  <strong>Customer-Centric Approach:</strong>
                  <br />
                  Prioritizing client needs and building long-term partnerships
                  based on mutual success.
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
                Why Third Eye?
              </h4>
              <ul className="list mt-20">
                <li className="text-center">
                  <strong>Expertise and Experience:</strong>
                  <br />
                  Extensive experience across diverse industries, ensuring
                  robust and efficient solutions.
                </li>
                <li className="text-center">
                  <strong>Skilled Workforce:</strong>
                  <br />
                  A talented team committed to excellence and continuous
                  improvement.
                </li>
                <li className="text-center">
                  <strong>Proven Track Record:</strong>
                  <br />
                  Successfully delivering projects that meet and exceed client
                  expectations.
                </li>
                <li className="text-center">
                  <strong>Tailored Solutions:</strong>
                  <br />
                  Offering customizable engagement options to cater to startups
                  and large enterprises alike.
                </li>
                <li className="text-center">
                  <strong>Adaptive Approach:</strong>
                  <br />
                  Adjusting strategies to maximize profitability and drive
                  sustainable growth.
                </li>
                <li className="text-center">
                  <strong>Scalability:</strong>
                  <br />
                  Seamlessly scaling resources to align with project demands and
                  business objectives.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

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
                pursuit of quality and value. Join us in shaping the future of
                technology together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Partner With Us Section */}
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
                Why Partner with Us?
              </h4>
              <ul className="list mt-20">
                <li className="text-center">
                  <strong>Comprehensive Solutions:</strong>
                  <br />
                  From concept to deployment, we offer end-to-end services that
                  ensure your project&apos;s success.
                </li>
                <li className="text-center">
                  <strong>Global Standards:</strong>
                  <br />
                  Adhering to international best practices to deliver solutions
                  that meet global standards.
                </li>
                <li className="text-center">
                  <strong>Continuous Support:</strong>
                  <br />
                  Providing ongoing support and maintenance to optimize and
                  enhance your investment.
                </li>
                <li className="text-center">
                  <strong>Client Satisfaction:</strong>
                  <br />
                  Prioritizing client satisfaction through proactive
                  communication and responsive service.
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
