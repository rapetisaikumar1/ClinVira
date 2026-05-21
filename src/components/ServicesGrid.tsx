import { Link } from "react-router-dom";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    title: "Pharma Manufacturing",
    description:
      "End-to-end digital transformation for GMP-compliant pharma manufacturing — MES, electronic batch records, SCADA integration, and production intelligence.",
    to: "/services/pharma-manufacturing",
    primary: true,
  },
  {
    title: "Clinical Trials",
    description:
      "Technology-driven trial management from protocol design through regulatory submission, built for speed, data integrity, and ICH E6 R2 compliance.",
    to: "/services/clinical-trials",
    primary: false,
  },
  {
    title: "Pharma Validation",
    description:
      "Rigorous CSV and system validation aligned to FDA 21 CFR Part 11, EU GMP Annex 11, and GAMP 5 — IQ/OQ/PQ lifecycle execution.",
    to: "/services/pharma-validation",
    primary: false,
  },
  {
    title: "Health Data Analysis",
    description:
      "Advanced analytics and real-world evidence platforms turning clinical, manufacturing, and pharmacovigilance data into actionable decisions.",
    to: "/services/health-data-analysis",
    primary: false,
  },
];

function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2>Our 4 Core Pharma Domains</h2>
          <p>Specialized services built around the full pharmaceutical value chain — from manufacturing floor to clinical evidence.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article
              key={service.title}
              className={`${styles.card}${service.primary ? ` ${styles.primaryCard}` : ""}`}
            >
              {service.primary && (
                <span className={styles.primaryBadge}>Core Service</span>
              )}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.to}>Learn more</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
