import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certified Agentforce Specialist</h4>
                <h5>Salesforce</h5>
              </div>
              <h3>DEC 2025</h3>
            </div>
            <p>
              Successfully completed professional certification requirements (Credential ID: 7294837). Developed capabilities in designing autonomous agents, configuring AI-driven business workflows, and customizing CRM setups using the Salesforce Trailhead platform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Web Developer Intern</h4>
                <h5>Codtech IT Solutions</h5>
              </div>
              <h3>FEB 2026</h3>
            </div>
            <p>
              Completed a 4-week internship focusing on building modern frontend pages. Developed clean interfaces using HTML, CSS, and JavaScript, integrated interactive user layouts, and collaborated on responsive web project implementations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Codec Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently executing tasks as a Web Developer Intern. Focus areas include full-stack integrations, optimizing layout performance, and designing interactive site modules. Offer letter secured, official certificate upcoming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
