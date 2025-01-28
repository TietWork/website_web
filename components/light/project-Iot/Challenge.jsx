import React from "react";

function Challenge() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          {/* Right Section - Project Overview */}
          <div className="col-lg-12">
            <div className="text">
              <h3
                className="mb-30  line-height-40"
                style={{
                  color: "#007BFF",
                  textTransform: "uppercase",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                Overview
              </h3>
              <p
                className="fz-18 mb-40"
                style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
              >
                Our IoT-based digital smart locks redefine modern security by
                offering dynamic, hack-proof, and user-friendly solutions for
                homes, offices, and industrial premises. Trusted by thousands of
                users worldwide, these locks integrate cutting-edge technology
                with seamless mobile application support, delivering an
                unparalleled standard for safety, convenience, and control.
              </p>

              {/* Key Features and Functionality */}
              <h6
                style={{
                  color: "#007bff",
                  textTransform: "uppercase",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                className="mb-20"
              >
                Key Features and Functionality
              </h6>
              <p
                className="fz-18 mb-40"
                style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
              >
                <li>
                  <strong>• Advanced Access Control:</strong> Dynamic passcodes,
                  encrypted for maximum security, with a user-friendly keypad
                  interface designed to simplify access while ensuring robust
                  protection against unauthorized entry.
                </li>
                <li>
                  <strong>• Mobile Integration:</strong> A dedicated app that
                  allows for seamless access management, time-controlled
                  permissions, multi-user management, and real-time
                  notifications to keep you informed about every access attempt.
                </li>
                <li>
                  <strong>• Anti-Theft Protection:</strong> Built-in alarm systems
                  and tamper-resistant designs ensure uninterrupted security,
                  giving you peace of mind against break-in attempts or
                  tampering incidents.
                </li>
                <li>
                  <strong>• Durable Build:</strong> Crafted with weather-resistant
                  materials and high-grade hardened steel, these locks are
                  engineered to withstand harsh environmental conditions and
                  prolonged use without compromising functionality.
                </li>
                <li>
                  <strong>• Rechargeable Capability:</strong> Equipped with a
                  long-lasting rechargeable battery, our smart locks include
                  low-battery alerts to ensure you&apos;re always prepared and
                  your security is never compromised.
                </li>
              </p>

              {/* Applications */}
              <h6
                style={{
                  color: "#007bff",
                  textTransform: "uppercase",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                className="mb-20"
              >
                Applications
              </h6>
              <p className="fz-18 mb-40" style={{ color: "#000", fontFamily: "Satoshi-Variable" }}>
                <li>
                  <strong>• Residential:</strong> Ideal for apartments, gated
                  communities, and standalone houses, providing reliable and
                  accessible security for modern living spaces.
                </li>
                <li>
                  <strong>• Commercial:</strong> Perfect for offices, warehouses,
                  and retail outlets, offering advanced security features
                  tailored to protect valuable assets and business operations.
                </li>
                <li>
                  <strong>• Industrial:</strong> Designed for factories,
                  manufacturing units, and storage facilities, ensuring robust
                  protection in high-demand, large-scale environments.
                </li>
                <li>
                  <strong>• Public Sector:</strong> Suited for government
                  buildings and facilities requiring advanced security measures,
                  ensuring compliance with stringent safety standards.
                </li>
              </p>

              {/* Why Choose Us */}
              <h6
                style={{
                  color: "#007bff",
                  textTransform: "uppercase",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                className="mb-20"
              >
                Why Choose Our Smart Lock Solution?
              </h6>
              <p className="fz-18 mb-40" style={{ color: "#000", fontFamily: "Satoshi-Variable" }}>
                <li>
                  <strong>• Proven Track Record:</strong> Secured over 5000+
                  premises across various sectors with consistent reliability
                  and customer satisfaction, making us a trusted name in modern
                  security solutions.
                </li>
                <li>
                  <strong>• Cost-Effective:</strong> Offering affordable yet
                  highly advanced security solutions that cater to diverse
                  budgets without compromising quality or performance.
                </li>
                <li>
                  <strong>• User-Friendly:</strong> An intuitive app interface
                  ensures effortless management and accessibility for users of
                  all technical skill levels, enhancing convenience and
                  usability.
                </li>
                <li>
                  <strong>• Enhanced Standards:</strong> Our proprietary
                  algorithms and cutting-edge engineering deliver unmatched
                  security, setting new benchmarks in the IoT smart lock
                  industry.
                </li>
              </p>

              {/* Technical Specifications */}
              <h6
                style={{
                  color: "#007bff",
                  textTransform: "uppercase",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                className="mb-20"
              >
                Technical Specifications
              </h6>
              <p className="fz-18 mb-40" style={{ color: "#000", fontFamily: "Satoshi-Variable" }}>
                <li>
                  <strong>• Material:</strong> Hardened Steel
                </li>
                <li>
                  <strong>• Access Modes:</strong> Keypad, Mobile App
                </li>
                <li>
                  <strong>• Security Levels:</strong> Dynamic Passcode,
                  Proprietary Algorithm
                </li>
                <li>
                  <strong>• Connectivity:</strong> IoT-enabled, Mobile App
                  Controlled
                </li>
                <li>
                  <strong>• Battery:</strong> Rechargeable with Low Battery Alerts
                </li>
                <li>
                  <strong>• Environmental Protection:</strong> Tamper-Proof,
                  Dustproof, All-Weather Design
                </li>
              </p>

              {/* Conclusion */}
              <h6
                style={{
                  color: "#007bff",
                  textTransform: "uppercase",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
                className="mb-20"
              >
                Conclusion
              </h6>
              <p
                className="fz-18"
                style={{ color: "#000", fontFamily: "Satoshi-Variable" }}
              >
                Our IoT-based digital smart locks redefine the security
                landscape by combining cutting-edge technology with robust
                physical protection. Designed to offer unmatched reliability,
                ease of use, and scalability, these locks empower users with
                enhanced control over their premises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
