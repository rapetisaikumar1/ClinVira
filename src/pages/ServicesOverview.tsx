import { Link } from "react-router-dom";
import servicesImage from "../assets/services.png";
import styles from "./ServicesOverview.module.css";

const services = [
  {
    num: "01",
    label: "Clinical Research",
    to: "/services/clinical-research",
    detail: "Automate study operations, improve oversight, and reduce timeline risk.",
  },
  {
    num: "02",
    label: "Quality & Compliance",
    to: "/services/quality-compliance",
    detail: "Digitize quality workflows with inspection-ready traceability.",
  },
  {
    num: "03",
    label: "Manufacturing",
    to: "/services/manufacturing",
    detail: "Connect production and quality systems for stable operational control.",
  },
  {
    num: "04",
    label: "AI & Analytics",
    to: "/services/ai-analytics",
    detail: "Build governed data products and predictive intelligence at scale.",
  },
  {
    num: "05",
    label: "CRM",
    to: "/services/crm",
    detail: "Enable compliant, data-driven commercial execution across field teams.",
  },
  {
    num: "06",
    label: "Digital Innovation",
    to: "/services/digital-innovation",
    detail: "Modernize legacy platforms and accelerate enterprise product delivery.",
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
              <p className={styles.kicker}>Service Areas</p>
              <h1 className={styles.heroTitle}>Services</h1>
              <p className={styles.heroIntro}>
                Explore ClinVira capabilities built for enterprise healthcare and life sciences teams.
                Each service line combines domain expertise, engineering execution, and governance-led delivery.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <span>6</span>
                  <p>Service domains</p>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span>50+</span>
                  <p>Program accelerators</p>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <span>Global</span>
                  <p>Delivery model</p>
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
            <h2 className={styles.sectionTitle}>Built for regulated enterprise operations</h2>
          </div>

          <div className={styles.grid}>
            {services.map((s) => (
              <Link key={s.to} to={s.to} className={styles.card}>
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
