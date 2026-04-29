import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesOverview from "./pages/ServicesOverview";
import ClinicalResearch from "./pages/ClinicalResearch";
import QualityCompliance from "./pages/QualityCompliance";
import Manufacturing from "./pages/Manufacturing";
import AIAnalytics from "./pages/AIAnalytics";
import CRM from "./pages/CRM";
import DigitalInnovation from "./pages/DigitalInnovation";
import Solutions from "./pages/Solutions";
import RegulatoryCompliance from "./pages/RegulatoryCompliance";
import DataGovernance from "./pages/DataGovernance";
import PharmaSupplyChain from "./pages/PharmaSupplyChain";
import ClinicalDataManagement from "./pages/ClinicalDataManagement";
import ValidationCSV from "./pages/ValidationCSV";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/clinical-research" element={<ClinicalResearch />} />
          <Route path="/services/quality-compliance" element={<QualityCompliance />} />
          <Route path="/services/manufacturing" element={<Manufacturing />} />
          <Route path="/services/ai-analytics" element={<AIAnalytics />} />
          <Route path="/services/crm" element={<CRM />} />
          <Route path="/services/digital-innovation" element={<DigitalInnovation />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/regulatory-compliance" element={<RegulatoryCompliance />} />
          <Route path="/solutions/data-governance" element={<DataGovernance />} />
          <Route path="/solutions/pharma-supply-chain" element={<PharmaSupplyChain />} />
          <Route path="/solutions/clinical-data-management" element={<ClinicalDataManagement />} />
          <Route path="/solutions/validation-csv" element={<ValidationCSV />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
