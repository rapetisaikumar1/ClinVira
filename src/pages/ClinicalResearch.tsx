import ServiceLayout from "../components/ServiceLayout";
import researchImage from "../assets/who-we-serve.png";

function ClinicalResearch() {
  return (
    <ServiceLayout
      title="Clinical Trials"
      subtitle="Specialized Service Area"
      intro="Technology-driven clinical trial management from protocol design through regulatory submission — built for speed, data integrity, and ICH E6 R2 GCP compliance."
      whatWeDo="ClinVira implements clinical trial management systems connecting CTMS, EDC, eTMF, and randomization systems, enabling sponsors and CROs to execute studies with improved oversight, reduced site burden, and submission-ready data quality."
      capabilities={[
        "Clinical Trial Management System (CTMS) implementation and configuration",
        "Electronic Data Capture (EDC) platform setup and system integration",
        "eTMF design, deployment, and ongoing health monitoring",
        "Site activation and startup workflow automation",
        "Risk-based monitoring (RBM) frameworks and oversight dashboards",
        "Regulatory submission (eCTD) data packaging and support",
      ]}
      businessImpact="Sponsors and CRO teams gain faster site activation, reduced protocol deviations, real-time operational oversight, and inspection-ready trial master files throughout the study lifecycle."
      heroImage={researchImage}
      heroImageAlt="Clinical trial management and operations platform"
      pillars={[
        {
          title: "Protocol-to-System Alignment",
          description: "Translate protocol requirements into configured system workflows that reduce manual interpretation and deviation risk.",
        },
        {
          title: "Integrated Trial Ecosystem",
          description: "Connect CTMS, EDC, eTMF, IRT, and safety systems into a governed, auditable trial data environment.",
        },
        {
          title: "Regulatory Readiness",
          description: "Maintain inspection-ready trial master files and submission-quality data packages from study startup through close-out.",
        },
      ]}
      kpis={[
        { label: "Study startup acceleration", value: "25–35%" },
        { label: "Protocol deviation reduction", value: "Up to 30%" },
        { label: "Submission data readiness", value: "Near real-time tracking" },
      ]}
    />
  );
}

export default ClinicalResearch;
