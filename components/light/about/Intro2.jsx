'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Intro2() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="page-intro-about section-padding bord-thin-bottom mb-20">
      <div className="container">
        {/* Main Heading and Subheading */}
        <div className="row align-items-center text-center">
          <div className="col-lg-12" data-aos="fade-up">
            <h2>Innovating Since 2001</h2>
            <h3 className="main-color">Your Tech Partner for the Future</h3>
            <p className="subheading mt-20 fz-18">
              Over two decades of excellence, delivering cutting-edge solutions across industries and geographies.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="row mt-80">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="cont text-center">
              <div className="icon mb-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width={35}
                  height={35}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <h4>Our Mission</h4>
              <p className="mt-20">
                We aim to simplify complexities with intelligent technology, crafting scalable solutions that empower businesses to thrive in dynamic environments.
              </p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-left">
            <div className="cont text-center">
              <div className="icon mb-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={35}
                  height={35}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h4>Our Values</h4>
              <p className="mt-20">
                Guided by integrity and driven by innovation, we believe in building a sustainable and forward-thinking future for our clients and community.
              </p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <div className="cont text-center">
              <div className="icon mb-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width={35}
                  height={35}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4>Our Vision</h4>
              <p className="mt-20">
                To create a world where technology is a seamless enabler of human potential, fostering innovation and progress for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
