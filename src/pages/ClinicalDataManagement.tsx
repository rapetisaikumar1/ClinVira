import ServiceLayout from "../components/ServiceLayout";

function ClinicalDataManagement() {
  return (
    <ServiceLayout
      title="Clinical Data Management"
      subtitle="Solutions / Clinical"
      intro="Modern clinical data management platforms and services that accelerate database build, drive data quality, and shorten time-to-database-lock across global trials."
      heroImage="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=2000&q=80"
      heroImageAlt="Clinical data management workspace"
      whatWeDo="We deliver end-to-end clinical data management across EDC, CDMS, and decentralized trial platforms. From CRF design to lock, our teams operate within validated environments aligned to ICH-GCP and 21 CFR Part 11."
      pillars={[
        {
          title: "Study Build & Design",
          description:
            "CDISC-aligned CRF design, edit checks, and database build on Medidata Rave, Veeva, and Oracle EDC.",
        },
        {
          title: "Data Operations",
          description:
            "Data review, query management, medical coding, and SAE reconciliation with embedded quality controls.",
        },
        {
          title: "Standards & Submissions",
          description:
            "SDTM, ADaM, and define-XML packages prepared for regulatory submission across global authorities.",
        },
      ]}
      capabilities={[
        "EDC build, validation, and study go-live on leading platforms",
        "CDISC SDTM and ADaM dataset preparation and validation",
        "Medical coding using MedDRA and WHODrug dictionaries",
        "Data quality oversight, KRI, and risk-based monitoring support",
        "Decentralized and hybrid trial data integration",
        "21 CFR Part 11 and ICH-GCP aligned validated environments",
      ]}
      businessImpact="Compress database lock timelines, improve data quality, and deliver submission-ready datasets that accelerate trial outcomes and regulatory milestones."
      kpis={[
        { value: "35%", label: "Faster database lock" },
        { value: "<1%", label: "Open query rate at lock" },
        { value: "200+", label: "Studies delivered" },
        { value: "100%", label: "CDISC compliance" },
      ]}
    />
  );
}

export default ClinicalDataManagement;
