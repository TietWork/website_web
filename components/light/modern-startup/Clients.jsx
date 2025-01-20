'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clients() {
  const swiperOptions = {
    speed: 500,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 640px
      500: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      700: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1000: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  };
  return (
    <section className="clients-carso section-padding pt-20">
      <div className="container">
        <div className="sec-bottom">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              More than <span className="fw-600">100+ companies </span>{" "}
              trusted us worldwide
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
