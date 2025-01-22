import React from 'react';

function Solution() {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row">
          {/* Left Section - Visual or Icon */}
          <div className="col-lg-5">
            <div className="solution-visual">
              <img
                src="/light/assets/imgs/works/full/1.png"
                alt="LPG Solution Illustration"
                className="img-fluid"
                style={{
                  width:"650px",
                  borderRadius: '10px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
              <h6 className="mt-20" style={{ color: '#007bff',textTransform:"uppercase" }}>
                Empowering Communities with Technology
              </h6>
              <p className="fz-18" style={{ color: '#000' , fontFamily:"Satoshi-Variable"}}>
                Transforming public service delivery with innovative automation solutions.
              </p>
            </div>
          </div>

          {/* Right Section - Solution Details */}
          <div className="col-lg-7">
            <div className="text">
              <h2 className="mb-50" style={{fontFamily:"Satoshi-Variable" , textTransform:"uppercase"}}>
                The <span style={{ color: '#007bff' }}>Solution</span>
              </h2>
              <p className="fz-18 mb-40" style={{ color: '#000', fontFamily:"Satoshi-Variable", justifyContent:"left", textAlign:"left"}}>
                Our company has developed a cutting-edge automated vending machine system, 
                revolutionizing LPG distribution through seamless integration of technology, 
                safety, and accessibility. This solution represents a leap forward in 
                convenience and efficiency for millions across the nation.
              </p>

              {/* Impact and Reach Section */}
              <h6 style={{ color: '#007bff', textTransform:"uppercase" }} className="mb-20">
                Impact and Reach
              </h6>
              <ul className="fz-18 mb-40" style={{ color: '#000' , fontFamily:"Satoshi-Variable"}}>
                <li>
                  <strong>10+ Crore Citizens Benefited:</strong> Millions directly impacted, ensuring reliable and safe access to LPG.
                </li>
                <li>
                  <strong>Enhanced Accessibility:</strong> Deployment in underserved regions, reducing manual distribution and increasing consumer convenience.
                </li>
                <li>
                  <strong>National Economic Growth:</strong> Generating employment, supporting local manufacturing, and strengthening digital public service infrastructure.
                </li>
              </ul>

              <p className="fz-18" style={{ color: '#555', fontFamily:"Satoshi-Variable" }}>
                This project not only establishes us as pioneers in LPG automation but also reflects our unwavering commitment to innovation, sustainability, and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
