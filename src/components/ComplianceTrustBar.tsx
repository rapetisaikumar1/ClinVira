import styles from "./ComplianceTrustBar.module.css";

const frameworks = ["FDA 21 CFR", "EU GMP", "ICH Q10", "GAMP 5", "ISO 9001"];

function ComplianceTrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Compliance & Regulatory Standards</h2>
        <p className={styles.subtext}>
          Every ClinVira solution is designed and validated to meet the strictest pharmaceutical<br />
          regulatory requirements across FDA, EMA, and global markets.
        </p>
        <div className={styles.badges}>
          {frameworks.map((item) => (
            <span key={item} className={styles.badge}>
              <span className={styles.dot} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComplianceTrustBar;
