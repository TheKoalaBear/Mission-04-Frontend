import React from "react";
import Footer from "../commons/Footer";
import NavBar from "../commons/NavBar";
import ChatPopup from "../commons/ChatPopup";
import styles from "./css/Home.module.css";
import comprehensiveIcon from "../assets/comprehensive.svg";
import mechanicalBreakdownIcon from "../assets/mechanicalbreakdown.svg";
import thirdPartyIcon from "../assets/thirdparty.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Our Platform</h1>
          <p className={styles.heroSubtitle}>
            Discover amazing features and possibilities
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>
      <section className={styles.insuranceSection}>
        <h2 className={styles.sectionTitle}>
          Choose the best car insurance for you
        </h2>
        <div className={styles.insuranceGrid}>
          <div className={styles.insuranceCard}>
            <img
              src={mechanicalBreakdownIcon}
              alt="Mechanical Breakdown Insurance"
              className={styles.insuranceIcon}
            />
            <h3>Mechanical Breakdown Insurance (MBI)</h3>
            <p>
              Mechanical Breakdown Insurance (MBI) can be taken out when you're
              buying a used vehicle and protects you against costs that come
              with repairing unexpected mechanical faults.
            </p>
            <div className={styles.cardButtons}>
              <button className={styles.exploreButton}>Explore benefits</button>
              <button className={styles.quoteButton}>Grab a quote</button>
            </div>
          </div>
          <div className={styles.insuranceCard}>
            <img
              src={comprehensiveIcon}
              alt="Comprehensive Insurance"
              className={styles.insuranceIcon}
            />
            <h3>Comprehensive</h3>
            <p>
              Comprehensive car insurance with all the bells and whistles to
              cover damage to your car or someone else's vehicle or stuff. Plus,
              options to boost your cover. Good choice for sensible Sallys.
            </p>
            <div className={styles.cardButtons}>
              <button className={styles.exploreButton}>Explore benefits</button>
              <button className={styles.quoteButton}>Grab a quote</button>
            </div>
          </div>
          <div className={styles.insuranceCard}>
            <img
              src={thirdPartyIcon}
              alt="Third Party Insurance"
              className={styles.insuranceIcon}
            />
            <h3>Third Party Only</h3>
            <p>
              No-frills car insurance that covers damage to someone else's
              vehicle or stuff. Plus, options to boost your cover. Good choice
              for old bangers or risk takers.
            </p>
            <div className={styles.cardButtons}>
              <button className={styles.exploreButton}>Explore benefits</button>
              <button className={styles.quoteButton}>Grab a quote</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.comparisonSection}>
        <div className={styles.comparisonContent}>
          <h2 className={styles.comparisonTitle}>
            Bells and whistles to no-frills.
          </h2>
          <p className={styles.comparisonSubtitle}>Compare our cover.</p>
          <button className={styles.comparisonButton}>Compare Now</button>
        </div>
      </section>
      <section className={styles.tableSection}>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.featureColumn}>
              <h3>Features</h3>
            </div>
            <div className={styles.planColumn}>
              <span className={styles.planTag}>All the bells and whistles</span>
              <h3>Comprehensive</h3>
              <button className={styles.moreInfoButton}>More info</button>
            </div>
            <div className={styles.planColumn}>
              <span className={styles.planTag}>Some-frills</span>
              <h3>Third Party, Fire & Theft</h3>
              <button className={styles.moreInfoButton}>More info</button>
            </div>
            <div className={styles.planColumn}>
              <span className={styles.planTag}>No-frills</span>
              <h3>Third Party Only</h3>
              <button className={styles.moreInfoButton}>More info</button>
            </div>
          </div>
          <div className={styles.tableBody}>
            <div className={styles.tableRow}>
              <div className={styles.featureColumn}>Theft of your car</div>
              <div className={styles.planColumn}>
                <span className={styles.checkmark}>✓</span>
              </div>
              <div className={styles.planColumn}>
                <span className={styles.checkmark}>✓</span>
              </div>
              <div className={styles.planColumn}>
                <span className={styles.cross}>✕</span>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.featureColumn}>
                Accidental damage to windscreens and windows
              </div>
              <div className={styles.planColumn}>
                <span className={styles.checkmark}>✓</span>
              </div>
              <div className={styles.planColumn}>
                <span className={styles.cross}>✕</span>
              </div>
              <div className={styles.planColumn}>
                <span className={styles.cross}>✕</span>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.featureColumn}>
                Fire damage to your car
              </div>
              <div className={styles.planColumn}>
                <span className={styles.checkmark}>✓</span>
              </div>
              <div className={styles.planColumn}>
                <span className={styles.checkmark}>✓</span>
              </div>
              <div className={styles.planColumn}>
                <span className={styles.cross}>✕</span>
              </div>
            </div>
            {/* Add more rows as needed */}
          </div>
          <div className={styles.tableFooter}>
            <button className={styles.downloadButton}>
              Download (PDF) Plain language policy wording
            </button>
            <button className={styles.quoteButton}>Car insurance quote</button>
          </div>
        </div>
      </section>
      <Footer />
      <ChatPopup />
    </div>
  );
};

export default Home;
