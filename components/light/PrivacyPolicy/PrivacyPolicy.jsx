'use client'
import React from 'react';

function PrivacyPolicy() {
  return (
    <section className="terms section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="terms-content">
              <h2 className="mb-40 text-center main-color">
                Privacy Policy
              </h2>

              <p className="text-center">Last Updated: 14th April, 2021</p>
              
              {/* Section 1 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Introduction</h4>
                <p>
                  Third Eye Info Technology (hereinafter referred to as "ThirdEye", "we", "us" or "our") provides these privacy policies to inform website visitors and users of our product and services with its policies and procedures regarding the collection, use and disclosure of the personal data and other information that we receive when they visit our websites or use any of our products, services or applications (“Platform”).
                </p>
                <p>
                  By using the Platform or Services, you consent to the collection, use and disclosure of your personal data as set out in this Privacy Policy.
                </p>
                <p>
                  If you do not agree with this Privacy Policy, then we cannot provide the Platform or Services to you, and you should stop accessing the Platform. This Privacy Policy does not apply to other websites to which we link ("Third Party Website" or "Third Party Websites").
                </p>
              </div>

              {/* Section 2 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Definitions</h4>
                <ul>
                  <li><strong>Aggregated Information:</strong> Information about all of our users or specific groups or categories of users that we combine together so that it can no longer identify or reference an individual user.</li>
                  <li><strong>Data Controller:</strong> Third Eye Info Technology, the company responsible for the use and processing of Personal Information.</li>
                  <li><strong>Personal Data:</strong> Information relating to a living individual who is or can be identified either from that information or from that information in conjunction with other information.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">What Types of Information Does ThirdEye Gather About Its Users?</h4>
                <p>We collect and use the following personal data:</p>
                <ul>
                  <li>Information you provide when purchasing products or contacting customer support, such as name, phone number, email, postal address, and payment information.</li>
                  <li>Information associated with your website visit, such as IP address, mobile device identifier, and browsing data.</li>
                  <li>Information you provide when engaging with forms or social media sharing, such as email addresses and product feedback.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Mobile Data</h4>
                <p>
                  When you use certain features of the Platform, especially mobile applications, we may collect location data. If you do not want your device to share location information, you can disable GPS or location-tracking functions in your device settings.
                </p>
              </div>

              {/* Section 5 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Log Data</h4>
                <p>
                  We collect Log Data automatically when you access or use the Platform. This includes IP address, access times, and pages visited.
                </p>
              </div>

              {/* Section 6 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Cookies and Tracking Technologies</h4>
                <p>
                  ThirdEye uses cookies to track your activities on the Platform. You may disable cookies via your browser settings, but some features may not work without them.
                </p>
              </div>

              {/* Section 7 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">How ThirdEye Uses and Processes the Information</h4>
                <p>
                  We use personal data for the following purposes:
                </p>
                <ul>
                  <li>To operate, protect, improve, and optimize the Platform and services.</li>
                  <li>To send you support, service, and promotional messages.</li>
                  <li>To help create a trusted and safer environment for users.</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">When ThirdEye Discloses or Shares Personal Information</h4>
                <p>
                  We may transfer, store, use, and process your information overseas. We also share your information with business partners, affiliates, and third parties who assist in our services.
                </p>
              </div>

              {/* Section 9 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">How to Change or Delete Your Information</h4>
                <p>
                  You can review, update, correct, or delete your personal information by logging into your account. You can also deactivate your account by contacting us at contact@thirdeyeinfotech.com.
                </p>
              </div>

              {/* Section 10 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Securing Your Personal Information</h4>
                <p>
                  We implement security measures to protect your personal information, but we cannot guarantee 100% security over the Internet.
                </p>
              </div>

              {/* Section 11 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Your Privacy When You Access Third-Party Websites and Resources</h4>
                <p>
                  The Platform may contain links to third-party websites. ThirdEye is not responsible for their privacy practices. We recommend you review their privacy policies.
                </p>
              </div>

              {/* Section 12 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Changes to This Privacy Policy</h4>
                <p>
                  We may update this Privacy Policy at any time. We will notify you of material changes by posting on the Platform or via email.
                </p>
              </div>

              {/* Section 13 */}
              <div className="term-section">
                <h4 className="sub-title mb-20">Got Feedback?</h4>
                <p>
                  If you have feedback about this Privacy Policy, please contact our Data Protection Compliance Officer at: contact@thirdeyeinfotech.com
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .terms-content {
          background-color: #f9f9f9;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .sub-title {
          color: #333;
          border-bottom: 2px solid #ff7f50;
          padding-bottom: 10px;
        }
        ul {
          padding-left: 20px;
          margin-top: 10px;
        }
        ul li {
          list-style-type: disc;
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
}

export default PrivacyPolicy;
