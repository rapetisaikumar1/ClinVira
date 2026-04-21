import { Link } from "react-router-dom";
import servicesImage from "../assets/services.png";
import styles from "./Page.module.css";

const services = [
  {
    label: "Clinical Research",
    to: "/services/clinical-research",
    detail: "Automate study operations, improve oversight, and reduce timeline risk.",
  },
  {
    label: "Quality & Compliance",
    to: "/services/quality-compliance",
    detail: "Digitize quality workflows with inspection-ready traceability.",
  },
  {
    label: "Manufacturing",
    to: "/services/manufacturing",
    detail: "Connect production and quality systems for stable operational control.",
  },
  {
    label: "AI & Analytics",
    to: "/services/ai-analytics",
    detail: "Build governed data products and predictive intelligence at scale.",
  },
  {
    label: "CRM",
    to: "/services/crm",
    detail: "Enable compliant, data-driven commercial execution across field teams.",
  },
  {
    label: "Digital Innovation",
    to: "/services/digital-innovation",
    detail: "Modernize legacy platforms and accelerate enterprise product delivery.",
  },
];

function ServicesOverview() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1>Services</h1>
        <p>
          Explore ClinVira capabilities built for enterprise healthcare and life sciences teams. Each service line combines domain expertise, engineering execution, and governance-led delivery.
        </p>
        <img className={styles.heroImage} src={servicesImage} alt="ClinVira services" />
        <div className={styles.linkGrid}>
          {services.map((item) => (
            <Link key={item.to} to={item.to} className={styles.linkCard}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverview;
