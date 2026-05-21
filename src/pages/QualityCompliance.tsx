import ServiceLayout from "../components/ServiceLayout";
import qualityImage from "../assets/key-benefits.png";

function QualityCompliance() {
  return (
    <ServiceLayout
      title="Pharma Validation"
      subtitle="Specialized Service Area"
      intro="Rigorous computer system validation (CSV) and GxP compliance services aligned to FDA 21 CFR Part 11, EU GMP Annex 11, and GAMP 5 methodologies."
      whatWeDo="ClinVira delivers structured validation programs for pharmaceutical computerized systems — from risk assessment and URS development through IQ/OQ/PQ execution, periodic review, and ongoing validation maintenance — reducing compliance risk and inspection exposure."
      capabilities={[
        "Validation Master Plan (VMP) development and project governance",
        "Risk-based IQ/OQ/PQ protocol development and execution",
        "FDA 21 CFR Part 11 compliance assessment and gap remediation",
        "GAMP 5 software categorization and validation lifecycle management",
        "Audit trail review and electronic records compliance verification",
        "Periodic review programs and ongoing validation maintenance",
      ]}
      businessImpact="Quality and validation teams achieve accelerated project delivery, reduced inspection observations, and sustained validated state across a growing portfolio of GxP-regulated systems."
      heroImage={qualityImage}
      heroImageAlt="Pharmaceutical validation and GMP compliance documentation"
      pillars={[
        {
          title: "Risk-Based Approach",
          description: "Apply GAMP 5 and ICH Q9 risk principles to focus validation effort where patient safety and data integrity risk is highest.",
        },
        {
          title: "Lifecycle Validation",
          description: "Maintain validated state through system changes with structured change control, impact assessment, and revalidation protocols.",
        },
        {
          title: "Audit-Ready Evidence",
          description: "Generate complete, reviewable validation documentation packages designed to satisfy FDA and EMA regulatory inspectors.",
        },
      ]}
      kpis={[
        { label: "Validation projects delivered on time", value: "Within scope" },
        { label: "Revalidation cycle time", value: "Up to 30% faster" },
        { label: "Inspection observations", value: "Significantly reduced" },
      ]}
    />
  );
}

export default QualityCompliance;
