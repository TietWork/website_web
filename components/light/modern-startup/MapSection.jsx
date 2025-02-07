"use client";
import { color } from "framer-motion";
import React from "react";

function MapSection() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "10px 20px",
        textAlign: "center",
        position: "relative",
        marginTop:"20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#007BFF",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Discover our global footprint
        </h2>
        <p
          style={{
            color: "#000",
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Headquartered in{" "}
          <span style={{ color: "#007BFF", fontWeight: "600" }}>Chennai, India</span>{" "}
          and with offices across{" "}
          <span style={{ color: "#007BFF", fontWeight: "600" }}>Australia</span>
          , <span style={{ color: "#007BFF", fontWeight: "600" }}>USA</span>,{" "}
          <span style={{ color: "#007BFF", fontWeight: "600" }}>UAE</span> and 
          {" "}<span style={{ color: "#007BFF", fontWeight: "600" }}>Malaysia, </span>
          {" "} we connect wtih clients and partners 
          across the the world.
        </p>

        {/* World Map Section */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Map Image */}
          <img
            src="/light/assets/imgs/worldmap/main-map.png"
            alt="World Map"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default MapSection;
