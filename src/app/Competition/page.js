// components/Competition.js
"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Competition = () => {
  const [competitions, setCompetitions] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    // In a real app, this would be API calls
    setCompetitions([
      {
        id: 1,
        title: "Mega Bridge Challenge",
        description: "Design an innovative bridge structure that maximizes strength while minimizing materials.",
        prize: "$25,000",
        deadline: "March 20, 2025",
        submissions: 137,
        maxTeamSize: 4,
        categories: ["Structural Design", "Material Efficiency"],
        difficulty: "Advanced",
        image: "/competition-bridge.png",
        phases: [
          { name: "Registration", date: "Feb 1 - Mar 1", complete: true },
          { name: "Submission", date: "Mar 1 - Mar 20", complete: false, current: true },
          { name: "Judging", date: "Mar 21 - Mar 25", complete: false },
          { name: "Awards", date: "Mar 26", complete: false }
        ]
      },
      {
        id: 2,
        title: "Sustainable Urban Housing",
        description: "Create a housing solution for 500 residents with net-zero energy consumption and minimal environmental impact.",
        prize: "$20,000",
        deadline: "March 18, 2025",
        submissions: 92,
        maxTeamSize: 5,
        categories: ["Sustainability", "Urban Planning"],
        difficulty: "Intermediate",
        image: "/competition-housing.png",
        phases: [
          { name: "Registration", date: "Feb 5 - Mar 5", complete: true },
          { name: "Submission", date: "Mar 5 - Mar 18", complete: false, current: true },
          { name: "Judging", date: "Mar 19 - Mar 22", complete: false },
          { name: "Awards", date: "Mar 23", complete: false }
        ]
      },
      {
        id: 3,
        title: "Disaster-Resistant Infrastructure",
        description: "Design infrastructure systems that can withstand multiple natural disasters while maintaining critical functions.",
        prize: "$30,000",
        deadline: "March 25, 2025",
        submissions: 64,
        maxTeamSize: 6,
        categories: ["Resilience Engineering", "Critical Infrastructure"],
        difficulty: "Expert",
        image: "/competition-disaster.png",
        phases: [
          { name: "Registration", date: "Feb 10 - Mar 10", complete: true },
          { name: "Submission", date: "Mar 10 - Mar 25", complete: false, current: true },
          { name: "Judging", date: "Mar 26 - Mar 29", complete: false },
          { name: "Awards", date: "Mar 30", complete: false }
        ]
      }
    ]);
    
    setLeaderboard([
      { id: 1, team: "QuantumStructs", university: "MIT", score: 96.5, rank: 1 },
      { id: 2, team: "FutureBuild", university: "Stanford", score: 93.8, rank: 2 },
      { id: 3, team: "NeoCivil", university: "Tokyo Institute of Technology", score: 92.4, rank: 3 },
      { id: 4, team: "GreenFrame", university: "ETH Zurich", score: 91.7, rank: 4 },
      { id: 5, team: "TerraForm", university: "UC Berkeley", score: 89.3, rank: 5 }
    ]);
  }, []);
  
  const openCompetitionModal = (competition) => {
    setSelectedCompetition(competition);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className={styles.competitionContainer}>
      <Navbar/>
      <div className={styles.holographicHeader}>
        <h1>COMPETITIONS</h1>
        <div className={styles.gridPatterns}></div>
        <p className={styles.subtitle}>Push the Boundaries of Civil Engineering</p>
      </div>
      
      <div className={styles.mainSection}>
        <div className={styles.competitionCards}>
          {competitions.map((competition) => (
            <div className={styles.compCard} key={competition.id}>
              <div className={styles.cardHeader}>
                <div className={styles.cardImage} style={{ backgroundImage: `url(${competition.image})` }}></div>
                <div className={styles.headerOverlay}></div>
                <h3>{competition.title}</h3>
              </div>
              
              <div className={styles.cardContent}>
                <p className={styles.description}>{competition.description}</p>
                
                <div className={styles.cardDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Prize:</span>
                    <span className={styles.value}>{competition.prize}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Deadline:</span>
                    <span className={styles.value}>{competition.deadline}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Submissions:</span>
                    <span className={styles.value}>{competition.submissions}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Team:</span>
                    <span className={styles.value}>Up to {competition.maxTeamSize}</span>
                  </div>
                </div>
                
                <div className={styles.categories}>
                  {competition.categories.map((category, idx) => (
                    <span key={idx} className={styles.category}>{category}</span>
                  ))}
                  <span className={`${styles.difficulty} ${styles[competition.difficulty.toLowerCase()]}`}>
                    {competition.difficulty}
                  </span>
                </div>
                
                <div className={styles.progressTracker}>
                  {competition.phases.map((phase, idx) => (
                    <div 
                      key={idx} 
                      className={`${styles.phase} ${phase.complete ? styles.complete : ''} ${phase.current ? styles.current : ''}`}
                    >
                      <div className={styles.phaseNode}></div>
                      <div className={styles.phaseInfo}>
                        <span className={styles.phaseName}>{phase.name}</span>
                        <span className={styles.phaseDate}>{phase.date}</span>
                      </div>
                      {idx < competition.phases.length - 1 && <div className={styles.phaseConnector}></div>}
                    </div>
                  ))}
                </div>
                
                <div className={styles.cardActions}>
                  <button 
                    className={styles.detailsButton}
                    onClick={() => openCompetitionModal(competition)}
                  >
                    VIEW DETAILS
                  </button>
                  <button className={styles.enterButton}>ENTER COMPETITION</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.sideSection}>
          <div className={styles.leaderboardSection}>
            <div className={styles.leaderboardHeader}>
              <h3>LEADERBOARD</h3>
              <div className={styles.leaderboardSubtitle}>Top Teams Overall</div>
            </div>
            
            <div className={styles.leaderboardTable}>
              <div className={styles.tableHeader}>
                <div className={styles.rankColumn}>Rank</div>
                <div className={styles.teamColumn}>Team</div>
                <div className={styles.uniColumn}>University</div>
                <div className={styles.scoreColumn}>Score</div>
              </div>
              
              {leaderboard.map((team) => (
                <div className={styles.tableRow} key={team.id}>
                  <div className={styles.rankColumn}>
                    <span className={styles.rankBadge}>{team.rank}</span>
                  </div>
                  <div className={styles.teamColumn}>{team.team}</div>
                  <div className={styles.uniColumn}>{team.university}</div>
                  <div className={styles.scoreColumn}>{team.score}</div>
                </div>
              ))}
            </div>
            
            <button className={styles.viewAllButton}>VIEW FULL LEADERBOARD</button>
          </div>
          
          <div className={styles.countdownSection}>
            <h3>NEXT DEADLINE</h3>
            <div className={styles.countdownTitle}>Sustainable Urban Housing</div>
            
            <div className={styles.countdownTimer}>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>05</div>
                <div className={styles.timeLabel}>Days</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>12</div>
                <div className={styles.timeLabel}>Hours</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>45</div>
                <div className={styles.timeLabel}>Minutes</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>30</div>
                <div className={styles.timeLabel}>Seconds</div>
              </div>
            </div>
          </div>
          
          <div className={styles.resourcesSection}>
            <h3>RESOURCES</h3>
            <ul className={styles.resourcesList}>
              <li>
                <div className={styles.resourceIcon}></div>
                <span>Competition Rules & Guidelines</span>
              </li>
              <li>
                <div className={styles.resourceIcon}></div>
                <span>Submission Requirements</span>
              </li>
              <li>
                <div className={styles.resourceIcon}></div>
                <span>Judging Criteria</span>
              </li>
              <li>
                <div className={styles.resourceIcon}></div>
                <span>Technical Resources</span>
              </li>
              <li>
                <div className={styles.resourceIcon}></div>
                <span>FAQ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {isModalOpen && selectedCompetition && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <div className={styles.modalHeader} style={{ backgroundImage: `url(${selectedCompetition.image})` }}>
              <div className={styles.modalHeaderOverlay}></div>
              <h2>{selectedCompetition.title}</h2>
            </div>
            <div className={styles.modalContent}>
              <p className={styles.modalDescription}>{selectedCompetition.description}</p>
              
              <div className={styles.modalSection}>
                <h4>COMPETITION DETAILS</h4>
                <div className={styles.modalDetails}>
                  <div className={styles.modalDetailItem}>
                    <span className={styles.modalLabel}>Prize:</span>
                    <span className={styles.modalValue}>{selectedCompetition.prize}</span>
                  </div>
                  <div className={styles.modalDetailItem}>
                    <span className={styles.modalLabel}>Deadline:</span>
                    <span className={styles.modalValue}>{selectedCompetition.deadline}</span>
                  </div>
                  <div className={styles.modalDetailItem}>
                    <span className={styles.modalLabel}>Current Submissions:</span>
                    <span className={styles.modalValue}>{selectedCompetition.submissions}</span>
                  </div>
                  <div className={styles.modalDetailItem}>
                    <span className={styles.modalLabel}>Team Size:</span>
                    <span className={styles.modalValue}>Up to {selectedCompetition.maxTeamSize} members</span>
                  </div>
                  <div className={styles.modalDetailItem}>
                    <span className={styles.modalLabel}>Categories:</span>
                    <span className={styles.modalValue}>{selectedCompetition.categories.join(', ')}</span>
                  </div>
                  <div className={styles.modalDetailItem}>
                    <span className={styles.modalLabel}>Difficulty Level:</span>
                    <span className={`${styles.modalValue} ${styles[selectedCompetition.difficulty.toLowerCase()]}`}>
                      {selectedCompetition.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className={styles.modalSection}>
                <h4>JUDGING CRITERIA</h4>
                <ul className={styles.criteriaList}>
                  <li>
                    <span className={styles.criteriaName}>Innovation (30%)</span>
                    <p>Uniqueness and originality of the solution</p>
                  </li>
                  <li>
                    <span className={styles.criteriaName}>Feasibility (25%)</span>
                    <p>Practical implementation and economic viability</p>
                  </li>
                  <li>
                    <span className={styles.criteriaName}>Technical Excellence (25%)</span>
                    <p>Engineering quality and technical implementation</p>
                  </li>
                  <li>
                    <span className={styles.criteriaName}>Sustainability (20%)</span>
                    <p>Environmental impact and resource efficiency</p>
                  </li>
                </ul>
              </div>
              
              <div className={styles.modalButtons}>
                <button className={styles.modalEnterButton}>ENTER COMPETITION</button>
                <button className={styles.modalGuidelinesButton}>VIEW FULL GUIDELINES</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Competition;