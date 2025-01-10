"use client";
import React, { useState } from "react";

function CareerForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "key"); // key to be added

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Error submitting the form. Please try again.");
    }
  };

  return (
    <section className="contact section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="sec-head md-mb80">
              <h2 className="text-u ls1 d-rotate wow">
                <span className="rotate-text">
                  Join <br /> Our <span className="fw-200">Dynamic Team!</span>
                </span>
              </h2>
              <p className="mt-20 mb-20">
                Ready to take the next step in your career? We&apos;re excited to
                work with passionate and talented individuals who thrive on
                innovation and collaboration.
              </p>
              <div className="morinfo mt-30">
                <h6 className="mb-15">Email</h6>
                <p className="main-color">career@thirdeyeinfotech.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h3 className="text-u ls1">
                  Apply for a{" "}
                  <span className="fw-200" style={{ color: "#007bff" }}>
                    Career
                  </span>
                </h3>
              </div>

              {/* Career Form */}
              <form id="career-form" onSubmit={onSubmit}>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <select
                        id="form_interest"
                        name="interest"
                        required="required"
                        style={{
                          width: "100%",
                          padding: "10px 15px",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          fontSize: "16px",
                          color: "#333",
                          background: "#f8f9fa",
                          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                          outline: "none",
                          transition: "border-color 0.3s ease",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#007bff")
                        }
                        onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                      >
                        <option value="" disabled selected>
                          Select Your Interest
                        </option>
                        <option value="Software Development">
                          Software Development
                        </option>
                        <option value="AI/ML & Blockchain">
                          AI/ML & Blockchain
                        </option>
                        <option value="IoT Development">IoT Development</option>
                        <option value="Big Data">Big Data</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Tell us about yourself"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                  </div>
                  {/* <div className="col-12">
                    <div className="form-group mb-30">
                      <label className="mb-10" htmlFor="form_resume">
                        Upload Resume:
                      </label>
                      <input
                        id="form_resume"
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required="required"
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          background: "#f8f9fa",
                        }}
                      />
                    </div>
                  </div> */}
                  <div className="col-12">
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Submit Application</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {result && <p className="mt-20">{result}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerForm;
