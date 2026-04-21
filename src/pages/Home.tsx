import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import ComplianceTrustBar from "../components/ComplianceTrustBar";
import CTASection from "../components/CTASection";
import operationsImage from "../assets/our-solution.png";
import stackImage from "../assets/technology-stack.png";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div>
            <h2>Enterprise Transformation Built for Regulated Industries</h2>
            <p>
              ClinVira combines deep healthcare domain knowledge with execution discipline across architecture, data, compliance, and operations. Every engagement is designed to reduce delivery risk while creating measurable business outcomes.
            </p>
            <div className={styles.metricRow}>
              <article className={styles.metricCard}>
                <h3>50+</h3>
                <p>Program accelerators and reusable frameworks</p>
              </article>
              <article className={styles.metricCard}>
                <h3>6</h3>
                <p>Integrated transformation service domains</p>
              </article>
              <article className={styles.metricCard}>
                <h3>Global</h3>
                <p>Delivery model for cross-regional organizations</p>
              </article>
            </div>
          </div>
          <img src={operationsImage} className={styles.visual} alt="Healthcare team operating through connected monitoring systems" />
        </div>
      </section>

      <ServicesGrid />

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.grid}`}>
          <img src={stackImage} className={styles.visual} alt="Enterprise healthcare technology stack" />
          <div>
            <h2>How We Deliver Enterprise Value</h2>
            <p>
              Our delivery approach aligns strategic roadmap, implementation governance, and platform engineering so transformation initiatives remain controlled from concept through adoption.
            </p>
            <ul className={styles.listGrid}>
              <li>Business-case aligned program planning</li>
              <li>Validated architecture and security controls</li>
              <li>Cross-functional steering and risk governance</li>
              <li>Outcome-based KPI tracking and reporting</li>
              <li>Change enablement for operations and users</li>
              <li>Post-go-live optimization and support</li>
            </ul>
          </div>
        </div>
      </section>

      <ComplianceTrustBar />
      <CTASection
        title="Transform outcomes across clinical, quality, and commercial operations"
        description="ClinVira combines strategy, implementation, and governance to deliver high-confidence transformation outcomes at enterprise scale."
      />
    </>
  );
}

export default Home;
