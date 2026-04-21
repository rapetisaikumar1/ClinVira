import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>ClinVira</h3>
          <p>
            Enterprise healthcare modernization partner helping regulated organizations transform operations with confidence.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/clinical-research">Clinical Research Automation</Link></li>
            <li><Link to="/services/quality-compliance">Quality & Compliance</Link></li>
            <li><Link to="/services/manufacturing">Manufacturing Automation</Link></li>
            <li><Link to="/services/ai-analytics">AI & Data Intelligence</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact</h4>
          <p>info@clinvira.com</p>
          <p>+1 (800) 254-6847</p>
          <p>Boston, MA, United States</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} ClinVira. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
