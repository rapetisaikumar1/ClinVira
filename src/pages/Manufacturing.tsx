import ServiceLayout from "../components/ServiceLayout";
import manufacturingImage from "../assets/our-solution.png";

function Manufacturing() {
  return (
    <ServiceLayout
      title="Pharma Manufacturing"
      subtitle="Core Service Area"
      intro="GMP-compliant pharmaceutical manufacturing — from MES implementation and electronic batch records to production intelligence and release readiness."
      whatWeDo="ClinVira designs and deploys integrated manufacturing platforms connecting shop-floor execution, batch management, quality systems, and production analytics for pharmaceutical sites operating under FDA 21 CFR Part 211, EU GMP Annex 11, and ICH Q10 requirements."
      capabilities={[
        "Manufacturing Execution System (MES) implementation and integration",
        "Electronic Batch Record (EBR) design, configuration, and deployment",
        "SCADA and process control system integration",
        "Deviation, exception, and CAPA workflow automation",
        "Production and quality data convergence platforms",
        "Real-time batch disposition and release readiness dashboards",
      ]}
      businessImpact="Pharmaceutical manufacturing teams achieve higher line stability, faster batch release cycles, reduced GMP findings, and stronger inspection readiness across global sites."
      heroImage={manufacturingImage}
      heroImageAlt="Pharmaceutical manufacturing operations with connected GMP systems"
      pillars={[
        {
          title: "GMP-Compliant Architecture",
          description: "Design manufacturing systems with FDA 21 CFR Part 11, Part 211, and EU GMP Annex 11 compliance built in from day one.",
        },
        {
          title: "Shop-Floor Integration",
          description: "Connect MES, EBR, SCADA, LIMS, and ERP systems into a unified operational data model for end-to-end visibility.",
        },
        {
          title: "Production Intelligence",
          description: "Transform batch and process data into real-time decision support for production and quality leadership.",
        },
      ]}
      kpis={[
        { label: "Batch release cycle time reduction", value: "20–35%" },
        { label: "Deviation response acceleration", value: "Up to 40%" },
        { label: "GMP audit findings", value: "Significantly reduced" },
      ]}
    />
  );
}

export default Manufacturing;
