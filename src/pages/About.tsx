import styles from "./About.module.css";
import aboutImage from "../assets/why-clinvira.png";

function About() {
  return (
    <div className={styles.page}>

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>

            {/* Left: text content */}
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>Who We Are</span>
              <h1 className={styles.heroTitle}>About ClinVira</h1>
              <p className={styles.lead}>
                ClinVira is a pharmaceutical technology company specializing in manufacturing,
                clinical research, validation, and health data for regulated environments.
                We help pharmaceutical and life sciences organizations achieve operational excellence,
                GMP compliance, and inspection readiness.
              </p>
              <p className={styles.pullQuote}>
                Our teams combine pharmaceutical domain expertise, regulatory knowledge, engineering
                discipline, and data science to deliver practical solutions that hold up under scrutiny
                — from the shop floor to the regulatory authority.
              </p>
            </div>

            {/* Right: image with floating badge */}
            <div className={styles.heroImageWrap}>
              <img
                className={styles.heroImage}
                src={aboutImage}
                alt="ClinVira pharmaceutical manufacturing and compliance platform"
              />
              <div className={styles.imageBadge}>
                <div className={styles.imageBadgeDot}>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                </div>
                <div className={styles.imageBadgeText}>
                  <strong>Pharmaceutical Excellence</strong>
                  <span>GMP &amp; Regulatory Expertise</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPERTISE PILLARS ── */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Our Strengths</p>
            <h2 className={styles.sectionTitle}>What Sets ClinVira Apart</h2>
          </div>
          <div className={styles.pillarsGrid}>

            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>
                {/* Shield / expertise icon */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 14l-4-4 1.41-1.41L10 12.17l6.59-6.59L18 7l-8 8z" />
                </svg>
              </div>
              <h3>Pharmaceutical Domain Expertise</h3>
              <p>Deep understanding of GMP manufacturing operations, clinical trial requirements, CSV obligations, and pharmaceutical data governance across FDA and EMA-regulated markets.</p>
            </div>

            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>
                {/* Bar chart / execution icon */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
                </svg>
              </div>
              <h3>Regulatory Precision</h3>
              <p>Every solution is designed with FDA, EMA, ICH, and GMP requirements as foundational constraints — compliance built in from architecture through validated deployment.</p>
            </div>

            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>
                {/* Lightning / engineering icon */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.02 10.01L13 2l-8 11h6l-1.99 9L19.02 10.01z" />
                </svg>
              </div>
              <h3>Validated Engineering</h3>
              <p>Cloud-native implementations with validated architectures, secure integrations, 21 CFR Part 11 compliant design, and complete documentation packages.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── DELIVERY PRINCIPLES ── */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.principlesCard}>
            <div className={styles.principlesHead}>
              <span className={styles.eyebrow}>Our Approach</span>
              <h2>Our Delivery Principles</h2>
            </div>
            <ul className={styles.principlesList}>
              <li>Design for GMP compliance and auditability by default</li>
              <li>Implement validated systems with complete lifecycle documentation</li>
              <li>Prioritize patient safety and data integrity above all</li>
              <li>Build scalable platforms that evolve with regulatory requirements</li>
              <li>Transfer validated knowledge to internal teams for sustained capability</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
