import styles from "./Page.module.css";
import aboutImage from "../assets/social-banner.png";

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1>About ClinVira</h1>
        <p>
          ClinVira is a Healthcare & Life Sciences digital transformation company helping regulated enterprises modernize operations from clinical research through manufacturing and commercial execution.
        </p>
        <img className={styles.heroImage} src={aboutImage} alt="Clinvira brand visual with connected healthcare systems" />
        <p>
          Our teams blend domain consulting, architecture, engineering, and compliance expertise to deliver practical modernization aligned to measurable business priorities.
        </p>

        <div className={styles.contactGrid}>
          <div>
            <h3>Industry-First Expertise</h3>
            <p>Deep understanding of trial operations, quality systems, and regulated manufacturing environments.</p>
          </div>
          <div>
            <h3>Execution Discipline</h3>
            <p>Structured governance, milestone controls, and transparent KPI reporting for executive visibility.</p>
          </div>
          <div>
            <h3>Modern Engineering</h3>
            <p>Cloud-native delivery with integration patterns, security controls, and adoption-focused design.</p>
          </div>
        </div>

        <h2>Our Delivery Principles</h2>
        <ul className={styles.bulletList}>
          <li>Design with compliance and quality by default</li>
          <li>Build scalable platforms, not disconnected point solutions</li>
          <li>Prioritize measurable impact over feature complexity</li>
          <li>Transfer capabilities to internal teams for sustained value</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
