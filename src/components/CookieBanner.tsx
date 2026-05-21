import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

const STORAGE_KEY = "clinvira_cookie_consent";

type ConsentState = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState;
    if (!stored) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className={styles.banner}>
        <div className={styles.iconWrap} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="url(#ckG)" strokeWidth="1.6" fill="none"/>
            <circle cx="7.5" cy="9" r="1.5" fill="url(#ckG)"/>
            <circle cx="14.5" cy="7" r="1.2" fill="url(#ckG)"/>
            <circle cx="13" cy="14" r="1.8" fill="url(#ckG)"/>
            <circle cx="8" cy="14.5" r="1" fill="url(#ckG)" fillOpacity="0.7"/>
            <defs>
              <linearGradient id="ckG" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0d9488"/>
                <stop offset="1" stopColor="#0ea5e9"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={styles.content}>
          <p className={styles.title}>We value your privacy</p>
          <p className={styles.body}>
            We use cookies to enhance your browsing experience, analyze site traffic, and personalise
            content. By clicking <strong>Accept All</strong>, you consent to our use of cookies.
            You may choose to reject non-essential cookies.{" "}
            <a href="/about" className={styles.policyLink}>Learn more</a>.
          </p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.rejectBtn} onClick={handleReject}>
            Reject Non-Essential
          </button>
          <button type="button" className={styles.acceptBtn} onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
