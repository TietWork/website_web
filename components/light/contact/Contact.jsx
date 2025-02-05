"use client";
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
                  {/* <div className="form-group mb-30">
                    <select
                      id="form_service_type"
                      name="service_type"
                      required
                      className="custom-dropdown full-width-input"
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
                  </div> */}

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
              {result && <p className="mt-20 text-center">{result}</p>}
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
                <p style={{ fontFamily: "Satoshi-Variable", fontSize: "18px" ,color:"#000", textTransform:"uppercase"}} className="fw-500">
                AE-176, Plot No. 2248, Ramkrubha, 11th Main Road, Annanagar, Chennai - 600040, India                  <br />
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
    </section>
  );
}

export default Contact;
