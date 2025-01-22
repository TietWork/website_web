import React from "react";

function Intro() {
  return (
    <section className="page-intro position-re">
      <div className="container section-padding">
        <div className="row">
          <div className="text">
            <p
              style={{
                fontSize: "21px",
                color: "#000",
                textAlign: "left",
                fontFamily: "Satoshi-Variable",
              }}
            >
              At Third Eye, we combine cutting-edge technology with an
              unwavering commitment to innovation and quality. Our experienced,
              multi-skilled workforce delivers scalable, cost-effective
              solutions tailored to meet our clients&apos; unique needs.
              <br />
              <br />
              With deep expertise in IT and web services, proven project
              management, and flexible business models, we bridge big-picture
              goals with actionable results. Integrity, transparency, and a
              customer-centric approach define our relationships, enabling us to
              build enduring partnerships and empower businesses to thrive.
              <br />
              <br />
              We are driven by a vision to stay ahead of industry
              trends and continuously evolve with the changing technological
              landscape. Our commitment to fostering innovation ensures that we
              not only meet but exceed expectations, empowering our clients to
              unlock new opportunities and achieve sustainable growth in an
              increasingly competitive market.
            </p>
          </div>
        </div>
      </div>
      <div className="line-overlay">
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

export default Intro;
