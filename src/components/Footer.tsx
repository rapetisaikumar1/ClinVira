import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>ClinVira</h3>
          <p>
            Enterprise healthcare modernization partner helping regulated organizations
            transform operations with confidence.
          </p>
        </div>

        <div className={styles.column}>
          <h4>SERVICES</h4>
          <ul>
            <li><Link to="/services/clinical-research">Clinical Research Automation</Link></li>
            <li><Link to="/services/quality-compliance">Quality &amp; Compliance</Link></li>
            <li><Link to="/services/manufacturing">Manufacturing Automation</Link></li>
            <li><Link to="/services/ai-analytics">AI &amp; Data Intelligence</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>CONTACT</h4>
          <ul>
            <li><a href="mailto:info@clinvira.com">info@clinvira.com</a></li>

            <li><p>+1 (208) 418 1217</p></li>
            <li><p>580 Chelsea Street, East Boston, MA</p></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 ClinVira. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
