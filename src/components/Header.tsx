import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logoImg from "../assets/logo-clinvira.png";

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
          <img src={logoImg} alt="ClinVira" className={styles.brandLogo} />
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
