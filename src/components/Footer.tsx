import { Link } from "react-router-dom";
import logo from "../assets/logo-clinvira.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src={logo} alt="ClinVira" />
            <p>
              Enterprise healthcare modernization partner helping regulated organizations
              transform clinical, quality, manufacturing and commercial operations with confidence.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>Services</p>
            <div className={styles.linkList}>
              <Link to="/services/clinical-research">Clinical Research</Link>
              <Link to="/services/quality-compliance">Quality &amp; Compliance</Link>
              <Link to="/services/manufacturing">Manufacturing</Link>
              <Link to="/services/ai-analytics">AI &amp; Analytics</Link>
              <Link to="/services/crm">CRM Enablement</Link>
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>Solutions</p>
            <div className={styles.linkList}>
              <Link to="/solutions/regulatory-compliance">Regulatory Compliance</Link>
              <Link to="/solutions/data-governance">Data Governance</Link>
              <Link to="/solutions/pharma-supply-chain">Pharma Supply Chain</Link>
              <Link to="/solutions/clinical-data-management">Clinical Data Management</Link>
              <Link to="/solutions/validation-csv">Validation &amp; CSV</Link>
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>Company</p>
            <div className={styles.linkList}>
              <Link to="/about">About</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
              <a href="mailto:info@clinvira.com">info@clinvira.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} ClinVira Inc. All rights reserved.</p>
          <p>
            Boston, MA · United States
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
