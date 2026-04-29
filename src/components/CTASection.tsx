import { Link } from "react-router-dom";
import styles from "./CTASection.module.css";

type CTASectionProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function CTASection({
  title = "Ready to modernize your healthcare enterprise stack?",
  description = "Partner with ClinVira to accelerate compliant transformation outcomes across clinical, quality, manufacturing, and commercial operations.",
  ctaLabel = "Talk to ClinVira",
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={ctaHref} className={styles.button}>{ctaLabel}</Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
