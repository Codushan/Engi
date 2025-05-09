import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LeaderboardWidget.module.css";

const LeaderboardWidget = () => {
  const [activeTab, setActiveTab] = useState("innovation");

  const leaderboards = {
    innovation: [
      { rank: 1, name: "TechnoStruct Technologies", score: 98, logo: "/logos/technostruct.svg" },
      { rank: 2, name: "GeoFuture Systems", score: 94, logo: "/logos/geofuture.svg" },
      { rank: 3, name: "SmartBridge Innovations", score: 91, logo: "/logos/smartbridge.svg" },
      { rank: 4, name: "Sustainable Structures Inc.", score: 87, logo: "/logos/sustainable.svg" },
      { rank: 5, name: "Urban Networks Ltd.", score: 83, logo: "/logos/urbannetworks.svg" }
    ],
    sustainability: [
      { rank: 1, name: "EcoFoundations Corp.", score: 97, logo: "/logos/ecofoundations.svg" },
      { rank: 2, name: "GreenBuild Solutions", score: 93, logo: "/logos/greenbuild.svg" },
      { rank: 3, name: "Sustainable Structures Inc.", score: 90, logo: "/logos/sustainable.svg" },
      { rank: 4, name: "ClimateFrame Technologies", score: 86, logo: "/logos/climateframe.svg" },
      { rank: 5, name: "TechnoStruct Technologies", score: 82, logo: "/logos/technostruct.svg" }
    ],
    student: [
      { rank: 1, name: "MIT Urban Planning Team", score: 95, logo: "/logos/mit.svg" },
      { rank: 2, name: "Stanford Civil Innovators", score: 92, logo: "/logos/stanford.svg" },
      { rank: 3, name: "ETH Zürich Engineering", score: 89, logo: "/logos/ethz.svg" },
      { rank: 4, name: "Tokyo Tech Structures Lab", score: 84, logo: "/logos/tokyotech.svg" },
      { rank: 5, name: "Imperial College London", score: 81, logo: "/logos/imperial.svg" }
    ]
  };

  return (
    <div className={styles.widgetContainer}>
      <h3 className={styles.heading}>Competition Leaderboards</h3>

      <div className={styles.tabContainer}>
        {["innovation", "sustainability", "student"].map((category) => (
          <button
            key={category}
            className={`${styles.tabButton} ${activeTab === category ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.leaderboardWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.leaderboardList}>
              {leaderboards[activeTab].map((item, index) => (
                <LeaderboardItem key={index} {...item} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const LeaderboardItem = ({ rank, name, score, logo }) => (
  <motion.div
    className={styles.leaderboardItem}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: rank * 0.1 }}
    whileHover={{ x: 5 }}
  >
    <div className={styles.rank}>{rank}</div>

    <div className={styles.logoContainer}>
      {/* Company logo placeholder */}
      <div className={styles.logoPlaceholder}></div>
    </div>

    <div className={styles.name}>{name}</div>

    <div className={styles.score}>{score}</div>
  </motion.div>
);

export default LeaderboardWidget;
