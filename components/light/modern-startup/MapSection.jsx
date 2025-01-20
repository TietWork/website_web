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
            fontSize: "36px",
            color: "#00171F",
            marginBottom: "20px",
          }}
        >
          Our Global Presence
        </h2>
        <p
          style={{
            color: "#555555",
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Discover our global footprint: Headquartered in{" "}
          <span style={{ color: "#007BFF", fontWeight: "600" }}>Chennai</span>{" "}
          with offices in{" "}
          <span style={{ color: "#007BFF", fontWeight: "600" }}>Australia</span>
          , <span style={{ color: "#007BFF", fontWeight: "600" }}>USA</span>,{" "}
          <span style={{ color: "#007BFF", fontWeight: "600" }}>UAE</span> and 
          {" "}<span style={{ color: "#007BFF", fontWeight: "600" }}>Malaysia</span>
          {" "} connecting seamlessly with the world.
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
            src="/light/assets/imgs/worldmap/map.png"
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
