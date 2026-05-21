import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const serviceLinks = [
  { label: "Clinical Research", to: "/services/clinical-research" },
  { label: "Quality & Compliance", to: "/services/quality-compliance" },
  { label: "Manufacturing", to: "/services/manufacturing" },
  { label: "AI & Analytics", to: "/services/ai-analytics" },
  { label: "CRM", to: "/services/crm" },
  { label: "Digital Innovation", to: "/services/digital-innovation" },
];

const solutionLinks = [
  { label: "Regulatory Compliance", to: "/solutions/regulatory-compliance" },
  { label: "Data Governance", to: "/solutions/data-governance" },
  { label: "Pharma Supply Chain", to: "/solutions/pharma-supply-chain" },
  { label: "Clinical Data Management", to: "/solutions/clinical-data-management" },
  { label: "Validation & CSV", to: "/solutions/validation-csv" },
];

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isServicesArea = location.pathname === "/services" || location.pathname.startsWith("/services/");
  const isSolutionsArea = location.pathname === "/solutions" || location.pathname.startsWith("/solutions/");
  const showServiceSubnav = isServicesArea;
  const showSolutionsSubnav = isSolutionsArea;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.brand} aria-label="ClinVira home">
          <svg className={styles.brandIcon} width="34" height="36" viewBox="0 0 34 36" fill="none" aria-hidden="true">
            <rect x="13" y="0" width="8" height="2" rx="1" fill="#0d9488"/>
            <rect x="14" y="1" width="6" height="12" rx="1.5" fill="url(#cvGrad1)"/>
            <path d="M10 13 L1 31 C0 34 2 35.5 4.5 35.5 H29.5 C32 35.5 34 34 33 31 L24 13 Z" fill="url(#cvBodyFill)" stroke="url(#cvGrad2)" strokeWidth="1.5"/>
            <circle cx="11" cy="27" r="2.5" fill="#14b8a6" fillOpacity="0.55"/>
            <circle cx="20" cy="25" r="1.8" fill="#0ea5e9" fillOpacity="0.5"/>
            <circle cx="24" cy="29" r="1.2" fill="#14b8a6" fillOpacity="0.4"/>
            <defs>
              <linearGradient id="cvGrad1" x1="14" y1="0" x2="20" y2="13" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0d9488"/>
                <stop offset="1" stopColor="#14b8a6"/>
              </linearGradient>
              <linearGradient id="cvGrad2" x1="0" y1="0" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0d9488"/>
                <stop offset="1" stopColor="#0ea5e9"/>
              </linearGradient>
              <linearGradient id="cvBodyFill" x1="0" y1="13" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14b8a6" stopOpacity="0.12"/>
                <stop offset="1" stopColor="#0ea5e9" stopOpacity="0.07"/>
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.brandText}>
            Clin<span className={styles.brandAccent}>Vira</span>
          </span>
        </NavLink>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <NavLink to="/" className={styles.link}>Home</NavLink>
          <NavLink to="/services" className={styles.link}>Services</NavLink>
          <NavLink to="/solutions" className={styles.link}>Solutions</NavLink>
          <NavLink to="/careers" className={styles.link}>Careers</NavLink>
          <NavLink to="/about" className={styles.link}>About</NavLink>
          <NavLink to="/contact" className={styles.cta}>Contact</NavLink>
        </nav>
      </div>
      {showServiceSubnav && (
        <div className={`${styles.subnav} ${isMenuOpen ? styles.subnavOpen : ""}`}>
          <div className={styles.container}>
            {serviceLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className={styles.subLink}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {showSolutionsSubnav && (
        <div className={`${styles.subnav} ${isMenuOpen ? styles.subnavOpen : ""}`}>
          <div className={styles.container}>
            {solutionLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className={styles.subLink}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
