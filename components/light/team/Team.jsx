"use client";
import React from "react";
import data from "@/l-data/team.json";

function OurTeam() {
  return (
    <section className="team section-padding pb-60">
      <div className="container">
        {/* Founder's Vision Section */}
        <div className="row align-items-center mb-10">
          {/* Founder's Image */}
          <div className="col-lg-5 text-center">
            <img
              src="/light/assets/imgs/ourteam/jayaraman.png"
              alt="Founder"
              style={{
                width: "65%",
                height: "auto",
                borderRadius: "15px",
              }}
            />
            {/* Founder's Name */}
            <h5
              className="mt-10 fw-600 text-uppercase  text-center"
              style={{ color: "#000" }}
            >
              Jayavasanth Jayaraman
            </h5>
            <h6
              className="text-uppercase text-center"
              style={{ color: "#000" }}
            >
              Founder & Managing Director
            </h6>
          </div>

          {/* Founder's Vision */}
          <div className="col-lg-7">
            <h2 className="mb-20 fw-600 mt-25 fz-30 main-color text-lg-start text-center text-uppercase">
              Founder&apos;s Vision
            </h2>
            <p
              className="fz-18 text-lg-start text"
              style={{ color: "#000", lineHeight: "1.8" }}
            >
              At the heart of our success lies our commitment to innovation,
              teamwork, and a relentless pursuit of excellence. Our founder
              envisioned a company where talent thrives, and collaboration fuels
              progress. Through leadership and a clear vision, we strive to make
              a meaningful impact, empowering businesses and shaping the future.
              <br />
              <br />
              Third Eye stands as a beacon of cutting-edge solutions and
              customer-centric innovation. With expertise spanning web
              technologies, IT services, and automation, we are dedicated to
              delivering scalable, efficient, and transformative solutions for
              our global clients. Our mission is to bridge the gap between
              technology and business, fostering growth, and driving excellence.
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <section className="team section-padding pb-60">
          <div className="container">
            <div className="row">
              <h3
                className="mt-10 fw-600 mb-40 main-color"
                style={{
                  color: "#000",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Core team <br />
              </h3>
              {data.map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div className="mb-20">
                    <div
                      className="img"
                      style={{ alignContent: "center", borderRadius: "15px" }}
                    >
                      <img src={item.img} alt="" />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "16px",
                          textAlign: "center",
                        }}
                      >
                        <span style={{ fontSize: "12px" }}>{item.subName}</span>
                        <h6 style={{ fontSize: "18px" }}>{item.name}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default OurTeam;
