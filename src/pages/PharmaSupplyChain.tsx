import ServiceLayout from "../components/ServiceLayout";

function PharmaSupplyChain() {
  return (
    <ServiceLayout
      title="Pharma Supply Chain"
      subtitle="Solutions / Supply Chain"
      intro="Resilient, compliant, and serialized pharma supply chains — engineered for visibility, traceability, and uninterrupted patient supply across global networks."
      heroImage="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80"
      heroImageAlt="Pharmaceutical manufacturing facility"
      whatWeDo="We modernize pharma supply chains with serialization, cold chain visibility, and demand-sensing capabilities. Our solutions align to DSCSA, EU FMD, and global track-and-trace mandates while improving inventory and service levels."
      pillars={[
        {
          title: "Serialization & Track-and-Trace",
          description:
            "DSCSA, EU FMD, and global serialization with EPCIS event management and partner onboarding.",
        },
        {
          title: "Cold Chain & IoT",
          description:
            "Sensor-based monitoring, excursion management, and predictive analytics for temperature-sensitive products.",
        },
        {
          title: "Planning & Resilience",
          description:
            "Demand sensing, multi-tier visibility, and risk modeling to protect patient supply continuity.",
        },
      ]}
      capabilities={[
        "Serialization implementation and EPCIS event management",
        "DSCSA, EU FMD, and global track-and-trace compliance",
        "Cold chain monitoring with IoT sensor integration",
        "Demand forecasting and S&OP transformation",
        "Supplier risk and multi-tier supply chain visibility",
        "ERP, WMS, and TMS integration on SAP and Oracle",
      ]}
      businessImpact="Protect patient supply, meet global serialization mandates, and reduce inventory carrying costs while improving on-time-in-full performance."
      kpis={[
        { value: "98%", label: "On-time-in-full delivery" },
        { value: "25%", label: "Reduction in carrying cost" },
        { value: "100%", label: "Serialized SKU coverage" },
        { value: "<2hr", label: "Excursion response time" },
      ]}
    />
  );
}

export default PharmaSupplyChain;
