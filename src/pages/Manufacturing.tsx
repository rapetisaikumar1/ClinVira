import ServiceLayout from "../components/ServiceLayout";
import manufacturingImage from "../assets/our-solution.png";

function Manufacturing() {
  return (
    <ServiceLayout
      title="Manufacturing Automation"
      subtitle="Service Area"
      intro="Build resilient, data-driven manufacturing operations with connected process controls and real-time decision support."
      whatWeDo="ClinVira integrates shop-floor systems, quality workflows, and production analytics to improve throughput, control, and release confidence."
      capabilities={[
        "MES and process control integration",
        "Electronic batch record enablement",
        "Production and quality data convergence",
        "Deviation and exception workflow automation",
        "Release readiness intelligence dashboards",
        "Operational performance telemetry",
      ]}
      businessImpact="Manufacturing teams gain higher line stability, improved release predictability, and better cross-functional coordination between production and quality."
      heroImage={manufacturingImage}
      heroImageAlt="Nurse and analytics workflow visual representing connected operations"
      pillars={[
        {
          title: "Connected Operations",
          description: "Unify production, quality, and engineering systems into a single execution model.",
        },
        {
          title: "Exception Intelligence",
          description: "Detect anomalies faster and route actions with role-based accountability.",
        },
        {
          title: "Release Confidence",
          description: "Strengthen release decisions with complete digital evidence and trend context.",
        },
      ]}
      kpis={[
        { label: "Deviation response acceleration", value: "Up to 30%" },
        { label: "Batch review cycle reduction", value: "15-25%" },
        { label: "Operational visibility", value: "24/7 dashboards" },
      ]}
    />
  );
}

export default Manufacturing;
