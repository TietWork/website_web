'use client'
import React from 'react';

function FAQS() {
  const faqs = [
    {
      question: "What industries does your company specialize in?",
      answer:
        "We specialize in industries such as Healthcare, Finance, Insurance, Oil & Gas, Entertainment, Manufacturing, Government, Transportation, Education, Hospitality, and Real Estate. Each industry is addressed with tailored solutions.",
    },
    {
      question: "How do you ensure your solutions are industry-specific?",
      answer:
        "We collaborate closely with our clients to understand their unique challenges and goals, combining in-depth research with industry best practices and advanced technology.",
    },
    {
      question: "What services do you offer to these industries?",
      answer:
        "Our services include digital transformation, custom software development, system integration, data analytics, process automation, and cloud solutions tailored to industry-specific needs.",
    },
    {
      question: "Do you provide scalable solutions?",
      answer:
        "Yes, scalability is a key focus. Our solutions are designed to grow with your business, supporting expanding operations, additional integrations, and increased infrastructure demands.",
    },
    {
      question: "How long does it take to implement a solution?",
      answer:
        "Implementation timelines vary based on project complexity, but we ensure efficient delivery within agreed timelines without compromising quality.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Absolutely. We specialize in seamless integration with your existing software, hardware, and workflows, ensuring a smooth transition.",
    },
    {
      question: "Do you offer support and maintenance after implementation?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure that your solutions remain up-to-date, secure, and fully functional.",
    },
    {
      question: "What technologies do you use for software development?",
      answer:
        "We use the latest technologies, including AI, machine learning, blockchain, IoT, cloud computing, and advanced programming frameworks like React, Node.js, and Python.",
    },
    {
      question: "Can your solutions help improve operational efficiency?",
      answer:
        "Yes, our solutions are designed to automate processes, reduce manual efforts, and improve overall operational efficiency across departments.",
    },
    {
      question: "Do you offer consulting services?",
      answer:
        "Yes, we offer consulting services to help businesses identify their pain points, optimize processes, and develop a strategic technology roadmap.",
    },
  ];

  return (
    <section className="faqs section-padding position-re">
      <div className="container">
        <div className="row ">
          {/* Heading Section */}
          <div className="col-lg-12 mb-50">
            <p className="fz-18 mt-10" style={{ color: '#000', textAlign: 'left' }}>
              Learn more about our solutions and how we serve diverse industries with tailored approaches.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row ">
          <div className="col-lg-12">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item mb-30">
                  <h6
                    style={{
                      color: '#007BFF',
                      fontSize: '22px',
                      fontWeight: '600',
                    }}
                  >
                    {index + 1}. {faq.question}
                  </h6>
                  <p
                    style={{
                      fontSize: '18px',
                      color: '#000',
                      marginTop: '10px',
                      lineHeight: '1.8',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQS;
