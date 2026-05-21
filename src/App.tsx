import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesOverview from "./pages/ServicesOverview";
import Manufacturing from "./pages/Manufacturing";
import ClinicalResearch from "./pages/ClinicalResearch";
import QualityCompliance from "./pages/QualityCompliance";
import AIAnalytics from "./pages/AIAnalytics";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <CookieBanner />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />

          {/* 4 core pharmaceutical service domains */}
          <Route path="/services/pharma-manufacturing" element={<Manufacturing />} />
          <Route path="/services/clinical-trials" element={<ClinicalResearch />} />
          <Route path="/services/pharma-validation" element={<QualityCompliance />} />
          <Route path="/services/health-data-analysis" element={<AIAnalytics />} />

          {/* Legacy redirects — prevent 404s for old URLs */}
          <Route path="/services/manufacturing" element={<Navigate to="/services/pharma-manufacturing" replace />} />
          <Route path="/services/clinical-research" element={<Navigate to="/services/clinical-trials" replace />} />
          <Route path="/services/quality-compliance" element={<Navigate to="/services/pharma-validation" replace />} />
          <Route path="/services/ai-analytics" element={<Navigate to="/services/health-data-analysis" replace />} />
          <Route path="/services/crm" element={<Navigate to="/services" replace />} />
          <Route path="/services/digital-innovation" element={<Navigate to="/services" replace />} />
          <Route path="/solutions" element={<Navigate to="/services" replace />} />
          <Route path="/solutions/*" element={<Navigate to="/services" replace />} />

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
