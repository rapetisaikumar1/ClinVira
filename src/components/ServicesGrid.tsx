import { Link } from "react-router-dom";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    icon: "◉",
    title: "Clinical Research Automation",
    description:
      "Streamline trial operations, submissions, and data flows with protocol-driven automation.",
    to: "/services/clinical-research",
  },
  {
    icon: "✓",
    title: "Quality & Compliance Systems",
    description:
      "Build resilient quality management aligned to FDA, GxP, HIPAA, and GDPR expectations.",
    to: "/services/quality-compliance",
  },
  {
    icon: "◆",
    title: "Manufacturing Automation",
    description:
      "Digitize batch operations, process controls, and manufacturing intelligence.",
    to: "/services/manufacturing",
  },
  {
    icon: "◈",
    title: "AI & Data Intelligence",
    description:
      "Deploy analytics, predictive models, and governed data products for decision velocity.",
    to: "/services/ai-analytics",
  },
  {
    icon: "◐",
    title: "Pharma CRM Enablement",
    description:
      "Create connected commercial workflows across CRM, field force, and medical engagement.",
    to: "/services/crm",
  },
  {
    icon: "✦",
    title: "Digital Innovation",
    description:
      "Modernize legacy platforms and unlock scalable innovation across business units.",
    to: "/services/digital-innovation",
  },
];

function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2>Core Service Areas</h2>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.to}>Learn more</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
