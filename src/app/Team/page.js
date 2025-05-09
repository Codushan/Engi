// components/OurTeam.js
"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurTeam = () => {
  const [activeTeam, setActiveTeam] = useState('core');
  const [expandedMember, setExpandedMember] = useState(null);
  
  const teams = {
    core: [
      {
        id: 1,
        name: "Dr. Eliza Chen",
        title: "Festival Director",
        background: "Ph.D. in Structural Engineering, MIT",
        image: "/team/eliza-chen.png",
        description: "Pioneering researcher in adaptive structures and materials with over 20 years of experience leading innovative engineering initiatives.",
        specialties: ["Structural Engineering", "Project Management", "Innovation Strategy"],
        achievements: [
          "Led the design of Singapore's self-healing infrastructure system",
          "Published over 50 research papers on next-generation materials",
          "Recipient of the Global Engineering Excellence Award 2023"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/elizachen",
          twitter: "https://twitter.com/drelizachen",
          website: "https://elizachen.com"
        }
      },
      {
        id: 2,
        name: "Marcus Wellington",
        title: "Technical Director",
        background: "MSc Advanced Computational Methods, Imperial College London",
        image: "/team/marcus-wellington.png",
        description: "Computational design specialist with expertise in generative algorithms and simulation technologies for civil infrastructure.",
        specialties: ["Computational Design", "AI for Engineering", "Digital Fabrication"],
        achievements: [
          "Developed award-winning bridge optimization algorithm",
          "Former lead engineer at Arup's Advanced Digital Engineering Group",
          "Creator of CivilGen open-source engineering toolkit"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/marcuswellington",
          github: "https://github.com/mwellington"
        }
      },
      {
        id: 3,
        name: "Sofia Rodriguez",
        title: "Competition Lead",
        background: "MSc Sustainable Urban Development, UC Berkeley",
        image: "/team/sofia-rodriguez.png",
        description: "Internationally recognized expert in sustainable urban systems with a focus on climate-resilient infrastructure development.",
        specialties: ["Urban Planning", "Sustainability", "Competition Design"],
        achievements: [
          "Designed Mexico City's award-winning flood resilience strategy",
          "Former UN consultant for sustainable infrastructure",
          "Speaker at World Engineering Forum 2024"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/sofiarodriguez",
          twitter: "https://twitter.com/sofiarodriguez"
        }
      },
      {
        id: 4,
        name: "Raj Patel",
        title: "Innovation Officer",
        background: "MBA & MEng Civil Engineering, Stanford University",
        image: "/team/raj-patel.png",
        description: "Engineer-entrepreneur bridging technical innovation and business strategy in the built environment sector.",
        specialties: ["Technology Transfer", "Startups", "Engineering Innovation"],
        achievements: [
          "Founded 3 successful engineertech startups",
          "Developed patented concrete recycling technology",
          "Advisor to multiple government innovation programs"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/rajpatel",
          twitter: "https://twitter.com/rajpatel"
        }
      }
    ],
    judges: [
      {
        id: 5,
        name: "Prof. Hiroshi Tanaka",
        title: "Chief Judge",
        background: "Ph.D. Earthquake Engineering, University of Tokyo",
        image: "/team/hiroshi-tanaka.png",
        description: "World-renowned expert in earthquake-resistant structures and resilient infrastructure design.",
        specialties: ["Seismic Engineering", "Resilience Design", "Infrastructure Systems"],
        achievements: [
          "Designer of Tokyo's resilient infrastructure network",
          "Author of 'Future-Proof Engineering' standard textbook",
          "Japan Engineering Academy lifetime achievement award"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/hiroshitanaka",
          google: "https://scholar.google.com/hiroshistanaka"
        }
      },
      {
        id: 6,
        name: "Amara Okafor",
        title: "Sustainability Judge",
        background: "Ph.D. Environmental Engineering, Cambridge University",
        image: "/team/amara-okafor.png",
        description: "Leading authority on low-carbon infrastructure and circular economy principles in construction.",
        specialties: ["Sustainable Materials", "Carbon Neutral Design", "Circular Economy"],
        achievements: [
          "Chief architect of Africa's Green Infrastructure Initiative",
          "Developed carbon-negative concrete alternative",
          "UN Climate Action Award recipient"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/amaraokafor",
          twitter: "https://twitter.com/amaraokafor"
        }
      },
      {
        id: 7,
        name: "David Zhang",
        title: "Innovation Judge",
        background: "MSc Civil Engineering, Tsinghua University",
        image: "/team/david-zhang.png",
        description: "Technology entrepreneur specializing in construction robotics and automated building systems.",
        specialties: ["Construction Robotics", "Automated Systems", "Digital Fabrication"],
        achievements: [
          "Founder of BuildBot autonomous construction robotics",
          "Pioneered AI-optimized structural design system",
          "Holds 15+ patents in construction technology"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/davidzhang",
          twitter: "https://twitter.com/davidzhang"
        }
      }
    ],
    advisors: [
      {
        id: 8,
        name: "Dr. Nadia Ibrahim",
        title: "Academic Advisor",
        background: "Ph.D. in Engineering Education, Georgia Tech",
        image: "/team/nadia-ibrahim.png",
        description: "Specializes in transformative engineering education and interdisciplinary curriculum development.",
        specialties: ["Engineering Education", "Curriculum Development", "STEM Outreach"],
        achievements: [
          "Developed award-winning engineering education program",
          "Advisor to multiple national STEM initiatives",
          "Author of 'Rethinking Engineering Education for the 21st Century'"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/nadiaibrahim",
          twitter: "https://twitter.com/nadiaibrahim"
        }
      },
      {
        id: 9,
        name: "Carlos Mendez",
        title: "Industry Advisor",
        background: "MSc Civil Engineering, Universidad Nacional Autónoma de México",
        image: "/team/carlos-mendez.png",
        description: "Infrastructure development expert with extensive experience in public-private partnerships for major projects.",
        specialties: ["Infrastructure Development", "Public-Private Partnerships", "Project Finance"],
        achievements: [
          "Led development of Mexico City's new transit system",
          "Former infrastructure advisor to Latin American Development Bank",
          "Implemented innovative financing for multiple mega-projects"
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/carlosmendez"
        }
      }
    ]
  };
  
  const handleTeamChange = (team) => {
    setActiveTeam(team);
    setExpandedMember(null);
  };
  
  const toggleMemberExpansion = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };
  
  return (
    <div className={styles.teamContainer}>
      <Navbar/>
      <div className={styles.holographicHeader}>
        <h1>OUR TEAM</h1>
        <div className={styles.gridPatterns}></div>
        <p className={styles.subtitle}>The Innovators Behind CIVFORGE 2025</p>
      </div>
      
      <div className={styles.teamNav}>
        <button 
          className={`${styles.teamNavButton} ${activeTeam === 'core' ? styles.active : ''}`}
          onClick={() => handleTeamChange('core')}
        >
          <div className={styles.buttonIcon}></div>
          <span>Core Team</span>
        </button>
        <button 
          className={`${styles.teamNavButton} ${activeTeam === 'judges' ? styles.active : ''}`}
          onClick={() => handleTeamChange('judges')}
        >
          <div className={styles.buttonIcon}></div>
          <span>Judges</span>
        </button>
        <button 
          className={`${styles.teamNavButton} ${activeTeam === 'advisors' ? styles.active : ''}`}
          onClick={() => handleTeamChange('advisors')}
        >
          <div className={styles.buttonIcon}></div>
          <span>Advisors</span>
        </button>
      </div>
      
      <div className={styles.teamSection}>
        <div className={styles.networkGraph}>
          {/* Decorative network graph showing team connections */}
          <div className={styles.networkNode + ' ' + styles.coreNode}></div>
          {activeTeam === 'core' && (
            <>
              <div className={styles.networkNode + ' ' + styles.node1}></div>
              <div className={styles.networkNode + ' ' + styles.node2}></div>
              <div className={styles.networkNode + ' ' + styles.node3}></div>
              <div className={styles.networkNode + ' ' + styles.node4}></div>
              <div className={styles.networkEdge + ' ' + styles.edge1}></div>
              <div className={styles.networkEdge + ' ' + styles.edge2}></div>
              <div className={styles.networkEdge + ' ' + styles.edge3}></div>
              <div className={styles.networkEdge + ' ' + styles.edge4}></div>
            </>
          )}
          {activeTeam === 'judges' && (
            <>
              <div className={styles.networkNode + ' ' + styles.node5}></div>
              <div className={styles.networkNode + ' ' + styles.node6}></div>
              <div className={styles.networkNode + ' ' + styles.node7}></div>
              <div className={styles.networkEdge + ' ' + styles.edge5}></div>
              <div className={styles.networkEdge + ' ' + styles.edge6}></div>
              <div className={styles.networkEdge + ' ' + styles.edge7}></div>
            </>
          )}
          {activeTeam === 'advisors' && (
            <>
              <div className={styles.networkNode + ' ' + styles.node8}></div>
              <div className={styles.networkNode + ' ' + styles.node9}></div>
              <div className={styles.networkEdge + ' ' + styles.edge8}></div>
              <div className={styles.networkEdge + ' ' + styles.edge9}></div>
            </>
          )}
        </div>
        
        <div className={styles.teamMembers}>
          {teams[activeTeam].map((member) => (
            <div 
              key={member.id} 
              className={`${styles.memberCard} ${expandedMember === member.id ? styles.expanded : ''}`}
              onClick={() => toggleMemberExpansion(member.id)}
            >
              <div className={styles.memberBasic}>
                <div className={styles.memberImageContainer}>
                  <div 
                    className={styles.memberImage} 
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className={styles.holographicRing}></div>
                </div>
                
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <div className={styles.memberTitle}>{member.title}</div>
                  <div className={styles.memberBackground}>{member.background}</div>
                  <div className={styles.expandPrompt}>
                    {expandedMember === member.id ? 'Show Less' : 'Show More'}
                    <div className={`${styles.expandIcon} ${expandedMember === member.id ? styles.rotated : ''}`}></div>
                  </div>
                </div>
              </div>
              
              {expandedMember === member.id && (
                <div className={styles.memberExpanded}>
                  <p className={styles.memberDescription}>{member.description}</p>
                  
                  <div className={styles.memberSection}>
                    <h4>SPECIALTIES</h4>
                    <div className={styles.specialtiesList}>
                      {member.specialties.map((specialty, index) => (
                        <span key={index} className={styles.specialty}>{specialty}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.memberSection}>
                    <h4>KEY ACHIEVEMENTS</h4>
                    <ul className={styles.achievementsList}>
                      {member.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.socialLinks}>
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} className={styles.socialLink + ' ' + styles.linkedin}></a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className={styles.socialLink + ' ' + styles.twitter}></a>
                    )}
                    {member.socialLinks.github && (
                      <a href={member.socialLinks.github} className={styles.socialLink + ' ' + styles.github}></a>
                    )}
                    {member.socialLinks.google && (
                      <a href={member.socialLinks.google} className={styles.socialLink + ' ' + styles.google}></a>
                    )}
                    {member.socialLinks.website && (
                      <a href={member.socialLinks.website} className={styles.socialLink + ' ' + styles.website}></a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.teamFooter}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>42</div>
            <div className={styles.statLabel}>Team Members</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>15</div>
            <div className={styles.statLabel}>Countries</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>300+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>28</div>
            <div className={styles.statLabel}>Institutions</div>
          </div>
        </div>
        
        <div className={styles.joinTeamSection}>
          <h3>Want to Join Our Team?</h3>
          <p>We're always looking for passionate engineers and innovators to help shape the future of civil engineering.</p>
          <button className={styles.joinTeamButton}>EXPLORE OPPORTUNITIES</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OurTeam;