import styles from "./Page.module.css";
import careersImage from "../assets/who-we-serve.png";

function Careers() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1>Careers at ClinVira</h1>
        <p>
          Join teams shaping the future of healthcare and life sciences transformation. We are looking for consultants, architects, engineers, and compliance specialists.
        </p>
        <img className={styles.heroImage} src={careersImage} alt="Healthcare professionals collaborating" />
        <p>
          We hire problem-solvers who can work across business and technology, communicate with stakeholders, and execute in regulated enterprise environments.
        </p>
        <div className={styles.contactGrid}>
          <div>
            <h3>Consulting & Strategy</h3>
            <p>Transformation consultants and domain leads for clinical, quality, and manufacturing programs.</p>
          </div>
          <div>
            <h3>Engineering & Data</h3>
            <p>Cloud engineers, integration developers, data engineers, and analytics specialists.</p>
          </div>
          <div>
            <h3>Program Delivery</h3>
            <p>Delivery managers and PMO leaders driving governance, quality, and adoption outcomes.</p>
          </div>
        </div>
        <p>Send your profile to careers@clinvira.com with your domain focus and preferred location.</p>
      </div>
    </section>
  );
}

export default Careers;
