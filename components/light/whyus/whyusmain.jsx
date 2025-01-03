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
          <div className="col-lg-12">
            <h2 className="main-heading fz-50 font-weight-bold">
              Why Third Eye
            </h2>
            <p
              className="subheading mt-20 fz-18 text-primary"
              style={{ color: "#007bff" }}
            >
              We are combined with technology, motivated with attitude, guided
              with innovation, and supported with potential to deliver quality
              products to market rapidly and in a cost-effective way.
            </p>
          </div>
        </motion.div>

        {/* Redesigned Cards Section */}
        <div className="row mt-50 justify-content-center">
          {/* Why Choose Us Card */}
          <motion.div
            className="col-lg-4 col-md-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div
              className="card shadow-sm p-4 text-center"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h4 className="fz-24 font-weight-bold">Why Choose Us?</h4>
              <p className="mt-20">
                Customers choose to work with us for the following reasons:
              </p>
              <ul className="list mt-20">
                <li>A deep understanding of IT and web services</li>
                <li>
                  Proven experience in bridging “big picture” goals into reality
                </li>
                <li>Integrity and dedicated professionals</li>
                <li>Quality at an effective cost</li>
                <li>Transparent business relationships</li>
                <li>Experienced workforce</li>
              </ul>
            </div>
          </motion.div>

          {/* Our Expertise Card */}
          <motion.div
            className="col-lg-4 col-md-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="card shadow-sm p-4 text-center"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h4 className="fz-24 font-weight-bold">Our Expertise</h4>
              <p className="mt-20">
                Third Eye has a highly experienced, multi-skilled workforce. We
                bring greater domain experience and higher productivity to
                customer engagements. Our team is committed to building
                effective and high-performing solutions, with an uncompromising
                attitude toward quality.
              </p>
            </div>
          </motion.div>

          {/* Flexible Business Models Card */}
          <motion.div
            className="col-lg-4 col-md-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div
              className="card shadow-sm p-4 text-center"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h4 className="fz-24 font-weight-bold">
                Flexible Business Models
              </h4>
              <p className="mt-20">
                We offer tailored engagement options to suit varied customer
                needs, working with startups and large organizations to maximize
                profits and drive success.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Project Management Section */}
        <motion.div
          className="row mt-50 justify-content-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-lg-10">
            <div
              className="card p-5 shadow-sm"
              style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                border: "1px solid #e0e0e0",
              }}
            >
              <h4
                className="fz-24 font-weight-bold text-primary text-center"
                style={{ color: "#007bff" }}
              >
                Our Project Management Expertise
              </h4>
              <p className="mt-3 text-center text-muted">
                With a comprehensive approach to project management, we ensure
                smooth execution and delivery through:
              </p>

              {/* Grid Layout for Features */}
              <div className="row mt-4">
                {[
                  { text: "Project Organization", icon: "📂" },
                  { text: "Project Planning and Tracking", icon: "🗓️" },
                  { text: "Resource Management", icon: "👥" },
                  { text: "Quality Compliance & Adherence", icon: "✅" },
                  { text: "Risk Management", icon: "⚠️" },
                  { text: "Issues Management", icon: "🔧" },
                  { text: "Change Control and Management", icon: "🔄" },
                  { text: "Reporting and Escalation", icon: "📊" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="col-lg-3 col-md-4 col-sm-6 mt-3"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="feature-card text-center shadow-sm p-3"
                      style={{
                        backgroundColor: "#f9f9f9",
                        borderRadius: "10px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        border: "1px solid #e0e0e0",
                      }}
                    >
                      <div
                        className="icon text-primary mb-3"
                        style={{ fontSize: "2rem", color: "#007bff" }}
                      >
                        {item.icon}
                      </div>
                      <h5 className="fz-16 font-weight-bold mb-0">
                        {item.text}
                      </h5>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;
