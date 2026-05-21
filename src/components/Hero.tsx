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
              PHARMACEUTICAL MANUFACTURING EXCELLENCE
            </div>
            <h1>
              Precision at Every<br />
              Stage of Pharma<br />
              Manufacturing
            </h1>
            <p>
              ClinVira specializes in pharmaceutical manufacturing — GMP-compliant MES
              implementations, electronic batch records, production analytics, and validated
              quality systems for regulated environments.
            </p>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>Book Consultation</Link>
              <Link to="/services" className={styles.secondaryButton}>Explore Services</Link>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.backgroundImage} src={heroImage} alt="ClinVira pharmaceutical manufacturing platform" />
    </section>
  );
}

export default Hero;
