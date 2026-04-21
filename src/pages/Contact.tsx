import contactImage from "../assets/contact-cta.png";
import styles from "./Page.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1>Contact ClinVira</h1>
        <p>
          Let us discuss your transformation priorities across clinical, quality, manufacturing, AI, and commercial domains.
        </p>
        <img className={styles.heroImage} src={contactImage} alt="Contact ClinVira" />
        <div className={styles.contactGrid}>
          <div>
            <h3>Email</h3>
            <p>info@clinvira.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (800) 254-6847</p>
          </div>
          <div>
            <h3>Office</h3>
            <p>Boston, MA, United States</p>
          </div>
        </div>

        <h2>Engagement Process</h2>
        <div className={styles.contactGrid}>
          <div>
            <h3>1. Discovery Session</h3>
            <p>Align on business outcomes, compliance boundaries, and transformation priorities.</p>
          </div>
          <div>
            <h3>2. Solution Blueprint</h3>
            <p>Define architecture, delivery model, KPIs, and governance approach tailored to your organization.</p>
          </div>
          <div>
            <h3>3. Delivery Launch</h3>
            <p>Start with a focused execution plan and phased milestones to reduce risk and accelerate value.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
