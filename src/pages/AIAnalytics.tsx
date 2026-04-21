import ServiceLayout from "../components/ServiceLayout";
import aiImage from "../assets/technology-stack.png";

function AIAnalytics() {
  return (
    <ServiceLayout
      title="AI & Data Intelligence"
      subtitle="Service Area"
      intro="Convert fragmented healthcare and life sciences data into governed intelligence that drives operational decisions."
      whatWeDo="We implement data foundations, analytics models, and AI workflows designed for high-trust regulated environments where explainability and control are critical."
      capabilities={[
        "Lakehouse and curated data product design",
        "Predictive risk and anomaly detection models",
        "Role-specific real-time decision dashboards",
        "Model governance and lifecycle controls",
        "Operational AI workflow orchestration",
        "KPI instrumentation and value tracking",
      ]}
      businessImpact="Data, clinical, and operations teams gain faster insight cycles, stronger forecasting confidence, and measurable value from AI investments."
      heroImage={aiImage}
      heroImageAlt="Layered healthcare technology stack with AI analytics"
      pillars={[
        {
          title: "Data Foundation",
          description: "Establish trusted data pipelines with reusable semantic models across business domains.",
        },
        {
          title: "Applied Intelligence",
          description: "Deploy practical AI patterns that improve decisions, not just dashboards.",
        },
        {
          title: "Governed Scale",
          description: "Embed controls for model quality, transparency, and regulatory confidence.",
        },
      ]}
      kpis={[
        { label: "Analytics cycle-time reduction", value: "Up to 40%" },
        { label: "Forecasting confidence uplift", value: "+20%" },
        { label: "Decision latency", value: "From weekly to daily" },
      ]}
    />
  );
}

export default AIAnalytics;
