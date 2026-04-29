import ServiceLayout from "../components/ServiceLayout";

function DataGovernance() {
  return (
    <ServiceLayout
      title="Data Governance"
      subtitle="Solutions / Data"
      intro="Enterprise data governance frameworks that establish ownership, quality, and trust across clinical, quality, manufacturing, and commercial data domains."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
      heroImageAlt="Data analytics dashboard"
      whatWeDo="We operationalize data governance with policies, stewardship models, and platform controls that align to GxP, HIPAA, and GDPR. Our frameworks turn fragmented data into a defensible, decision-grade enterprise asset."
      pillars={[
        {
          title: "Governance Frameworks",
          description:
            "Council structures, stewardship roles, and policy libraries aligned to regulatory and privacy requirements.",
          },
        {
          title: "Data Quality & Lineage",
          description:
            "Quality scorecards, master data management, and end-to-end lineage for regulated data flows.",
        },
        {
          title: "Privacy & Access",
          description:
            "Role-based access, consent management, and de-identification engineered for HIPAA and GDPR.",
        },
      ]}
      capabilities={[
        "Data governance operating models and stewardship rollout",
        "Master data and reference data management for regulated domains",
        "Data quality monitoring with KPIs and remediation workflows",
        "Privacy, consent, and access governance for HIPAA and GDPR",
        "Metadata, catalog, and lineage implementation",
        "Cloud data platform governance for Azure, AWS, and Snowflake",
      ]}
      businessImpact="Establish a single source of truth, reduce regulatory risk, and unlock advanced analytics with data that is governed, trusted, and audit-ready."
      kpis={[
        { value: "40%", label: "Reduction in data defects" },
        { value: "5x", label: "Faster data onboarding" },
        { value: "100%", label: "Critical data domains governed" },
        { value: "24/7", label: "Continuous quality monitoring" },
      ]}
    />
  );
}

export default DataGovernance;
