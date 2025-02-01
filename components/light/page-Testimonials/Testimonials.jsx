'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import data from "@/l-data/testimonials.json";

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-arrow-control .swiper-button-next",
      prevEl: ".swiper-arrow-control .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  };

  return (
    <section
      className="testimonials section-padding"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mr-15">
            <div className="section-title text-center">
              <p style={{ fontSize: "22px", color: "#007BFF" }}>
              Here is what our clients have to say about their experiences with us.
              </p>
            </div>
          </div>
          <div className="col-lg-12" style={{ marginRight: "35px" }}>
            <div className="testim-swiper mb-15">
              <Swiper {...swiperOptions} className="swiper-container">
                {data.slice(0, 5).map((item, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="testimonial-card"
                      style={{
                        background: "#fff",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderRadius: "10px",
                        padding: "40px", // Increased padding for proper spacing
                        margin: "30px 15px", // Adjust margin for better spacing between cards
                        minHeight: "300px", // Ensures no content gets cut off
                      }}
                    >
                      <div className="content p-20">
                        <p
                          className="fz-20"
                          style={{
                            color: "#000",
                            marginBottom: "20px",
                            padding: "0 20px",
                          }}
                        >
                          {item.desc}
                        </p>
                        <div
                          className="info d-flex flex-column align-items-center pt-20"
                          style={{
                            borderTop: "1px solid #ddd",
                            paddingTop: "20px",
                            textAlign: "center", // Ensures proper centering on all screen sizes
                          }}
                        >
                          <h5
                            style={{
                              color: "#000",
                              fontWeight: "bold",
                              marginBottom: "10px",
                            }}
                          >
                            {item.name}
                          </h5>
                          <span
                            className="sub-title"
                            style={{
                              color: "#007BFF",
                              fontSize: "14px",
                              display: "block", // Forces `{item.des}` to be on a new line
                            }}
                          >
                            {item.des}
                          </span>
                          <span
                            className="sub-title"
                            style={{
                              color: "#007BFF",
                              fontSize: "14px",
                              marginTop: "5px", // Adds space between the lines
                              display: "block", // Forces `{item.subName}` to be on a new line
                            }}
                          >
                            {item.subName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-arrow-control justify-content-center d-flex ml-35">
              <div
                className="swiper-button-prev"
                style={{
                  background: "#007BFF",
                  color: "#fff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="ti-arrow-left"></span>
              </div>
              <div
                className="swiper-button-next"
                style={{
                  background: "#007BFF",
                  color: "#fff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
