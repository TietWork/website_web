"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  LocalHospital as HealthcareIcon,
  CreditCard as FinanceIcon,
  DataUsage as OilGasIcon,
  Movie as EntertainmentIcon,
  Computer as ManufacturingIcon,
  Public as GovernmentIcon,
  LocalShipping as TransportationIcon,
  School as EducationIcon,
  Hotel as HospitalityIcon,
  Business as RealEstateIcon,
  ShoppingCart as RetailIcon,
  Phone as TelecomIcon,
  Grass as AgricultureIcon,
  FlashOn as EnergyIcon,
  DirectionsCar as AutomotiveIcon,
  LocalLibrary as LogisticsIcon,
} from "@mui/icons-material";

const industries = [
  {
    title: "Healthcare",
    icon: <HealthcareIcon className="h-12 w-12 text-blue-500" style={{fontSize:"35px"}}/>,
  },
  {
    title: "Finance & Insurance",
    icon: <FinanceIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Oil & Gas",
    icon: <OilGasIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Entertainment",
    icon: <EntertainmentIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Manufacturing",
    icon: <ManufacturingIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Government",
    icon: <GovernmentIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Transportation",
    icon: <TransportationIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Education",
    icon: <EducationIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Hospitality",
    icon: <HospitalityIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Real Estate",
    icon: <RealEstateIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Retail & E-commerce",
    icon: <RetailIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Telecommunications",
    icon: <TelecomIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Agriculture & AgriTech",
    icon: <AgricultureIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Energy & Utilities",
    icon: <EnergyIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Automotive",
    icon: <AutomotiveIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
  {
    title: "Logistics & Supply Chain",
    icon: <LogisticsIcon className="h-12 w-12 text-blue-500"  style={{fontSize:"35px"}}/>,
  },
];

function  IndustriesWeServe() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        color: "#333333",
        padding: "60px 20px",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <div className="container">
        {/* Heading */}
        <motion.h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#007BFF",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
        </motion.h2>

        <motion.p
          style={{
            color: "#000",
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontFamily: "Satoshi-Variable",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide tailored solutions across industries to help businesses
          achieve their goals.
        </motion.p>

        {/* Industries Icons and Titles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // Ensures exactly 4 items per row
            gap: "30px",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              style={{
                textAlign: "center",
                cursor: "pointer",
              }}
              transition={{ duration: 0.2 }}
            >
              <div
                style={{
                  fontSize: "48px",
                  color: "#003049",
                  marginBottom: "10px",
                  transition: "color 0.2s ease",
                }}
              >
                {industry.icon}
              </div>
              <h5
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#333333",
                }}
              >
                {industry.title}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesWeServe;
