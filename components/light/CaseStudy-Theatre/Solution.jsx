import React from "react";

function Solution() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Right Section - Content */}
              <div className="col-lg-12">
                <div className="text">
                  {/* Key Quotes Section */}
                  <h6 style={{ color: "#007bff" }} className="mt-40 mb-20">
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
                    The Digital Information Display System transformed our
                    theatre&apos;s operations. The real-time seat visualization
                    has been a game-changer for our patrons.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – Operations Manager, Leading Theatre in the USA
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
                    Partnering with Third Eye brought innovative solutions to
                    the forefront, significantly enhancing our client&apos;s
                    ability to manage their operations effectively.
                    <br />
                    <span style={{ fontWeight: "bold", color: "#333" }}>
                      – ZyberTech
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
