import ServiceLayout from "../components/ServiceLayout";
import researchImage from "../assets/who-we-serve.png";

function ClinicalResearch() {
  return (
    <ServiceLayout
      title="Clinical Research Automation"
      subtitle="Service Area"
      intro="Accelerate protocol execution, site productivity, and study data integrity through structured digital trial operations."
      whatWeDo="ClinVira designs and deploys clinical operations platforms that connect protocol workflows, study teams, and oversight metrics from startup through submission."
      capabilities={[
        "Protocol-specific workflow automation",
        "eTMF and document lifecycle integration",
        "Site onboarding and startup orchestration",
        "Monitoring and risk-based quality dashboards",
        "Cross-system data reconciliation",
        "Submission-ready operational reporting",
      ]}
      businessImpact="Sponsors and CRO teams gain faster startup cycles, reduced operational drift across regions, and clearer visibility into study execution risk."
      heroImage={researchImage}
      heroImageAlt="Clinical research collaboration in a healthcare control room"
      pillars={[
        {
          title: "Operational Design",
          description: "Map end-to-end study processes and remove manual bottlenecks before implementation.",
        },
        {
          title: "System Integration",
          description: "Connect EDC, CTMS, eTMF, and reporting layers into one controlled data flow.",
        },
        {
          title: "Governed Execution",
          description: "Apply role-based controls and standardized workflows for global consistency.",
        },
      ]}
      kpis={[
        { label: "Study startup cycle reduction", value: "20-30%" },
        { label: "Protocol deviation decrease", value: "Up to 25%" },
        { label: "Operational reporting latency", value: "Near real-time" },
      ]}
    />
  );
}

export default ClinicalResearch;
