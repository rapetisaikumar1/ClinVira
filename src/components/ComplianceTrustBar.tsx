import styles from "./ComplianceTrustBar.module.css";

const frameworks = ["FDA", "GxP", "HIPAA", "GDPR", "21 CFR Part 11"];

function ComplianceTrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Compliance & Trust</p>
        <h2 className={styles.heading}>Built for regulated environments</h2>
        <p className={styles.subtext}>
          Enterprise delivery aligned to the frameworks that govern healthcare and life sciences.
        </p>
        <div className={styles.badges}>
          {frameworks.map((item) => (
            <span key={item} className={styles.badge}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComplianceTrustBar;
