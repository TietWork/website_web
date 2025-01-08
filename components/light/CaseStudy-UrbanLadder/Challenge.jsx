import React from "react";

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              {/* Left Section - Subheadings */}
              <div className="col-lg-5">
                <h4 className="mb-50">
                  01 . <span style={{ color: "#007bff" }}>The Casestudy</span>
                </h4>{" "}
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Casestudy Overview
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Our Solution
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Components
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Technology Stack
                </h3>
                <h3 className="mb-20" style={{ color: "#333" }}>
                  Key Outcomes and Impact
                </h3>
              </div>

              {/* Right Section - Content */}
              <div className="col-lg-7">
                <div className="text">
                  {/* Challenge Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Overview
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Thirdeye empowered UrbanLadder with a digital transformation
                    solution, integrating a track-and-trace application and ERP
                    system. This streamlined production workflows, reduced
                    delays, optimized material usage by 30%, and improved
                    inventory accuracy by 45%, enabling faster order fulfillment
                    and scalable operations.
                  </p>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Limited Visibility:</strong> No centralized
                      platform to monitor production stages, leading to
                      bottlenecks.
                    </li>
                    <li>
                      <strong>Manual Tracking:</strong> Processes were manually
                      recorded, increasing the chances of errors.
                    </li>
                    <li>
                      <strong>Inventory Mismanagement:</strong> Inaccurate
                      tracking of inventory resulted in wastage or stockouts.
                    </li>
                    <li>
                      <strong>Inefficient Material Usage:</strong> Suboptimal
                      ply cutting led to material wastage and higher costs.
                    </li>
                    <li>
                      <strong>Order Processing Delays:</strong> Lack of
                      synchronization between departments caused slow order
                      fulfillment.
                    </li>
                  </ul>

                  {/* Solution Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Our Solution
                  </h6>
                  <p className="fz-18 mb-40" style={{ color: "#555" }}>
                    Thirdeye collaborated with UrbanLadder to develop a robust
                    Track and Trace Application along with a customized
                    ERP-Inventory Management System, streamlining their
                    operations and optimizing material usage.
                  </p>
                  <h6 className="fz-20 mb-20" style={{ color: "#007bff" }}>
                    Key Components:
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Track and Trace Application:</strong>
                      <ul>
                        <li>
                          Order lifecycle management with real-time tracking.
                        </li>
                        <li>
                          Stage-wise production tracking (Cutting, CNC
                          Processing, QA, Packing).
                        </li>
                        <li>
                          Mobile application for factory floor staff to scan QR
                          codes and update progress.
                        </li>
                        <li>
                          Admin dashboard providing comprehensive production
                          oversight.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>ERP-Inventory Management System:</strong>
                      <ul>
                        <li>
                          Material tracking for raw materials, in-process items,
                          and finished goods.
                        </li>
                        <li>
                          Automated reordering to avoid material shortages.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Cutting Optimization Module:</strong>
                      <ul>
                        <li>
                          Algorithms to minimize material waste by up to 30%.
                        </li>
                        <li>
                          Real-time dynamic cutting patterns for efficient ply
                          layouts.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Order Management and Logistics:</strong>
                      <ul>
                        <li>
                          Seamless integration for tracking loading, unloading,
                          and delivery activities.
                        </li>
                        <li>
                          Real-time notifications for logistics teams and
                          clients.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  {/* Technology Stack */}
                  <h6 style={{ color: "#007bff" }} className="mt-40 mb-20">
                    Technology Stack
                  </h6>
                  <ul
                    className="fz-18"
                    style={{ color: "#555", paddingLeft: "20px" }}
                  >
                    <li>
                      <strong>Track and Trace:</strong> Real-time production
                      stage tracking and automation.
                    </li>
                    <li>
                      <strong>ERP System:</strong> Integrated inventory and
                      resource management.
                    </li>
                    <li>
                      <strong>Cutting Optimization:</strong> Algorithms to
                      minimize material waste by up to 30%.
                    </li>
                    <li>
                      <strong>Data Analytics:</strong> Dashboards for real-time
                      insights and decision-making.
                    </li>
                    <li>
                      <strong>Integration:</strong> Seamless collaboration with
                      logistics and production teams.
                    </li>
                  </ul>

                  {/* Key Outcomes and Impact Section */}
                  <h6 style={{ color: "#007bff" }} className="mb-20">
                    Key Outcomes and Impact
                  </h6>
                  <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                    <li>
                      <strong>Operational Efficiency:</strong> Reduced
                      production time by 40% and manual errors by 50%.
                    </li>
                    <li>
                      <strong>Optimized Material Usage:</strong> Cutting
                      optimization reduced material wastage by 30%.
                    </li>
                    <li>
                      <strong>Enhanced Visibility:</strong> Real-time monitoring
                      improved transparency and foresight.
                    </li>
                    <li>
                      <strong>Accurate Inventory Management:</strong> Reduced
                      discrepancies by 45%, ensuring timely material
                      procurement.
                    </li>
                    <li>
                      <strong>Increased Order Fulfillment:</strong> Faster
                      cycles enabled handling of 20% more orders without
                      additional resources.
                    </li>
                    <li>
                      <strong>Scalable System:</strong> Designed to accommodate
                      larger production capacities as operations expand.
                    </li>
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
