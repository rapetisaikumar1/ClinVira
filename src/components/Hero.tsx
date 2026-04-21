import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.kicker}>ClinVira Enterprise Platform</p>
            <h1>Digital Transformation for Life Sciences & Healthcare</h1>
            <p>
              We modernize regulated healthcare and life sciences operations through clinical automation, compliant quality systems, data intelligence, and enterprise architecture execution.
            </p>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>Book Consultation</Link>
              <Link to="/services" className={styles.secondaryButton}>Explore Services</Link>
            </div>
          </div>
        </div>
      </div>
      <img src={heroImage} alt="ClinVira enterprise healthcare visual" className={styles.backgroundImage} />
    </section>
  );
}

export default Hero;
