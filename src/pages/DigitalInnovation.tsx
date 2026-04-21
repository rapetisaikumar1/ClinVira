import ServiceLayout from "../components/ServiceLayout";
import innovationImage from "../assets/why-clinvira.png";

function DigitalInnovation() {
  return (
    <ServiceLayout
      title="Digital Innovation & Modernization"
      subtitle="Service Area"
      intro="Modernize critical platforms and establish scalable digital foundations for long-term enterprise agility."
      whatWeDo="ClinVira leads modernization initiatives that balance business continuity with technology renewal across architecture, engineering, and operating models."
      capabilities={[
        "Application portfolio modernization planning",
        "Cloud and platform architecture design",
        "DevSecOps and release management enablement",
        "API-first integration acceleration",
        "Product delivery governance and PMO alignment",
        "Change adoption and capability uplift",
      ]}
      businessImpact="Leadership teams reduce modernization risk, increase delivery predictability, and accelerate high-value digital initiatives across business units."
      heroImage={innovationImage}
      heroImageAlt="Digital innovation dashboard and modern healthcare interface"
      pillars={[
        {
          title: "Roadmap Clarity",
          description: "Prioritize modernization investments with measurable business outcomes and governance.",
        },
        {
          title: "Platform Strength",
          description: "Build robust foundations for integration, security, and delivery scale.",
        },
        {
          title: "Execution Discipline",
          description: "Drive transformation with practical operating models and transparent progress indicators.",
        },
      ]}
      kpis={[
        { label: "Release velocity improvement", value: "Up to 2x" },
        { label: "Legacy dependency reduction", value: "20-35%" },
        { label: "Program visibility maturity", value: "Executive-ready" },
      ]}
    />
  );
}

export default DigitalInnovation;
