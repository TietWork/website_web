"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  LocalHospital as HealthcareIcon,
  CreditCard as FinanceIcon,
  WaterDrop as WaterDrop,
  Movie as EntertainmentIcon,
  Settings as Settings,
  AccountBalance as AccountBalance,
  LocalShipping as TransportationIcon,
  School as EducationIcon,
  RoomService as RoomService,
  Business as RealEstateIcon,
  ShoppingCart as RetailIcon,
  Phone as TelecomIcon,
  Grass as AgricultureIcon,
  FlashOn as EnergyIcon,
  DirectionsCar as AutomotiveIcon,
  LocalLibrary as LogisticsIcon,
} from "@mui/icons-material";

const industries = [
  { title: "Healthcare", icon: <HealthcareIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Finance & Insurance", icon: <FinanceIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Oil & Gas", icon: <WaterDrop style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Entertainment", icon: <EntertainmentIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Manufacturing", icon: <Settings style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Government", icon: <AccountBalance style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Transportation", icon: <TransportationIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Education", icon: <EducationIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Hospitality", icon: <RoomService style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Real Estate", icon: <RealEstateIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Retail & E-commerce", icon: <RetailIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Telecommunications", icon: <TelecomIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Agriculture & AgriTech", icon: <AgricultureIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Energy & Utilities", icon: <EnergyIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Automotive", icon: <AutomotiveIcon style={{ fontSize: "35px", color: "#003049" }} /> },
  { title: "Logistics & Supply Chain", icon: <LogisticsIcon style={{ fontSize: "35px", color: "#003049" }} /> },
];

function IndustriesWeServe() {
  return (
    <section className="industries-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide tailored solutions across industries to help businesses
          achieve their goals.
        </motion.p>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              className="industry-card"
              transition={{ duration: 0.2 }}
            >
              <div className="industry-icon" style={{color: "#003049"}}>{industry.icon}</div>
              <h5 className="industry-title">{industry.title}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesWeServe;
