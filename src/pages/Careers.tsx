import styles from "./Careers.module.css";
import careersImage from "../assets/who-we-serve.png";

const roles = [
  {
    title: "Consulting & Strategy",
    description:
      "Transformation consultants and domain leads for clinical, quality, and manufacturing programs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Engineering & Data",
    description:
      "Cloud engineers, integration developers, data engineers, and analytics specialists.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    title: "Program Delivery",
    description:
      "Delivery managers and PMO leaders driving governance, quality, and adoption outcomes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

function Careers() {
  return (
    <div className={styles.page}>
      {/* ── Hero ────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Join Our Team</p>
              <h1 className={styles.heroTitle}>Careers at ClinVira</h1>
              <p className={styles.heroIntro}>
                Join teams shaping the future of healthcare and life sciences
                transformation. We are looking for consultants, architects,
                engineers, and compliance specialists.
              </p>
            </div>

            <div className={styles.heroImageWrap}>
              <img
                className={styles.heroImage}
                src={careersImage}
                alt="Healthcare professionals collaborating"
              />
              <div className={styles.heroImageBadge}>
                <div className={styles.heroBadgeIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span>We're Hiring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Disciplines ────────────────────────── */}
      <section className={styles.rolesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionKicker}>Open Disciplines</p>
            <h2 className={styles.sectionTitle}>Who we're looking for</h2>
            <p className={styles.sectionIntro}>
              We hire problem-solvers who can work across business and
              technology, communicate with stakeholders, and execute in
              regulated enterprise environments.
            </p>
          </div>

          <div className={styles.rolesGrid}>
            {roles.map((role) => (
              <div key={role.title} className={styles.roleCard}>
                <div className={styles.roleIcon}>{role.icon}</div>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleDesc}>{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.ctaKicker}>Get In Touch</p>
              <p className={styles.ctaText}>
                Send your profile to{" "}
                <a href="mailto:careers@clinvira.com" className={styles.ctaEmail}>
                  careers@clinvira.com
                </a>{" "}
                with your domain focus and preferred location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
