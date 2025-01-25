"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import { Visibility, Flag, Verified } from "@mui/icons-material";

function Intro() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="page-intro position-re">
      <div className="container section-padding">
        <div className="row">
          <div
            style={{
              color: "#000",
              textAlign: "left",
              fontFamily: "Satoshi-Variable",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                color: "#000",
                textAlign: "left",
                fontFamily: "Satoshi-Variable",
              }}
            >
              Founded in 2001, Third Eye Info Technology a ambitious venture
              with a vision to transform businesses through technology. Over the
              years, we&apos;ve grown into a global powerhouse, delivering
              cutting-edge solutions that drive innovation and success.
              <br />
              <br />
              Headquartered in Chennai, we&apos;ve expanded our reach to the
              USA, Australia, Malaysia and the UAE, completing over 150
              transformative projects across 15+ industries. Our solutions have
              positively impacted the lives of over 100 million beneficiaries,
              making a tangible difference in to businesses and industries
              worldwide. Over and above our technical expertise and experience,
              what sets us apart is our unwavering commitment to collaboration,
              integrity, and sustainable growth. We believe in simplifying the
              complex and empowering businesses to thrive in an ever-evolving
              digital landscape.
              <br />
              <br />
              At Third Eye, every project is more than just code, it&apos;s a
              step towards a smarter, more connected future. Our journey
              reflects the trust our clients place in us and the passion we
              bring to every solution we develop.
            </p>
          </div>
          {/* Vision Section */}
          <div className="row mt-40">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="cont text-center">
                <div className="icon mb-20">
                  <Visibility fontSize="large" style={{ color: "#000" }} />
                </div>
                <h4>Our Vision</h4>
                <p
                  className="mt-20"
                  style={{
                    fontSize: "18px",
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Satoshi-Variable",
                  }}
                >
                  To create a world where technology is a seamless enabler of
                  human potential, fostering innovation and progress in Domain
                  and bring out best results.
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
                    fontSize: "18px",
                    textAlign: "center",
                    fontFamily: "Satoshi-Variable",
                  }}
                >
                  We aim to simplify complexities with intelligent technology,
                  crafting scalable solutions that empower businesses to thrive
                  in dynamic environments.
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
                <p
                  className="mt-20"
                  style={{
                    color: "#000",
                    fontSize: "18px",
                    textAlign: "center",
                    fontFamily: "Satoshi-Variable",
                  }}
                >
                  Guided by integrity and driven by innovation, we believe in
                  building a sustainable and forward-thinking future for our
                  clients and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
