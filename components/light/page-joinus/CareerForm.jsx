"use client";
import React, { useState } from "react";
import axios from "axios";

function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
    resume: null,
  });
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        interest: "",
        message: "",
        resume: null,
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="contact section-padding sub-bg bord-thin-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h3 className="text-u ls1">
                  <span className="fw-600" style={{ color: "#007bff" }}>
                    APPLY NOW!
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
                        value={formData.name}
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
                        value={formData.email}
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
                        value={formData.message}
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
                        className="butn butn-full butn-bord radius-30 gradient-button"
                      >
                        <span className="text">SUBMIT APPLICATION</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
              width: "380px",
            }}
          >
            <h3
              style={{
                color: "#000",
                marginBottom: "10px",
                fontSize: "20px",
                fontFamily: "Satoshi-Variable",
              }}
            >
              Thank you for applying!
            </h3>
            <p
              style={{
                color: "#000",
                fontSize: "16px",
                fontFamily: "Satoshi-Variable",
              }}
            >
              We will review your application and get back to you soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="butn butn-full butn-bord radius-30 mt-20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default CareerForm;
