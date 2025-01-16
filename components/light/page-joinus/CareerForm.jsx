"use client";
import React, { useState } from "react";
import axios from "axios";

function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
    resume: null
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObject = new FormData();
    formDataObject.append("name", formData.name);
    formDataObject.append("email", formData.email);
    formDataObject.append("interest", formData.interest);
    formDataObject.append("message", formData.message);
    formDataObject.append("resume", formData.resume);

    try {
      const response = await axios.post(
        "https://tiet-back.onrender.com/form/submit",
        formDataObject
      );
      console.log(response.data);
      setResult(response.data.message);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("An error occurred while submitting the form.");
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
                Ready to take the next step in your career? We&apos;re excited to work
                with passionate and talented individuals who thrive on innovation
                and collaboration.
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
              <form id="career-form" onSubmit={handleSubmit}>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about yourself"
                        rows="4"
                        required
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <label className="mb-10" htmlFor="resume">
                        Upload Resume:
                      </label>
                      <input
                        id="resume"
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleChange}
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
                  </div>
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
