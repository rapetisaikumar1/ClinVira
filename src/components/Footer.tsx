import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>ClinVira</h3>
          <p>
            Specialized expertise in pharmaceutical manufacturing, clinical trials,
            pharma validation, and health data analysis — for regulated environments worldwide.
          </p>
        </div>

        <div className={styles.column}>
          <h4>SERVICES</h4>
          <ul>
            <li><Link to="/services/pharma-manufacturing">Pharma Manufacturing</Link></li>
            <li><Link to="/services/clinical-trials">Clinical Trials</Link></li>
            <li><Link to="/services/pharma-validation">Pharma Validation</Link></li>
            <li><Link to="/services/health-data-analysis">Health Data Analysis</Link></li>
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
