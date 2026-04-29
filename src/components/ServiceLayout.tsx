import CTASection from "./CTASection";
import styles from "./ServiceLayout.module.css";

type Pillar = {
  title: string;
  description: string;
};

type KPI = {
  label: string;
  value: string;
};

export type ServiceLayoutProps = {
  title: string;
  subtitle: string;
  intro: string;
  whatWeDo: string;
  capabilities: string[];
  businessImpact: string;
  heroImage: string;
  heroImageAlt: string;
  pillars: Pillar[];
  kpis: KPI[];
};

function ServiceLayout({
  title,
  subtitle,
  intro,
  whatWeDo,
  capabilities,
  businessImpact,
  heroImage,
  heroImageAlt,
  pillars,
  kpis,
}: ServiceLayoutProps) {
  return (
    <>
      <section className={styles.hero}>
        <img className={styles.heroImage} src={heroImage} alt={heroImageAlt} />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>{subtitle}</p>
            <h1>{title}</h1>
            <p className={styles.intro}>{intro}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>What We Do</p>
            <h2>An enterprise approach built for regulated environments</h2>
            <p>{whatWeDo}</p>
          </div>
          <div className={styles.pillarGrid}>
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.pillarCard}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Key Capabilities</p>
            <h2>What we deliver</h2>
          </div>
          <ul className={styles.capabilityList}>
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Business Impact</p>
            <h2>Outcomes that matter to the business</h2>
            <p>{businessImpact}</p>
          </div>
          <div className={styles.kpiGrid}>
            {kpis.map((kpi) => (
              <article key={kpi.label} className={styles.kpiCard}>
                <h3>{kpi.value}</h3>
                <p>{kpi.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default ServiceLayout;
