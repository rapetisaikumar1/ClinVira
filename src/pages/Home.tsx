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
            <h2>Built for Pharmaceutical Manufacturing Precision</h2>
            <p>
              ClinVira combines deep pharmaceutical domain knowledge with engineering execution
              to modernize manufacturing operations. Every engagement is structured around GMP
              compliance, production reliability, and inspection readiness.
            </p>
            <div className={styles.metricRow}>
              <article className={styles.metricCard}>
                <h3>200+</h3>
                <p>GMP system implementations delivered</p>
              </article>
              <article className={styles.metricCard}>
                <h3>4</h3>
                <p>Specialized pharmaceutical service domains</p>
              </article>
              <article className={styles.metricCard}>
                <h3>Global</h3>
                <p>Delivery network across 15+ countries</p>
              </article>
            </div>
          </div>
          <img src={operationsImage} className={styles.visual} alt="Pharmaceutical manufacturing operations and GMP systems" />
        </div>
      </section>

      <ServicesGrid />

      <section className={styles.section}>
        <div className={`${styles.container} ${styles.grid}`}>
          <img src={stackImage} className={styles.visual} alt="Pharmaceutical technology and manufacturing intelligence stack" />
          <div>
            <h2>How We Deliver Manufacturing Excellence</h2>
            <p>
              Our delivery model aligns GMP-compliant system design, validated implementation,
              and production intelligence so pharmaceutical operations remain controlled from
              concept through inspection.
            </p>
            <ul className={styles.listGrid}>
              <li>GMP-compliant MES design and deployment</li>
              <li>Electronic Batch Record (EBR) implementation</li>
              <li>21 CFR Part 11 validation and CSV execution</li>
              <li>Production intelligence and real-time dashboards</li>
              <li>Deviation and CAPA workflow automation</li>
              <li>Inspection readiness and regulatory support</li>
            </ul>
          </div>
        </div>
      </section>

      <ComplianceTrustBar />
      <CTASection
        title={"Ready to Transform Your Pharma\nManufacturing Operations?"}
        description={"Partner with ClinVira to achieve GMP compliance, production efficiency,\nand inspection readiness across your pharmaceutical manufacturing sites."}
      />
    </>
  );
}

export default Home;
