'use client'
import React from "react";
import { motion } from "framer-motion";

// Sample array of clients with name and image URL
const clients = [
  { name: "Parker, USA", image: "/light/assets/imgs/clients/parker.png" },
  { name: "FarmerBoys, USA", image: "/light/assets/imgs/clients/farmer.png" },
  { name: "Cast It Talent, USA", image: "/light/assets/imgs/clients/case.png" },
  {
    name: "Halliburton, USA",
    image: "/light/assets/imgs/clients/halliburton.png",
  },
  { name: "ZyberTech, USA", image: "/light/assets/imgs/clients/zyber.png" },
  { name: "Arch Group, USA", image: "/light/assets/imgs/clients/arch.png" },
  { name: "Wurfel Kitchen, USA", image: "/light/assets/imgs/clients/wurfel.png" },
  { name: "TeamBest, USA", image: "/light/assets/imgs/clients/teambest.png" },
  { name: "Etek IT Solutions, USA", image: "/light/assets/imgs/clients/etek.png" },
  { name: "Percept, Singapore", image: "/light/assets/imgs/clients/percept.png" },
  { name: "APAL, Australia", image: "/light/assets/imgs/clients/apal.png" },
  { name: "Urban Ladder, India", image: "/light/assets/imgs/clients/urban.png" },
  { name: "BMW, UK", image: "/light/assets/imgs/clients/bmw.png" },
  { name: "BPCL, India", image: "/light/assets/imgs/clients/bpcl.png" },
  { name: "FL Smith, Denmark", image: "/light/assets/imgs/clients/fls.png" },
  { name: "Tech Mahindra, India", image: "/light/assets/imgs/clients/techm.png" },
];

function Clients() {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        {/* Page Header */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-8 text-center">
            <h2 className="mb-20 fw-600">Global Partners & Collaborations</h2>
            <p className="fz-18" style={{ color: "#555" }}>
              We are proud to collaborate with industry leaders, innovators, and trailblazers across various sectors. Our commitment to quality and excellence drives us to build enduring partnerships worldwide.
            </p>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="row gy-4 justify-content-center">
          {clients.map((client, index) => (
            <div key={index} className="col-md-3 col-sm-6 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                  border: "3px solid #E4E4E4FF",
                  borderRadius: "15px",
                  padding: "10px",
                  width: "150px",
                  height: "150px",
                  margin: "0 auto",
                  overflow: "hidden",
                  transition: "box-shadow 0.3s",
                }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </motion.div>
              <h6
                className="mt-20 fw-500"
                style={{
                  color: "#000",
                  marginBottom: "15px",
                  fontSize: "1rem",
                }}
              >
                {client.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
