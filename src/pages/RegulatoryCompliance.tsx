import ServiceLayout from "../components/ServiceLayout";

function RegulatoryCompliance() {
  return (
    <ServiceLayout
      title="Regulatory Compliance"
      subtitle="Solutions / Regulatory"
      intro="End-to-end regulatory compliance programs aligned to FDA, EMA, MHRA, and global health authority expectations — engineered for audit-readiness across the product lifecycle."
      heroImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
      heroImageAlt="Regulated laboratory environment"
      whatWeDo="We design, operate, and modernize regulatory operations for global life sciences organizations. From submission strategy to electronic publishing, we help teams navigate complex regulatory frameworks with predictable, defensible execution."
      pillars={[
        {
          title: "Submission Strategy",
          description:
            "IND, NDA, BLA, MAA, and CTA strategy with structured authoring and end-to-end publishing on regulated platforms.",
        },
        {
          title: "Health Authority Engagement",
          description:
            "Pre-submission meetings, response management, and structured communication aligned to ICH guidance.",
        },
        {
          title: "Lifecycle Compliance",
          description:
            "Variations, renewals, label management, and post-approval commitments tracked across markets.",
        },
      ]}
      capabilities={[
        "Regulatory strategy for INDs, NDAs, BLAs, and global market authorizations",
        "eCTD authoring, validation, and structured product labeling",
        "21 CFR Part 11 and Annex 11 alignment for regulated systems",
        "Health authority correspondence, queries, and response management",
        "Regulatory intelligence and country-specific market access mapping",
        "Audit and inspection readiness with corrective action support",
      ]}
      businessImpact="Reduce time-to-submission, minimize cycle rework, and operate audit-ready regulatory functions that scale with your global pipeline."
      kpis={[
        { value: "30%", label: "Faster submission cycles" },
        { value: "100%", label: "Audit-ready documentation" },
        { value: "60+", label: "Markets supported" },
        { value: "0", label: "Critical 483 findings" },
      ]}
    />
  );
}

export default RegulatoryCompliance;
