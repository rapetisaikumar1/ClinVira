import ServiceLayout from "../components/ServiceLayout";
import qualityImage from "../assets/key-benefits.png";

function QualityCompliance() {
  return (
    <ServiceLayout
      title="Quality & Compliance Systems"
      subtitle="Service Area"
      intro="Strengthen regulated operations with digital quality frameworks that are practical, auditable, and scalable."
      whatWeDo="We modernize quality systems and compliance processes across development and commercial operations using controlled workflows, traceability, and inspection-ready reporting."
      capabilities={[
        "Enterprise QMS architecture and rollout",
        "Deviation, CAPA, and change control digitization",
        "Validation evidence and audit trail automation",
        "SOP and policy lifecycle management",
        "Supplier and quality event integration",
        "Inspection preparation dashboards",
      ]}
      businessImpact="Quality leaders improve control consistency, shorten remediation cycles, and elevate audit confidence across global sites."
      heroImage={qualityImage}
      heroImageAlt="Quality and compliance digital monitoring icons"
      pillars={[
        {
          title: "Control Framework",
          description: "Implement standardized quality workflows aligned to FDA and GxP expectations.",
        },
        {
          title: "Digital Traceability",
          description: "Ensure every quality decision is timestamped, attributable, and review-ready.",
        },
        {
          title: "Continuous Readiness",
          description: "Maintain a live compliance posture with transparent quality health indicators.",
        },
      ]}
      kpis={[
        { label: "CAPA closure cycle reduction", value: "18-28%" },
        { label: "Audit preparation effort", value: "Up to -35%" },
        { label: "Quality visibility cadence", value: "Weekly to daily" },
      ]}
    />
  );
}

export default QualityCompliance;
