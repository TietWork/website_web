import React from "react";
import { FaEye } from "react-icons/fa"; // Import the Eye Icon

function Intro() {
  return (
    <section className="intro section-padding position-re">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="cont">
              {/* <h4 className="d-slideup wow">
                <span className="sideup-text">
                  <span className="up-text">At Third Eye Info Technology </span>
                </span>
                <span className="sideup-text">
                  <span className="up-text">
                    {" "}
                    we craft innovative more than <br /> software solutions with
                    expertise <br />
                    to make your business stand out.
                  </span>
                </span>
                <span className="sideup-text">
                  <span
                    style={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#000814",
                      color: "#fff",
                      padding: "14px 25px",
                      borderRadius: "30px",
                      textDecoration: "none",
                      cursor: "pointer",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Contact us{" "}
                    <a
                      href="/light/page-contact"
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        marginLeft: "10px",
                        textDecoration: "none",
                      }}
                    >
                      <i
                        className="fas fa-arrow-right"
                        style={{
                          fontSize: "20px",
                        }}
                      ></i>
                    </a>
                  </span>
                </span>
              </h4> */}
              <div className="exp mt-20">
                <h1
                  className=""
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "96px",
                  }}
                >
                  23+{" "}
                  <span className="sub-title opacity-7 ml-15" style={{fontFamily:'Satoshi-Variable'}}>
                    Years of Experience
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text">
            <p style={{ color: "#001524", fontSize: "22px" , textTransform: 'uppercase', fontFamily:'Satoshi-Variable', fontWeight:'600'}}>
                  Empowering Businesses with Innovative Software Solutions
                </p>
              <p>
                <br />
                With over 23 years of experience, Third Eye Info Technology
                delivers cutting-edge software solutions that drive growth and
                efficiency. Our expertise spans custom software development, AI,
                machine learning, blockchain, IoT, big data, and business
                development. We craft tailored solutions to address modern
                challenges, optimize processes, and unlock new opportunities. By
                leveraging innovation and the latest technology, we empower
                businesses to stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Intro;
