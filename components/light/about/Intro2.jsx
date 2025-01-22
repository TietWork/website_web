"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import { Visibility, Flag, Verified } from "@mui/icons-material";

function Intro2() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="page-intro-about section-padding bord-thin-bottom mb-30">
      <div className="container">
        {/* Vision Section */}
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up">
            <div className="cont text-center">
              <div className="icon mb-20">
                <Visibility fontSize="large" style={{ color: "#000" }} />
              </div>
              <h4>Our Vision</h4>
              <p className="mt-20"  style={{
                      color: "#000",
                      textAlign: "center",
                      fontFamily: "Satoshi-Variable",
                    }}>
                To create a world where technology is a seamless enabler of
                human potential, fostering innovation and progress in Domain and 
                bring out best results.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="cont text-center">
              <div className="icon mb-20">
                <Flag fontSize="large" style={{ color: "#000" }} />
              </div>
              <h4>Our Mission</h4>
              <p
                className="mt-20"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Satoshi-Variable",
                }}
              >
                We aim to simplify complexities with intelligent technology,
                crafting scalable solutions that empower businesses to thrive in
                dynamic environments.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="col-lg-4" data-aos="fade-left">
            <div className="cont text-center">
              <div className="icon mb-20">
                <Verified fontSize="large" style={{ color: "#000" }} />
              </div>
              <h4>Our Values</h4>
              <p className="mt-20"  style={{
                      color: "#000",
                      textAlign: "center",
                      fontFamily: "Satoshi-Variable",
                    }}>
                Guided by integrity and driven by innovation, we believe in
                building a sustainable and forward-thinking future for our
                clients and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
