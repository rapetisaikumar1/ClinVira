import styles from "./ComplianceTrustBar.module.css";

const frameworks = ["FDA", "GxP", "HIPAA", "GDPR"];

function ComplianceTrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Compliance & Trust</h2>
        <p className={styles.subtext}>
          Enterprise delivery model designed for regulated healthcare and life sciences<br />
          environments.
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
