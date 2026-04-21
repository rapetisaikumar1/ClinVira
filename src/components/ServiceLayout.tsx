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

type ServiceLayoutProps = {
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
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <p>{subtitle}</p>
            <h1>{title}</h1>
            <p className={styles.intro}>{intro}</p>
          </div>
          <img className={styles.heroImage} src={heroImage} alt={heroImageAlt} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>What We Do</h2>
          <p>{whatWeDo}</p>
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
          <h2>Key Capabilities</h2>
          <ul className={styles.capabilityList}>
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Business Impact</h2>
          <p>{businessImpact}</p>
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
