import { Link } from "react-router-dom";
import styles from "./Page.module.css";
import heroImage from "../assets/our-solution.png";
import benefitsImage from "../assets/key-benefits.png";
import whoImage from "../assets/who-we-serve.png";
import whyImage from "../assets/why-clinvira.png";

function Solutions() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Connected Healthcare Monitoring</p>
        <h1>Connected Healthcare Monitoring Solutions for Smarter Patient Care</h1>
        <p>
          Clinvira helps healthcare organizations monitor patient and device data in real time through connected
          solutions that improve visibility, support faster response, and strengthen operational confidence.
        </p>

        <img className={styles.heroImage} src={heroImage} alt="Connected healthcare monitoring dashboard" />

        <h2>What We Do</h2>
        <p>
          We provide healthcare monitoring solutions that help care teams track important information, view trends,
          receive alerts, and support better day-to-day decision-making.
        </p>

        <h2>Our Solution</h2>
        <p>
          ClinVira Inc is a healthcare and life sciences technology company specializing in AI-driven digital
          transformation for pharmaceutical, biotechnology, clinical research, and regulated manufacturing
          organizations.
        </p>
        <p>
          We help organizations modernize their clinical, quality, manufacturing, and commercial operations through
          secure, compliant, and scalable digital solutions built specifically for highly regulated environments.
        </p>
        <p>
          Our expertise spans clinical research, regulatory compliance, manufacturing operations, analytics, and
          enterprise platforms—enabling clients to accelerate innovation while maintaining the highest standards of
          data integrity, security, and regulatory compliance.
        </p>
        <p>
          With deep domain expertise and a global delivery model, ClinVira bridges the gap between advanced technology
          and real-world healthcare outcomes, helping organizations improve operational efficiency, compliance
          readiness, and patient impact.
        </p>

        <h2>Key Benefits</h2>
        <img className={styles.heroImage} src={benefitsImage} alt="Key benefits of ClinVira monitoring" />
        <ul className={styles.bulletList}>
          <li>Real-time visibility into patient and device data</li>
          <li>Faster response through intelligent alerts and trends</li>
          <li>Operational confidence with reliable, compliant infrastructure</li>
          <li>Clear decision support for care teams and operations</li>
        </ul>

        <h2>Services</h2>
        <div className={styles.linkGrid}>
          <div className={styles.linkCard}>
            <strong>Solution Evaluation</strong>
            <span>Product demonstrations and discovery to match your monitoring priorities.</span>
          </div>
          <div className={styles.linkCard}>
            <strong>Deployment &amp; Setup</strong>
            <span>Hands-on support to launch connected monitoring across your environment.</span>
          </div>
          <div className={styles.linkCard}>
            <strong>Integration Assistance</strong>
            <span>Connect devices, data sources, and existing clinical and enterprise systems.</span>
          </div>
          <div className={styles.linkCard}>
            <strong>Technical Support</strong>
            <span>Troubleshooting and reliable engineering support when you need it most.</span>
          </div>
          <div className={styles.linkCard}>
            <strong>Implementation Guidance</strong>
            <span>Ongoing expertise to evolve monitoring programs as your needs grow.</span>
          </div>
        </div>

        <h2>Core Focus Areas</h2>
        <ul className={styles.bulletList}>
          <li>Clinical Research &amp; Real-World Evidence Platforms</li>
          <li>Quality &amp; Compliance Digitalization (CSV, eQMS, FDA 21 CFR Part 11)</li>
          <li>Pharma &amp; Manufacturing Operations Automation</li>
          <li>AI, Analytics &amp; Power BI Dashboards</li>
          <li>CRM &amp; Commercial Enablement for Life Sciences</li>
        </ul>

        <h2>Technology Capabilities</h2>
        <ul className={styles.bulletList}>
          <li>Computer System Validation (CSV)</li>
          <li>Automated Workflows (CAPA, SOPs, Change Control)</li>
          <li>CRM for Pharma &amp; Manufacturing</li>
          <li>Power BI &amp; Advanced Analytics</li>
          <li>AI &amp; Predictive Intelligence</li>
          <li>Embedded Systems &amp; Industrial IoT</li>
          <li>Salesforce Marketing Cloud (SFMC)</li>
        </ul>

        <h2>Who We Serve</h2>
        <img className={styles.heroImage} src={whoImage} alt="Healthcare and life sciences organizations served by ClinVira" />
        <p>
          Pharmaceutical, biotechnology, clinical research, and regulated manufacturing organizations seeking connected,
          compliant, and intelligent monitoring across clinical, quality, and commercial operations.
        </p>

        <h2>Why Clinvira</h2>
        <img className={styles.heroImage} src={whyImage} alt="Why choose ClinVira" />
        <ul className={styles.bulletList}>
          <li>Healthcare-focused approach</li>
          <li>Real-world deployment support</li>
          <li>Reliable service and guidance</li>
          <li>Clear visibility into important monitoring data</li>
        </ul>

        <div className={styles.footNote}>
          <p>📍 Headquartered in Cambridge, MA</p>
          <p>🤝 Powered by First Line Software</p>
          <p>🌍 Trusted by leading healthcare &amp; life sciences innovators worldwide</p>
        </div>

        <div className={styles.ctaBlock}>
          <h2>Let’s transform healthcare—intelligently and ethically.</h2>
          <p>
            Talk to our team about connected monitoring, compliant digital transformation, and measurable patient
            impact.
          </p>
          <Link to="/contact" className={styles.ctaButton}>Contact ClinVira</Link>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
