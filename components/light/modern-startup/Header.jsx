"use client";
import React from "react";
import { color, motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  const buttonVariants = {
    initial: { borderRadius: "50px", backgroundColor: "#90e0ef" },
    hover: {
      backgroundColor: "#00b4d8",
      transition: { duration: 0.3 },
    },
  };

  const dotArrowVariants = {
    initial: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "#000",
      opacity: 1,
    },
    hover: {
      width: 36,
      height: 36,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const arrowVariants = {
    initial: { opacity: 0, x: -10 },
    hover: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className="header-main"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/light/assets/imgs/background/cover8.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "2rem" }} className="firstheading">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontWeight: "900",
            color: "#edede9",
          }}
        >
          INNOVATING TOMORROW&apos;S
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.h2
            style={{
              display: "flex",
              alignSelf: "center",
              justifySelf: "center",
              fontWeight: "900",
              color: "#edede9",
              marginLeft: "1rem",
              textTransform: "uppercase",
            }}
          >
            TECHNOLOGY TODAY
          </motion.h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: "1.5rem",
            color: "#C1C1C1FF",
            lineHeight: "1.6",
            display: "flex",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          With a track record of over 150 successful projects, combined
          experience of 200 years, expertise in 10 platforms and clients in 15
          countries, Third Eye Info Technology transforms your businesses
          through innovative software solutions.
          <br />
        </motion.p>
      </div>

      {/* Animated Button */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      ></div>
    </div>
  );
}

export default Header;
