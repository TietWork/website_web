"use client";
import React from "react";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <section className="why-us section-padding">
      <div className="container">
        {/* Main Heading and Subheading */}
        <motion.div
          className="row text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        {/* Why Choose Third Eye Section */}
        <div className="row justify-content-center">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="card  p-4"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                border: "2px solid #49A1FFFF",
              }}
            >
              <h4
                className="fz-30 font-weight-bold"
                style={{ color: "#007bff" }}
              >
                Why Choose Third Eye?
              </h4>
              <p
                className="mt-20 fz-18"
              >
                At Third Eye Info Technology, we blend cutting-edge technology with a steadfast
                commitment to innovation and quality. Our dedicated team of
                skilled professionals delivers scalable, cost-effective
                solutions tailored to meet the unique needs of our clients.
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
                className="fz-30 font-weight-bold"
                style={{ color: "#007bff" }}
              >
                Our Commitment
              </h4>
              <ul className="list mt-20">
                <li>
                  <strong>Technology Expertise:</strong> Deep understanding and
                  proficiency in IT and web services.
                </li>
                <li>
                  <strong>Strategic Execution:</strong> Proven track record in
                  translating ambitious visions into tangible results.
                </li>
                <li>
                  <strong>Integrity and Transparency:</strong> Upholding ethical
                  standards and fostering trust through transparent business
                  practices.
                </li>
                <li>
                  <strong>Cost-Effective Excellence:</strong> Delivering
                  high-quality solutions at competitive rates.
                </li>
                <li>
                  <strong>Customer-Centric Approach:</strong> Prioritizing
                  client needs and building long-term partnerships based on
                  mutual success.
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
              className="card p-5 "
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                border: "2px solid #49A1FFFF",
              }}
            >
              <h4
                className="fz-30 font-weight-bold"
                style={{ color: "#007bff" }}
              >
                Why Third Eye?
              </h4>
              <ul className="list mt-20">
                <li>
                  <strong>Expertise and Experience:</strong> Extensive
                  experience across diverse industries, ensuring robust and
                  efficient solutions.
                </li>
                <li>
                  <strong>Skilled Workforce:</strong> A talented team committed
                  to excellence and continuous improvement.
                </li>
                <li>
                  <strong>Proven Track Record:</strong> Successfully delivering
                  projects that meet and exceed client expectations.
                </li>
                <li>
                  <strong>Tailored Solutions:</strong> Offering customizable
                  engagement options to cater to startups and large enterprises
                  alike.
                </li>
                <li>
                  <strong>Adaptive Approach:</strong> Adjusting strategies to
                  maximize profitability and drive sustainable growth.
                </li>
                <li>
                  <strong>Scalability:</strong> Seamlessly scaling resources to
                  align with project demands and business objectives.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Our Promise Section */}
        <div className="row mt-50 ">
          <motion.div
            className="col-lg-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="card  p-5"
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.1)",
                border: "2px solid #49A1FFFF",
              }}
            >
              <h4
                className="fz-30 font-weight-bold"
                style={{ color: "#007bff" }}
              >
                Our Promise
              </h4>
              <p
                className="mt-20"
              >
                Third Eye is dedicated to empowering businesses through
                innovative solutions, reliable partnerships, and a relentless
                pursuit of quality and value. Join us in shaping the future of
                technology together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Partner With Us Section */}
        <div className="row mt-50 justify-content">
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
                className="fz-30 font-weight-bold"
                style={{ color: "#007bff" }}
              >
                Why Partner with Us?
              </h4>
              <ul className="mt-20">
                <li>
                  <strong>Comprehensive Solutions:</strong> From concept to
                  deployment, we offer end-to-end services that ensure your
                  project&apos;s success.
                </li>
                <li>
                  <strong>Global Standards:</strong> Adhering to international
                  best practices to deliver solutions that meet global
                  standards.
                </li>
                <li>
                  <strong>Continuous Support:</strong> Providing ongoing support
                  and maintenance to optimize and enhance your investment.
                </li>
                <li>
                  <strong>Client Satisfaction:</strong> Prioritizing client
                  satisfaction through proactive communication and responsive
                  service.
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
