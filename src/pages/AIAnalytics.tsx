import ServiceLayout from "../components/ServiceLayout";
import aiImage from "../assets/technology-stack.png";

function AIAnalytics() {
  return (
    <ServiceLayout
      title="Health Data Analysis"
      subtitle="Specialized Service Area"
      intro="Advanced analytics and health data intelligence for pharmaceutical operations — turning complex clinical, manufacturing, and real-world data into actionable decisions."
      whatWeDo="ClinVira builds governed health data platforms that transform fragmented pharmaceutical and clinical data into enterprise analytics assets — enabling pharmacovigilance signal detection, manufacturing process intelligence, real-world evidence generation, and regulatory data analytics."
      capabilities={[
        "Clinical and operational data warehouse design and implementation",
        "Pharmacovigilance (PV) data analysis and safety signal detection",
        "Real-world evidence (RWE) platform development and analytics",
        "Manufacturing process analytical technology (PAT) analytics",
        "Population health and patient outcomes analytics",
        "Regulatory intelligence and submission data analytics",
      ]}
      businessImpact="Pharmaceutical data teams gain faster signal detection, stronger clinical evidence generation, manufacturing process insights, and governed data platforms that hold up under regulatory scrutiny."
      heroImage={aiImage}
      heroImageAlt="Pharmaceutical health data analytics and intelligence platform"
      pillars={[
        {
          title: "Governed Data Foundation",
          description: "Build trusted, auditable data pipelines from clinical, manufacturing, and commercial sources aligned to FAIR data principles and 21 CFR requirements.",
        },
        {
          title: "Clinical Intelligence",
          description: "Apply advanced analytics to trial data, adverse event signals, and patient outcomes to generate robust regulatory-grade evidence.",
        },
        {
          title: "Operational Analytics",
          description: "Deploy manufacturing process analytics, quality trending, and predictive intelligence for production and quality optimization.",
        },
      ]}
      kpis={[
        { label: "Safety signal detection speed", value: "Up to 50% faster" },
        { label: "Data pipeline latency", value: "Near real-time from source" },
        { label: "Analytics coverage", value: "Across all pharma domains" },
      ]}
    />
  );
}

export default AIAnalytics;
