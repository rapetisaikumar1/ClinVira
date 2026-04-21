import { Link } from "react-router-dom";
import styles from "./Solutions.module.css";
import heroImage from "../assets/our-solution.png";
import whoImage from "../assets/who-we-serve.png";

function Solutions() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Connected Healthcare Monitoring</p>
              <h1 className={styles.heroTitle}>
                Connected Healthcare Monitoring Solutions for Smarter Patient Care
              </h1>
              <p className={styles.heroLead}>
                Clinvira helps healthcare organizations monitor patient and device data in real time through connected
                solutions that improve visibility, support faster response, and strengthen operational confidence.
              </p>
              <div className={styles.heroActions}>
                <Link to="/contact" className={styles.primaryBtn}>Talk to our team</Link>
                <Link to="/services" className={styles.secondaryBtn}>Explore services</Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <img className={styles.heroImage} src={heroImage} alt="Connected healthcare monitoring dashboard" />
              <div className={styles.heroFloatCard}>
                <span>✓</span>
                <div>
                  <strong>Real-time monitoring</strong>
                  <small>Compliant &amp; secure</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <p className={styles.statValue}>24/7</p>
              <p className={styles.statLabel}>Real-time visibility</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statValue}>5+</p>
              <p className={styles.statLabel}>Core focus areas</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statValue}>21 CFR</p>
              <p className={styles.statLabel}>Part 11 compliant</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statValue}>Global</p>
              <p className={styles.statLabel}>Delivery model</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO + OUR SOLUTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>About the platform</p>
            <h2 className={styles.sectionTitle}>Built for healthcare. Engineered for trust.</h2>
            <p className={styles.sectionSubtitle}>
              A purpose-built monitoring platform that bridges advanced technology and real-world healthcare outcomes.
            </p>
          </div>

          <div className={styles.split}>
            <div className={styles.splitCard}>
              <div className={styles.splitIcon} aria-hidden>◉</div>
              <h3>What We Do</h3>
              <p>
                We provide healthcare monitoring solutions that help care teams track important information, view
                trends, receive alerts, and support better day-to-day decision-making.
              </p>
            </div>

            <div className={styles.splitCard}>
              <div className={styles.splitIcon} aria-hidden>✦</div>
              <h3>Our Solution</h3>
              <p>
                ClinVira Inc is a healthcare and life sciences technology company specializing in AI-driven digital
                transformation for pharmaceutical, biotechnology, clinical research, and regulated manufacturing
                organizations.
              </p>
              <p>
                We help organizations modernize their clinical, quality, manufacturing, and commercial operations
                through secure, compliant, and scalable digital solutions built specifically for highly regulated
                environments.
              </p>
              <p>
                Our expertise spans clinical research, regulatory compliance, manufacturing operations, analytics, and
                enterprise platforms—enabling clients to accelerate innovation while maintaining the highest standards
                of data integrity, security, and regulatory compliance.
              </p>
              <p>
                With deep domain expertise and a global delivery model, ClinVira bridges the gap between advanced
                technology and real-world healthcare outcomes, helping organizations improve operational efficiency,
                compliance readiness, and patient impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Key Benefits</p>
            <h2 className={styles.sectionTitle}>What care teams get with ClinVira</h2>
            <p className={styles.sectionSubtitle}>
              Tangible outcomes that translate to better visibility, faster response, and stronger operational confidence.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden>◐</div>
              <h3>Real-time visibility</h3>
              <p>Real-time visibility into patient and device data across your entire environment.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden>⚡</div>
              <h3>Faster response</h3>
              <p>Faster response through intelligent alerts and trends surfaced when it matters.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden>◆</div>
              <h3>Operational confidence</h3>
              <p>Operational confidence with reliable, compliant infrastructure built for regulated care.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden>✓</div>
              <h3>Decision support</h3>
              <p>Clear decision support for care teams and operations across the patient journey.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Services</p>
            <h2 className={styles.sectionTitle}>End-to-end services around your monitoring program</h2>
            <p className={styles.sectionSubtitle}>
              From discovery to long-term operation, we partner across every stage of your connected monitoring journey.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <article className={styles.serviceCard}>
              <p className={styles.serviceNum}>01 — Discover</p>
              <h3>Solution Evaluation</h3>
              <p>Product demonstrations and discovery to match your monitoring priorities.</p>
            </article>
            <article className={styles.serviceCard}>
              <p className={styles.serviceNum}>02 — Launch</p>
              <h3>Deployment &amp; Setup</h3>
              <p>Hands-on support to launch connected monitoring across your environment.</p>
            </article>
            <article className={styles.serviceCard}>
              <p className={styles.serviceNum}>03 — Connect</p>
              <h3>Integration Assistance</h3>
              <p>Connect devices, data sources, and existing clinical and enterprise systems.</p>
            </article>
            <article className={styles.serviceCard}>
              <p className={styles.serviceNum}>04 — Operate</p>
              <h3>Technical Support</h3>
              <p>Troubleshooting and reliable engineering support when you need it most.</p>
            </article>
            <article className={styles.serviceCard}>
              <p className={styles.serviceNum}>05 — Evolve</p>
              <h3>Implementation Guidance</h3>
              <p>Ongoing expertise to evolve monitoring programs as your needs grow.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CORE FOCUS + TECHNOLOGY CAPABILITIES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Capabilities</p>
            <h2 className={styles.sectionTitle}>Where we focus and what we deliver</h2>
            <p className={styles.sectionSubtitle}>
              Deep specialization across regulated healthcare and life sciences—paired with the technology stack to execute.
            </p>
          </div>

          <div className={styles.capGrid}>
            <div className={styles.capColumn}>
              <h3>Core Focus Areas</h3>
              <ul className={styles.capList}>
                <li>Clinical Research &amp; Real-World Evidence Platforms</li>
                <li>Quality &amp; Compliance Digitalization (CSV, eQMS, FDA 21 CFR Part 11)</li>
                <li>Pharma &amp; Manufacturing Operations Automation</li>
                <li>AI, Analytics &amp; Power BI Dashboards</li>
                <li>CRM &amp; Commercial Enablement for Life Sciences</li>
              </ul>
            </div>

            <div className={styles.capColumn}>
              <h3>Technology Capabilities</h3>
              <ul className={styles.capList}>
                <li>Computer System Validation (CSV)</li>
                <li>Automated Workflows (CAPA, SOPs, Change Control)</li>
                <li>CRM for Pharma &amp; Manufacturing</li>
                <li>Power BI &amp; Advanced Analytics</li>
                <li>AI &amp; Predictive Intelligence</li>
                <li>Embedded Systems &amp; Industrial IoT</li>
                <li>Salesforce Marketing Cloud (SFMC)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.whoSplit}>
            <div className={styles.whoText}>
              <p className={styles.sectionLabel}>Who We Serve</p>
              <h2 className={styles.sectionTitle}>Partnering with regulated healthcare innovators</h2>
              <p>
                Pharmaceutical, biotechnology, clinical research, and regulated manufacturing organizations seeking
                connected, compliant, and intelligent monitoring across clinical, quality, and commercial operations.
              </p>
              <div className={styles.whoTags}>
                <span className={styles.whoTag}>Pharmaceutical</span>
                <span className={styles.whoTag}>Biotechnology</span>
                <span className={styles.whoTag}>Clinical Research</span>
                <span className={styles.whoTag}>Regulated Manufacturing</span>
              </div>
            </div>
            <img className={styles.whoImage} src={whoImage} alt="Healthcare and life sciences organizations served by ClinVira" />
          </div>
        </div>
      </section>

      {/* WHY CLINVIRA */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionLabel}>Why Clinvira</p>
            <h2 className={styles.sectionTitle}>A partner built around healthcare reality</h2>
            <p className={styles.sectionSubtitle}>
              Domain depth, real-world deployment experience, and dependable service—designed for the way care teams actually work.
            </p>
          </div>

          <div className={styles.whyGrid}>
            <article className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden>♥</div>
              <h3>Healthcare-focused approach</h3>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden>◈</div>
              <h3>Real-world deployment support</h3>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden>◇</div>
              <h3>Reliable service and guidance</h3>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden>◎</div>
              <h3>Clear visibility into important monitoring data</h3>
            </article>
          </div>

          <div className={styles.infoStrip}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon} aria-hidden>📍</div>
              <div>
                <strong>Headquartered in Cambridge, MA</strong>
                <span>Boston-area HQ supporting global delivery</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon} aria-hidden>🤝</div>
              <div>
                <strong>Powered by First Line Software</strong>
                <span>Backed by deep engineering expertise</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon} aria-hidden>🌍</div>
              <div>
                <strong>Trusted worldwide</strong>
                <span>Leading healthcare &amp; life sciences innovators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Let’s transform healthcare—intelligently and ethically.</h2>
          <p>
            Talk to our team about connected monitoring, compliant digital transformation, and measurable patient
            impact.
          </p>
          <Link to="/contact" className={styles.ctaButton}>Contact ClinVira</Link>
        </div>
      </section>
    </>
  );
}

export default Solutions;
