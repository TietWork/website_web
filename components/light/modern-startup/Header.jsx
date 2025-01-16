"use client";
import React from "react";
import { color, motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  // Animation Variants
  const starVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        ease: "linear",
      },
    },
  };

  const buttonVariants = {
    initial: { borderRadius: "50px", backgroundColor: "#ffe594" },
    hover: {
      backgroundColor: "#FBD04FFF",
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
        backgroundImage: `url('/light/assets/imgs/background/Cover.png')`,
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
            color: "#051923",
          }}
        >
          Innovating Tomorrow
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
            Simplifying Today.
          </motion.h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            marginTop: "1.5rem",
            color: "#898989FF",
            lineHeight: "1.6",
            display: "flex",
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          Turning possibilities into groundbreaking solutions, we transform
          ideas into reality with innovation and expertise.
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
      >
        {/* First Button */}
        <a href="/light/page-contact" style={{ textDecoration: "none" }}>
          <motion.button
            className="custom-button"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 3rem",
              border: "none",
              outline: "none",
              cursor: "pointer",
              borderRadius: "50px",
              color: "#382b04",
              fontSize: "16px",
              fontWeight: "600",
              gap: "10px",
            }}
          >
            <motion.div
              variants={dotArrowVariants}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                overflow: "hidden",
              }}
            />
            <motion.div
              variants={arrowVariants}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <BsArrowRight size={20} />
            </motion.div>
            Talk With Us
          </motion.button>
        </a>

        {/* Second Button */}
        <a href="/light/casestudy-alekton" style={{ textDecoration: "none" }}>
          <motion.button
            className="custom-button"
            initial="inital"
            whileHover="hover"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 3rem",
              border: "2px solid #43403f",
              outline: "none",
              cursor: "pointer",
              borderRadius: "50px",
              color: "#43403f",
              backgroundColor: "#fff9f2",
              fontSize: "16px",
              fontWeight: "600",
              gap: "10px",
            }}
          >
            <motion.div
              variants={dotArrowVariants}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                overflow: "hidden",
              }}
            />
            <motion.div
              variants={arrowVariants}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <BsArrowRight size={20} /> */}
            </motion.div>
            Read Case Studies
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default Header;
