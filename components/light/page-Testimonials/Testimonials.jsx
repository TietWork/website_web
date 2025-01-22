"use client";
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
    centeredSlides: false,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-arrow-control .swiper-button-next",
      prevEl: ".swiper-arrow-control .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      768: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
  };
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 position-re">
            <div className="testim-swiper">
              <Swiper
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
                loop={true}
                {...swiperOptions}
              >
                {data.slice(0, 5).map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256.721"
                            height="208.227"
                            viewBox="0 0 256.721 208.227"
                            className="qout-svg"
                          >
                            <path
                              data-name="Path"
                              d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                              transform="translate(121.55 640.568)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1"
                              opacity="0.322"
                            ></path>
                          </svg>
                          <p
                            className="fz-30 "
                            style={{
                              color: "#000",
                              textAlign: "left",
                              fontFamily: "Satoshi-Variable",
                            }}
                          >
                            {item.desc}
                          </p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div className="ml-20">
                            <h5
                              style={{
                                color: "#000",
                                textAlign: "left",
                                fontFamily: "Satoshi-Variable",
                              }}
                            >
                              {item.name}
                            </h5>
                            <span
                              className="sub-title main-color"
                              style={{
                                color: "#000",
                                textAlign: "left",
                                fontFamily: "Satoshi-Variable",
                              }}
                            >
                              {item.subName}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-arrow-control control-abslout">
              <div className="swiper-button-prev">
                <span className="ti-arrow-left"></span>
              </div>
              <div className="swiper-button-next">
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
