import { Link } from "react-router-dom";
import styles from "./CTASection.module.css";

type CTASectionProps = {
  title?: string;
  description?: string;
};

function CTASection({
  title = "Ready to modernize your healthcare enterprise stack?",
  description = "Partner with ClinVira to accelerate compliant transformation outcomes.",
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="/contact" className={styles.button}>Talk to ClinVira</Link>
      </div>
    </section>
  );
}

export default CTASection;
