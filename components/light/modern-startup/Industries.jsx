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
  LocalLibrary as LogisticsIcon 
} from '@mui/icons-material'; 

const industries = [
  { title: "Healthcare", icon: <HealthcareIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Finance & Insurance", icon: <FinanceIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Oil & Gas", icon: <OilGasIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Entertainment", icon: <EntertainmentIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Manufacturing", icon: <ManufacturingIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Government", icon: <GovernmentIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Transportation", icon: <TransportationIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Education", icon: <EducationIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Hospitality", icon: <HospitalityIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Real Estate", icon: <RealEstateIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Retail & E-commerce", icon: <RetailIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Telecommunications", icon: <TelecomIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Agriculture & AgriTech", icon: <AgricultureIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Energy & Utilities", icon: <EnergyIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Automotive", icon: <AutomotiveIcon className="h-12 w-12 text-blue-500" /> },
  { title: "Logistics & Supply Chain", icon: <LogisticsIcon className="h-12 w-12 text-blue-500" /> },
];

function IndustriesWeServe() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        color: "#333333",
        padding: "60px 20px",
        textAlign: "center",
        marginBottom:"20px",
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
            textTransform:"uppercase",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Industries We Serve
        </motion.h2>

        <motion.p
          style={{
            color: "#555555",
            fontSize: "18px",
            marginBottom: "40px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontFamily:"Satoshi-Variable",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We provide tailored solutions across industries to help businesses achieve their goals.
        </motion.p>

        {/* Industries Icons and Titles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
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

        {/* Call-to-Action Button
        <motion.a
          href="/light/page-contact"
          whileHover={{ scale: 1.05, backgroundColor: "#0056B3" }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: "40px",
            padding: "12px 32px",
            backgroundColor: "#007BFF",
            color: "#FFFFFF",
            borderRadius: "25px",
            fontSize: "16px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          Contact Us
        </motion.a> */}
      </div>
    </section>
  );
}

export default IndustriesWeServe;
