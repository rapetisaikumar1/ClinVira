import contactImage from "../assets/contact-cta.png";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.page}>

      {/* ── Hero ───────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>

            {/* Left: content + contact cards */}
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Get in Touch</p>
              <h1 className={styles.heroTitle}>Contact ClinVira</h1>
              <p className={styles.heroIntro}>
                Let us discuss your transformation priorities across clinical, quality, manufacturing, AI, and commercial domains.
              </p>

              <div className={styles.contactCards}>
                {/* Email */}
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <polyline points="2,4 12,13 22,4" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.cardLabel}>Email</p>
                    <a href="mailto:info@clinvira.com" className={styles.cardValue}>info@clinvira.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.cardLabel}>Phone</p>
                    <p className={styles.cardValue}>+1 (208) 418 1217</p>
                  </div>
                </div>

                {/* Office */}
                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.cardLabel}>Office</p>
                    <p className={styles.cardValue}>580 Chelsea Street, East Boston, MA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: image */}
            <div className={styles.heroImageWrap}>
              <img className={styles.heroImage} src={contactImage} alt="Contact ClinVira" />
              <div className={styles.heroImageBadge}>
                <div className={styles.heroBadgeIcon}>
                  <svg viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span>Enterprise Ready</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Engagement Process ─────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionKicker}>How We Work</p>
            <h2 className={styles.sectionTitle}>Engagement Process</h2>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.stepNum}>1</div>
              <h3>Discovery Session</h3>
              <p>Align on business outcomes, compliance boundaries, and transformation priorities.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.stepNum}>2</div>
              <h3>Solution Blueprint</h3>
              <p>Define architecture, delivery model, KPIs, and governance approach tailored to your organization.</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.stepNum}>3</div>
              <h3>Delivery Launch</h3>
              <p>Start with a focused execution plan and phased milestones to reduce risk and accelerate value.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
