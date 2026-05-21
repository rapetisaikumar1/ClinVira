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
        <div className={styles.container}>
          <div className={styles.heroGrid}>

            {/* Left: eyebrow + heading + intro */}
            <div className={styles.heroContent}>
              <p className={styles.kicker}>{subtitle}</p>
              <h1>{title}</h1>
              <p className={styles.intro}>{intro}</p>
            </div>

            {/* Right: image properly framed */}
            <div className={styles.heroImageWrap}>
              <img className={styles.heroImage} src={heroImage} alt={heroImageAlt} />
              <div className={styles.heroImageBadge}>
                <svg className={styles.heroImageBadgeIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 14l-4-4 1.41-1.41L10 12.17l6.59-6.59L18 7l-8 8z" />
                </svg>
                <span>Enterprise Grade</span>
              </div>
            </div>

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
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <span className={styles.pillarNum}>{String(index + 1).padStart(2, "0")}</span>
                </div>
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
                <div className={styles.kpiIcon}>
                  {/* Trending up icon */}
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
                  </svg>
                </div>
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
