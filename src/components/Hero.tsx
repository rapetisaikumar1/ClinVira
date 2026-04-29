import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=2000&q=80";

function Hero() {
  return (
    <section className={styles.hero}>
      <img className={styles.backgroundImage} src={HERO_IMAGE} alt="" aria-hidden="true" />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>ClinVira Enterprise Platform</p>
          <h1>Digital Transformation for Life Sciences &amp; Healthcare</h1>
          <p>
            We modernize regulated healthcare and life sciences operations through clinical
            automation, compliant quality systems, data intelligence, and enterprise architecture
            execution.
          </p>
          <div className={styles.actions}>
            <Link to="/contact" className={styles.primaryButton}>Book Consultation</Link>
            <Link to="/services" className={styles.secondaryButton}>Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
