import React from "react";

function Challenge() {
  return (
    <section className="section-padding bord-thin-bottom">
      <div className="container">
        <div className="row">
          {/* Left Section - Subheadings */}
          <div className="col-lg-5">
            <h4 className="mb-50">
              01 . <span style={{ color: "#007bff" }}>The Project</span>
            </h4>{" "}
            <h3 className="mb-20" style={{ color: "#333" }}>
              Project Overview
            </h3>
            <h3 className="mb-20" style={{ color: "#333" }}>
              Key Features
            </h3>
            <h3 className="mb-20" style={{ color: "#333" }}>
              How it Works
            </h3>
            <h3 className="mb-20" style={{ color: "#333" }}>
              Technology Stack
            </h3>
          </div>

          {/* Right Section - Project Content */}
          <div className="col-lg-7">
            <div className="text">
              {/* Project Overview */}
              <h3
                className="mb-30 fw-400 line-height-40"
                style={{ color: "#000" }}
              >
                Overview
              </h3>
              <p className="fz-18 mb-40" style={{ color: "#555" }}>
                We developed a medium-scale ERP solution tailored to the
                operational needs of two clients: a UAE-based manufacturing
                company and a Bangalore-based firm. The system was designed to
                optimize planning, inventory management, employee tracking, and
                production processes, thereby enhancing productivity and
                streamlining operations.
              </p>

              {/* Key Features */}
              <h6 style={{ color: "#007bff" }} className="mb-20">
                Key Features
              </h6>
              <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                <li>
                  <strong>Operational Efficiency:</strong> By defining standard
                  items, workflows, and production processes, we reduced
                  operational complexities for both clients.
                </li>
                <li>
                  <strong>Inventory Control:</strong> The system maintained
                  optimal stock levels based on production requirements,
                  reducing overstocking and minimizing shortages.
                </li>
                <li>
                  <strong>Vendor Management:</strong> The ERP system efficiently
                  tracked and managed vendor interactions, ensuring smooth supply
                  chain operations.
                </li>
                <li>
                  <strong>Workforce Management:</strong> Employees were
                  registered with biometric data for accurate tracking of
                  check-in/check-out times in line with shift schedules.
                </li>
                <li>
                  <strong>Payroll Integration:</strong> The ERP solution
                  automated payroll generation based on attendance records,
                  reducing administrative overhead.
                </li>
                <li>
                  <strong>Production Optimization:</strong> Automated production
                  scheduling allowed for order-based production planning, leading
                  to better resource utilization.
                </li>
                <li>
                  <strong>Quality Control:</strong> Integrated checklists at key
                  production stages ensured compliance with quality standards
                  throughout the manufacturing process.
                </li>
                <li>
                  <strong>Finance and Invoicing:</strong> The system monitored
                  orders across various stages, enabling timely invoicing and
                  order tracking.
                </li>
                <li>
                  <strong>Real-Time Reporting:</strong> Detailed real-time
                  reports provided top management with actionable insights for
                  strategic decision-making and oversight.
                </li>
                <li>
                  <strong>Automation and Alerts:</strong> Automated alerts and
                  reminders were implemented to prompt timely actions, reducing
                  delays and enhancing productivity.
                </li>
              </ul>

              {/* How it Works */}
              <h6 style={{ color: "#007bff" }} className="mb-20">
                How it Works
              </h6>
              <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                <li>
                  <strong>Employee Onboarding:</strong> Employees are registered
                  with biometric information for automated time tracking and
                  payroll integration.
                </li>
                <li>
                  <strong>Inventory Management:</strong> Stock levels are
                  monitored and adjusted based on real-time data from production
                  planning.
                </li>
                <li>
                  <strong>Production Workflow:</strong> Orders are scheduled
                  through the ERP system, with checklists guiding quality checks
                  at each stage.
                </li>
                <li>
                  <strong>Vendor Coordination:</strong> Vendors are tracked within
                  the ERP system, ensuring supply chain efficiency and on-time
                  deliveries.
                </li>
                <li>
                  <strong>Finance and Reporting:</strong> Automated invoicing and
                  report generation provide leadership with valuable insights
                  and oversight.
                </li>
              </ul>

              {/* Technology Stack */}
              <h6 style={{ color: "#007bff" }} className="mb-20">
                Technology Stack
              </h6>
              <ul className="fz-18 mb-40" style={{ color: "#000" }}>
                <li>
                  <strong>Frontend:</strong> React for user interface and
                  dashboard management.
                </li>
                <li>
                  <strong>Backend:</strong> Node.js and .NET Core for ERP logic
                  and business processes.
                </li>
                <li>
                  <strong>Database:</strong> SQL Server for robust data
                  management and reporting.
                </li>
                <li>
                  <strong>Cloud/Hosting:</strong> Azure for secure, scalable
                  deployment.
                </li>
              </ul>

              <p className="fz-18" style={{ color: "#555" }}>
                Our ERP solution is the ideal choice for businesses looking to
                streamline operations, reduce inefficiencies, and improve overall
                productivity. With its custom features and robust reporting, it
                empowers organizations to manage resources effectively and ensure
                smooth day-to-day operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
