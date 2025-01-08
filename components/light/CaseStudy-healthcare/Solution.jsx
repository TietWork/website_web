import React from "react";

function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Subheading */}
              <div className="col-lg-5">
                <h4 className="mb-50">
                  02 . <span style={{ color: "#007bff" }}>The Quotes</span>
                </h4>{" "}
                <h4 className="mb-50">
                  03 . <span style={{ color: "#007bff" }}>Conclusion</span>
                </h4>{" "}
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  <h6 style={{ color: "#007bff" }} className="mb-30">
                    The Quotes
                  </h6>
                  <blockquote
                    className="mb-30"
                    style={{
                      fontStyle: "italic",
                      borderLeft: "4px solid #007bff",
                      paddingLeft: "15px",
                      color: "#555",
                    }}
                  >
                    The integration of Thirdeye&apos;s software with our device has
                    revolutionized how we detect early-stage skin cancer. The
                    live gauge and real-time feedback give us the confidence to
                    act swiftly.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Product Lead, Medical Device Partner
                    </span>
                  </blockquote>
                  <blockquote
                    className="mb-30"
                    style={{
                      fontStyle: "italic",
                      borderLeft: "4px solid #007bff",
                      paddingLeft: "15px",
                      color: "#555",
                    }}
                  >
                    By harnessing Windows Surface technology, we&apos;ve created a
                    seamless solution that empowers medical professionals to
                    make life-saving decisions faster than ever before.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Thirdeye Development Team
                    </span>
                  </blockquote>
                  <p
                    className="fz-18"
                    style={{ color: "#555", marginTop: "20px" }}
                  >
                    This case study highlights Thirdeye&apos;s commitment to
                    delivering transformative digital solutions, driving
                    innovation, and enhancing user experiences across
                    industries.
                  </p>
                </div>

                {/* Conclusion */}
                <h6 style={{ color: "#007bff" }} className="mt-40 mb-20">
                  Conclusion
                </h6>
                <p className="fz-18" style={{ color: "#555" }}>
                  This project exemplifies Thirdeye&apos;s dedication to
                  developing transformative healthcare solutions through
                  advanced software. Our collaboration with medical device
                  manufacturers demonstrates our ability to leverage technology
                  to drive innovation, ultimately enhancing patient care and
                  saving lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
