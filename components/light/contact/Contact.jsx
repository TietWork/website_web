"use client";
import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

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
        setShowModal(true);
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
          {/* Form Section */}
          <div className="col-12">
            <div className="full-width mb-50">
              <h4 className="text-u  mb-30 text-center" style={{fontSize:"30px"}}>
                If you&apos;re looking to collaborate with us on your next big
                idea, <br/>
                <span style={{color:"#007BFF"}}>let&apos;s make it a reality together!</span>
              </h4>
              <form id="contact-form" onSubmit={onSubmit}>
                <div className="controls">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="full-width-input"
                    />
                  </div>
                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="full-width-input"
                    />
                  </div>
                  <div className="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="full-width-input"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="5"
                      required
                      className="full-width-input"
                    ></textarea>
                  </div>
                  <div className="text-center mt-30">
                    <button
                      type="submit"
                      className="butn butn-full butn-bord radius-30"
                    >
                      <span className="text">SUBMIT</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="col-12">
            <div className="mt-50 text-center">
              <h3 className="fz-30 ls1 mb-30 main-color" style={{textTransform:"uppercase"}}>Contact Details</h3>
              <div className="mt-30">
                <h6
                  className="mb-15 main-color"
                  style={{ fontFamily: "Satoshi-Variable", fontSize: "22px", textTransform:"uppercase" }}
                >
                  Address
                </h6>
                <p style={{ fontFamily: "Satoshi-Variable", fontSize: "18px" ,color:"#000",}} className="fw-500">
                AE-176, Plot No. 2248, Ram Krubha, 11th Main Road, Anna Nagar, Chennai - 600040, India   
                </p>
              </div>
              <div className="mt-30">
                <h6 className="mb-15 main-color">EMAIL</h6>
                <p className="fz-18  underline fw-500 black">
                  contact@thirdeyeinfotech.com
                </p>
              </div>
              <div className="mt-30">
                <h6
                  className="mb-15 main-color"
                  style={{ fontFamily: "Satoshi-Variable", fontSize: "22px" }}
                >
                  PHONE
                </h6>
                <p className="fz-18  underline fw-500 black">+91 44 4207 2248</p>
              </div>
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
            <h3 style={{ color: "#000", marginBottom: "10px", fontSize: "20px" , fontFamily: "Satoshi-Variable"}}>
            Thank you for reaching out to us.
            </h3>
            <p style={{ color: "#000", fontSize: "16px", fontFamily: "Satoshi-Variable"}}>
             We will respond to your request within 24 hours.
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

export default Contact;
