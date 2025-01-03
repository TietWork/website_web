'use client'
import React from 'react';

function FAQS() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="faqs section-padding position-re">
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Section - Heading */}
          <div className="col-lg-4">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15">FAQS</h6>
              <h2>
                Frequently <br /> Asked Questions
              </h2>
              <p className="fz-18 mt-10" style={{ color: '#555' }}>
                Learn more about our solutions and how we serve diverse industries with tailored approaches.
              </p>
            </div>
          </div>

          {/* Right Section - Accordion */}
          <div className="col-lg-7">
            <div className="list-serv">
              <div className="accordion bord">
                {/* Question 1 */}
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>What industries does your company specialize in?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      We specialize in serving diverse industries, including Healthcare, Finance & Insurance, Oil & Gas, Entertainment, Manufacturing, Government, Transportation, Education, Hospitality, and Real Estate. Our tailored solutions ensure that each industry’s unique challenges are effectively addressed.
                    </p>
                  </div>
                </div>

                {/* Question 2 */}
                <div
                  className="item active mb-15 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div onClick={openAccordion} className="title">
                    <h6>How do you ensure your solutions are industry-specific?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      We conduct in-depth research and collaborate closely with our clients to understand their unique challenges and goals. This allows us to craft tailored solutions that leverage industry best practices and cutting-edge technology.
                    </p>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>What services do you offer to these industries?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      We offer a range of services, including digital transformation, custom software development, system integration, data analytics, and process automation. Each service is tailored to the specific needs of the industry and client.
                    </p>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Do you provide scalable solutions?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Yes, scalability is a core aspect of our solutions. Whether you need to expand your operations, integrate additional systems, or scale infrastructure, our solutions are designed to grow with your business.
                    </p>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="item wow fadeInUp" data-wow-delay=".7s">
                  <div onClick={openAccordion} className="title">
                    <h6>How long does it take to implement a solution?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Implementation timelines vary based on the complexity of the project and specific requirements. However, we strive to deliver efficient solutions within agreed timelines while maintaining high quality.
                    </p>
                  </div>
                </div>

                {/* Question 6 */}
                <div className="item wow fadeInUp" data-wow-delay=".9s">
                  <div onClick={openAccordion} className="title">
                    <h6>Can you integrate with our existing systems?</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Absolutely. We specialize in seamless system integration, ensuring that our solutions work harmoniously with your existing software, hardware, and workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="line-overlay up opacity-7">
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

export default FAQS;
