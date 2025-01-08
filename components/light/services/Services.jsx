import React from 'react';
import data from '@/l-data/services.json';

function Services() {
  return (
    <section className="services-boxs section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialties</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              What We <span className="fw-200">Offer</span>
            </h2>
          </div>
        </div>

        {/* New Paragraph About Services */}
        <div className="row">
          <div className="col-12 text-center mb-50">
            <p style={{ fontSize: '18px', color: '#555' }}>
              At Third Eye Info Technology Pvt.Ltd, we are committed to providing high-quality, innovative services that are tailored to meet your unique business needs. Our offerings range from IT services to web solutions, all designed to help you achieve long-term success.
            </p>
          </div>
        </div>

        {/* Add blue accent line */}
        <div className="row">
          <div className="col-12 text-center">
            <hr style={{ width: '100px', borderTop: '3px solid #007bff', margin: '20px auto' }} />
          </div>
        </div>

        <div className="row pt-30">
          {data.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6 items">
              <div className="item-box bg md-mb50" style={{ borderRadius: '10px', border: '1px solid #f0f0f0', padding: '20px' }}>
                <div className="icon mb-40 opacity-5">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15 text-u" style={{ color: '#007bff' }}>
                  {item.title} <br /> 
                </h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
