import React from 'react';

function Challenge() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          {/* Left Section - Title */}
          <div className="col-lg-5 d-flex flex-column align-items-start justify-content-center">
            <h2 className="mb-50">
              The <br />
              <span style={{ color: '#007bff' }}>Revolution</span>
            </h2>
          </div>

          {/* Right Section - Project Overview */}
          <div className="col-lg-7">
            <div className="text">
              <h3 className="mb-30 fw-400 line-height-40" style={{ color: '#000' }}>
                IoT-Based Digital Smart Locks – A New Era in Security
              </h3>
              <p className="fz-18 mb-40" style={{ color: '#555' }}>
                Our IoT-based digital smart locks redefine modern security by offering dynamic, 
                hack-proof, and user-friendly solutions for homes, offices, and industrial premises. 
                Trusted by thousands of users, these locks integrate advanced technology with seamless 
                mobile application support, setting a new standard for safety and control.
              </p>

              {/* Key Features and Functionality */}
              <h6 style={{ color: '#007bff' }} className="mb-20">
                Key Features and Functionality
              </h6>
              <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                <li>
                  <strong>Advanced Access Control:</strong> Dynamic passcodes, encrypted for maximum 
                  security, with a user-friendly keypad interface.
                </li>
                <li>
                  <strong>Mobile Integration:</strong> Dedicated app for access management, 
                  time-controlled permissions, and multi-user management.
                </li>
                <li>
                  <strong>Anti-Theft Protection:</strong> Built-in alarm and tamper-resistant design 
                  ensure uninterrupted security.
                </li>
                <li>
                  <strong>Durable Build:</strong> Weather-resistant and made with high-grade hardened 
                  steel for extreme durability.
                </li>
                <li>
                  <strong>Rechargeable Capability:</strong> Long-lasting rechargeable battery with 
                  low-battery alerts.
                </li>
              </ul>

              {/* Applications */}
              <h6 style={{ color: '#007bff' }} className="mb-20">
                Applications
              </h6>
              <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                <li>Residential: Apartments, gated communities, standalone houses.</li>
                <li>Commercial: Offices, warehouses, and retail outlets.</li>
                <li>Industrial: Factories, manufacturing units, and storage facilities.</li>
                <li>Public Sector: Government buildings requiring advanced security.</li>
              </ul>

              {/* Why Choose Us */}
              <h6 style={{ color: '#007bff' }} className="mb-20">
                Why Choose Our Smart Lock Solution?
              </h6>
              <ul className="fz-18 mb-40" style={{ color: '#000' }}>
                <li>
                  <strong>Proven Track Record:</strong> Secured over 5000+ premises across various 
                  sectors.
                </li>
                <li>
                  <strong>Cost-Effective:</strong> Affordable yet advanced security solutions.
                </li>
                <li>
                  <strong>User-Friendly:</strong> Intuitive app interface for effortless management.
                </li>
                <li>
                  <strong>Enhanced Standards:</strong> Proprietary algorithms ensure unmatched 
                  security.
                </li>
              </ul>

              <p className="fz-18" style={{ color: '#555' }}>
                With cutting-edge features and proven reliability, our IoT-based smart locks are the 
                ultimate choice for modern security solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
