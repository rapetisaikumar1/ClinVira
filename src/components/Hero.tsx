import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.kicker}>
              CLINVIRA ENTERPRISE PLATFORM
            </div>
            <h1>
              Digital Transformation<br />
              for Life Sciences &amp;<br />
              Healthcare
            </h1>
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
      </div>
      <img className={styles.backgroundImage} src={heroImage} alt="ClinVira enterprise healthcare visual" />
    </section>
  );
}

export default Hero;
