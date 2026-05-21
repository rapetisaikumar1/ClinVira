import { Link } from "react-router-dom";
import styles from "./CTASection.module.css";

type CTASectionProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function CTASection({
  title = "Ready to Transform Your Pharma Operations?",
  description = "Partner with ClinVira for GMP-compliant manufacturing, validated systems, and inspection-ready pharmaceutical operations.",
  ctaLabel = "Talk to ClinVira",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={ctaHref} className={styles.button}>{ctaLabel} &rarr;</Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
