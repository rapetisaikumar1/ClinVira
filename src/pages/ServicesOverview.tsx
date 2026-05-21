import { Link } from "react-router-dom";
import servicesImage from "../assets/services.png";
import styles from "./ServicesOverview.module.css";

const services = [
  {
    num: "01",
    label: "Pharma Manufacturing",
    to: "/services/pharma-manufacturing",
    detail: "GMP-compliant MES, EBR, SCADA, and production intelligence for pharmaceutical manufacturing sites.",
    primary: true,
  },
  {
    num: "02",
    label: "Clinical Trials",
    to: "/services/clinical-trials",
    detail: "Trial management from protocol design through eCTD regulatory submission.",
    primary: false,
  },
  {
    num: "03",
    label: "Pharma Validation",
    to: "/services/pharma-validation",
    detail: "CSV, IQ/OQ/PQ, and 21 CFR Part 11 validation across GxP-regulated computer systems.",
    primary: false,
  },
  {
    num: "04",
    label: "Health Data Analysis",
    to: "/services/health-data-analysis",
    detail: "Clinical analytics, real-world evidence, and pharmacovigilance intelligence at scale.",
    primary: false,
  },
];

function ServicesOverview() {
  return (
    <div className={styles.page}>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Pharmaceutical Domains</p>
              <h1 className={styles.heroTitle}>Our Services</h1>
              <p className={styles.heroIntro}>
                ClinVira specializes in four core pharmaceutical domains. Each service combines
                regulatory expertise, engineering execution, and validated delivery for
                GMP-regulated environments.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <span>4</span>
                  <p>Pharma domains</p>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span>200+</span>
                  <p>GMP implementations</p>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span>Global</span>
                  <p>Delivery network</p>
                </div>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <img
                className={styles.heroImage}
                src={servicesImage}
                alt="ClinVira services overview"
              />
              <div className={styles.heroImageBadge}>
                <div className={styles.heroBadgeIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionKicker}>Our Expertise</p>
            <h2 className={styles.sectionTitle}>Four domains. One pharmaceutical vision.</h2>
          </div>

          <div className={styles.grid}>
            {services.map((s) => (
              <Link key={s.to} to={s.to} className={`${styles.card}${s.primary ? ` ${styles.primaryCard}` : ""}`}>
                <div className={styles.cardIcon}>
                  <span className={styles.cardNum}>{s.num}</span>
                </div>
                <h3 className={styles.cardTitle}>{s.label}</h3>
                <p className={styles.cardDesc}>{s.detail}</p>
                <span className={styles.cardArrow}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesOverview;
