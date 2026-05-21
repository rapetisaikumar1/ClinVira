import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo-clinvira.png";
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
        <NavLink to="/" className={styles.brand}>
          <img src={logo} alt="ClinVira" />
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
