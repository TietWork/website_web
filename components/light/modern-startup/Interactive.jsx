"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowOutward // ArrowUpRight equivalent
} from "@mui/icons-material";
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import LandscapeIcon from '@mui/icons-material/Landscape';
import DiamondIcon from '@mui/icons-material/Diamond';
import FaceIcon from '@mui/icons-material/Face';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const Interactive = () => {
  const projects = [
    {
      title: "LPG Automated Vending Machine",
      description: "Revolutionizing fuel distribution with smart vending solutions",
      icon: PropaneTankIcon, // Reference to the icon
      color: "#003049",
      link: "/light/project-lpgVending"
    },
    {
      title: "IoT Smart Locks",
      description: "Next-generation security systems for modern infrastructure and Industry",
      icon: PhonelinkLockIcon, // Reference to the icon
      color: "#003049",
      link: "/light/project-Iot"
    },
    {
      title: "Geospatial Data Processing",
      description: "Advanced mapping solutions with AI-powered insights",
      icon: LandscapeIcon, // Reference to the icon
      color: "#003049",
      link: "/light/casestudy-GeoSpatial"
    },
    {
      title: "RFID-based Jewel Tracking",
      description: "Secure tracking system for high-value assets",
      icon: DiamondIcon, // Reference to the icon
      color: "#003049",
      link: "/light/project-RFID"
    },
    {
      title: "Face Detection for Hollywood",
      description: "AI-powered facial recognition for entertainment industry",
      icon: FaceIcon, // Reference to the icon
      color: "#003049",
      link: "/light/casestudy-faceDetection"
    },
    {
      title: "Healthcare Innovations",
      description: "Digital solutions transforming patient care and enhancing healthcare efficiency",
      icon: HealthAndSafetyIcon, // Reference to the icon
      color: "#003049",
      link: "/light/casestudy-healthcare"
    }
  ];

  const sectionStyle = {
    background: "#000814",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px 20px",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    position: "relative"
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
    padding: "30px 20px",
    position: "relative"
  };

  const titleStyle = {
    fontFamily: "Poppins",
    fontSize: "3rem",
    fontWeight: "500",
    color: "#CDCDCDFF",
    marginBottom: "40px",
    textAlign: "center"
  };

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  };

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
    textDecoration: "none",
    position: "relative",
    width: "100%",
    maxWidth: "350px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    overflow: "hidden"
  };

  const iconStyle = {
    width: "60px",
    height: "60px",
    marginBottom: "20px",
    flexShrink: 0
  };

  const contentStyle = {
    textAlign: "center"
  };

  const projectTitleStyle = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#1E293B",
    marginBottom: "16px",
    transition: "color 0.3s ease",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#64748B",
    lineHeight: 1.8,
    transition: "color 0.3s ease"
  };

  const arrowStyle = {
    position: "absolute",
    top: "16px",
    right: "16px",
    opacity: 0.7,
    transition: "opacity 0.3s ease"
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <motion.h2
          style={titleStyle}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR FEATURED {" "}
          <span style={{ color: "#007BFF" }}>PROJECTS</span>
        </motion.h2>

        <motion.div
          style={listStyle}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={index}
                href={project.link}
                style={itemStyle}
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                  },
                  show: { 
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      damping: 15,
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
                  backgroundColor: "#eff6ff",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  style={iconStyle}
                  whileHover={{ scale: 1.1}}
                  transition={{ duration: 0.3 }}
                >
                  <Icon 
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      color: project.color,
                      strokeWidth: 1.5
                    }} 
                  />
                </motion.div>

                <div style={contentStyle}>
                  <motion.h3 
                    style={projectTitleStyle}
                    whileHover={{
                      color: "linear-gradient(135deg, #2563eb, #3b82f6)", 
                      backgroundClip: "text", 
                      WebkitBackgroundClip: "text"
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    style={descriptionStyle}
                    whileHover={{ color: "#2563eb" }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                <motion.div 
                  style={arrowStyle}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowOutward size={24} />
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Interactive;
