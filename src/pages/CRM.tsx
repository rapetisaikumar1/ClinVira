import ServiceLayout from "../components/ServiceLayout";
import crmImage from "../assets/services.png";

function CRM() {
  return (
    <ServiceLayout
      title="Pharma CRM & Commercial Enablement"
      subtitle="Service Area"
      intro="Design compliant commercial platforms that connect field execution, customer engagement, and business insight."
      whatWeDo="We modernize CRM architecture and operating workflows for pharma and healthcare organizations to improve adoption, coordination, and data quality in commercial operations."
      capabilities={[
        "CRM operating model redesign",
        "Field force workflow and territory enablement",
        "Customer and HCP engagement intelligence",
        "Commercial master data harmonization",
        "Campaign and medical-commercial coordination",
        "Adoption and governance dashboards",
      ]}
      businessImpact="Commercial teams experience better platform adoption, more consistent customer engagement execution, and higher confidence in market decision data."
      heroImage={crmImage}
      heroImageAlt="Enterprise services and commercial enablement visual"
      pillars={[
        {
          title: "Commercial Alignment",
          description: "Synchronize medical, field, and marketing workflows within one governed CRM model.",
        },
        {
          title: "Execution Quality",
          description: "Improve territory planning, call quality, and activity consistency with guided flows.",
        },
        {
          title: "Performance Insight",
          description: "Measure commercial effectiveness with clean data and reliable KPI frameworks.",
        },
      ]}
      kpis={[
        { label: "User adoption improvement", value: "15-30%" },
        { label: "Data quality uplift", value: "+25%" },
        { label: "Commercial reporting confidence", value: "Enterprise-grade" },
      ]}
    />
  );
}

export default CRM;
