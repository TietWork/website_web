import React from 'react';

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Subheading */}
              <div className="col-lg-5">
                <h4 className="mb-50">01 . The CaseStudy</h4>
                <h6 style={{ color: '#007bff' }} className="mb-30">
                  Case Study: Transforming Hollywood Casting with AI-Powered Solutions
                </h6>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                    The Hollywood casting process was plagued by outdated manual processes and paper-based record-keeping, which created inefficiencies and hindered talent submissions for casting roles.
                  </h5>
                  <p className="fz-18" style={{ color: '#555' }}>
                    To address this, Thirdeye partnered with ZyberTech, a pioneering tech company, to revolutionize the casting submission process and make it accessible to actors worldwide. Our primary objective was to develop a seamless online platform that would:
                  </p>
                  <ul className="fz-18" style={{ color: '#555', paddingLeft: '20px' }}>
                    <li>Enable actors globally to apply for Hollywood roles effortlessly.</li>
                    <li>Manage talent portfolios and multimedia submissions.</li>
                    <li>Facilitate smooth communication between talents and agents.</li>
                  </ul>

                  <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                    Solution
                  </h6>
                  <p className="fz-18" style={{ color: '#555' }}>
                    Thirdeye and ZyberTech collaborated to design and develop an AI-powered Face Detection Application for a leading Hollywood casting company. This innovative solution cross-referenced actors resumes with an extensive movie database using facial recognition technology, ensuring authenticity and streamlining the submission process. Key features of the solution included:
                  </p>
                  <ul className="fz-18" style={{ color: '#555', paddingLeft: '20px' }}>
                    <li>Casting Management System – Automated end-to-end workflows for efficient talent management.</li>
                    <li>Face Detection API – Instantly verifies actors authenticity by matching faces with a vast movie database.</li>
                    <li>Automated Candidate Shortlisting – Reducing time spent on shortlisting by 80%.</li>
                    <li>Custom Software Enhancements – Tailored to meet the unique needs of our client.</li>
                  </ul>

                  <h6 style={{ color: '#007bff' }} className="mt-40 mb-20">
                    Key Outcomes & Impact
                  </h6>
                  <ul className="fz-18" style={{ color: '#555', paddingLeft: '20px' }}>
                    <li>80% Reduction in Time for Candidate Shortlisting – Streamlined processes allowed casting agents to focus on selecting the best talent rather than administrative tasks.</li>
                    <li>Increased Casting Turnaround – Faster verification and submission processes significantly improved overall casting timelines.</li>
                    <li>Global Talent Access – The platform enabled actors from around the world to access Hollywood casting opportunities, democratizing the process.</li>
                    <li>Growth and Acquisition – Over a decade, the platform grew to over 100,000 active subscribers, drawing investor interest and resulting in acquisition.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
