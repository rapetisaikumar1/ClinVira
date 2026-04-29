import ServiceLayout from "../components/ServiceLayout";

function ValidationCSV() {
  return (
    <ServiceLayout
      title="Validation & CSV"
      subtitle="Solutions / Validation"
      intro="Computer System Validation and Computer Software Assurance programs that deliver compliant, audit-ready GxP systems with right-sized rigor and modern tooling."
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
      heroImageAlt="Validation and quality engineering workspace"
      whatWeDo="We deliver validation and CSA-aligned assurance for cloud, SaaS, and on-premise GxP systems. Our risk-based methodology aligns to FDA CSA guidance, GAMP 5, and 21 CFR Part 11, with automation that compresses validation lifecycles."
      pillars={[
        {
          title: "Risk-Based Validation",
          description:
            "GAMP 5 and CSA-aligned risk assessments that focus testing where it protects patient and data integrity.",
        },
        {
          title: "Validation Automation",
          description:
            "Automated test execution, electronic protocols, and digital validation platforms reduce manual effort.",
        },
        {
          title: "Periodic Review",
          description:
            "Continuous compliance with periodic reviews, change control, and audit trail review programs.",
        },
      ]}
      capabilities={[
        "GxP system validation across LIMS, MES, EDC, ERP, and cloud platforms",
        "FDA CSA and GAMP 5 risk-based validation methodology",
        "21 CFR Part 11 assessments and remediation",
        "Automated testing using ValGenesis, Kneat, and Tricentis",
        "Periodic review, change control, and decommissioning programs",
        "Cloud and SaaS qualification including Azure, AWS, and Veeva",
      ]}
      businessImpact="Compress validation timelines, lower compliance cost, and maintain continuous audit-readiness across the GxP application portfolio."
      kpis={[
        { value: "50%", label: "Reduction in validation effort" },
        { value: "100%", label: "Audit pass rate" },
        { value: "300+", label: "Systems validated" },
        { value: "21 CFR", label: "Part 11 aligned" },
      ]}
    />
  );
}

export default ValidationCSV;
