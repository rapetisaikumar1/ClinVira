import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const serviceLinks = [
  { label: "Pharma Manufacturing", to: "/services/pharma-manufacturing" },
  { label: "Clinical Trials",      to: "/services/clinical-trials" },
  { label: "Pharma Validation",    to: "/services/pharma-validation" },
  { label: "Health Data Analysis", to: "/services/health-data-analysis" },
];

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const showServiceSubnav = location.pathname === "/services" || location.pathname.startsWith("/services/");

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.brand} aria-label="ClinVira home">
          <svg className={styles.brandIcon} width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true">
            <path d="M5 2 C5 11,23 11,23 18 C23 25,5 25,5 34" stroke="url(#dg1)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <path d="M23 2 C23 11,5 11,5 18 C5 25,23 25,23 34" stroke="url(#dg2)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <circle cx="5" cy="2" r="3" fill="#0d9488"/>
            <circle cx="23" cy="2" r="3" fill="#0ea5e9"/>
            <circle cx="23" cy="18" r="3" fill="#0d9488" fillOpacity="0.8"/>
            <circle cx="5" cy="18" r="3" fill="#0ea5e9" fillOpacity="0.8"/>
            <circle cx="5" cy="34" r="3" fill="#0d9488"/>
            <circle cx="23" cy="34" r="3" fill="#0ea5e9"/>
            <circle cx="14" cy="11" r="1.8" fill="#14b8a6" fillOpacity="0.5"/>
            <circle cx="14" cy="25" r="1.8" fill="#0ea5e9" fillOpacity="0.5"/>
            <defs>
              <linearGradient id="dg1" x1="0" y1="0" x2="28" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0d9488"/>
                <stop offset="1" stopColor="#0ea5e9"/>
              </linearGradient>
              <linearGradient id="dg2" x1="28" y1="0" x2="0" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ea5e9"/>
                <stop offset="1" stopColor="#0d9488"/>
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
    </header>
  );
}

export default Header;
