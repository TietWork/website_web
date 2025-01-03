'use client'
import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "47179292-dcdf-44c9-8c5c-d5acca8c7dc5");

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
                  Let&apos;s make your <br /> Idea{" "}
                  <span className="fw-200">Into Reality!</span>
                </span>
              </h2>
              <p className="mt-20 mb-20">
                If you&apos;re looking to collaborate with us on your next big idea, let&apos;s make it a reality together!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Address</h6>
                    <p>
                      AE-176, Plot No. 2248, Ramkrubha, 11th Main Road,
                      Annanagar, Chennai - 600040. INDIA
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Email</h6>
                    <p className="main-color">contact@thirdeyeinfotech.com</p>
                  </div>
                </div>
              </div>
              <div className="phone fz-30 fw-600 mt-30 underline main-color">
                <a href="/light/page-contact">+91 44 4207 2248</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h3 className="text-u ls1">
                  Request a <span className="fw-200" style={{ color: "#007bff" }}>Quote</span>
                </h3>
              </div>

              {/* Form */}
              <form id="contact-form" onSubmit={onSubmit}>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
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
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <select
                        id="form_subject"
                        name="service_type"
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
                          Select Type of Service
                        </option>
                        <option value="Software Development">
                          Software Development
                        </option>
                        <option value="AI/ML & Blockchain">
                          AI/ML & Blockchain
                        </option>
                        <option value="IoT Development">IoT Development</option>
                        <option value="Big Data">Big Data</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&apos;s Talk</span>
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

export default Contact;
