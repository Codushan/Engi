import React from 'react';
import styles from './StatCard.module.css';
import { FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

const StatCard = ({ 
  value, 
  label, 
  icon, 
  trend = null,  // Can be 'up', 'down', or null
  trendValue = null, 
  color = 'primary', // 'primary', 'secondary', 'accent', 'success', 'warning', 'danger'
  size = 'medium', // 'small', 'medium', 'large'
  animation = true
}) => {
  const [animated, setAnimated] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const numberValue = parseFloat((value ?? '0').toString().replace(/,/g, ''));

  React.useEffect(() => {
    if (!animation) {
      setCount(numberValue);
      return;
    }
    
    setAnimated(true);
    
    const duration = 1500; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(numberValue * progress);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [numberValue, animation]);
  
  const formatValue = (val) => {
    if (val >= 1000000) {
      return (val / 1000000).toFixed(1) + 'M';
    } else if (val >= 1000) {
      return (val / 1000).toFixed(1) + 'K';
    } else {
      return val.toString();
    }
  };
  
  const getTrendIcon = () => {
    if (trend === 'up') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      );
    } else if (trend === 'down') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      );
    }
    return null;
  };
  
  return (
    <div className={`${styles.card} ${styles[size]} ${styles[`color-${color}`]}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      
      <div className={styles.content}>
        <div className={styles.valueWrapper}>
          <h3 className={styles.value}>
            {animated ? formatValue(count) : value}
          </h3>
          
          {trend && (
            <div className={`${styles.trend} ${styles[trend]}`}>
              {getTrendIcon()}
              {trendValue && <span>{trendValue}</span>}
            </div>
          )}
        </div>
        
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <StatCard 
        value="12,500" 
        label="Total Users" 
        icon={<FaUsers />} 
        trend="up" 
        trendValue="+5%" 
        color="success" 
        size="medium" 
      />
      
      <StatCard 
        value="8,320" 
        label="Orders Completed" 
        icon={<FaShoppingCart />} 
        trend="down" 
        trendValue="-2%" 
        color="warning" 
        size="medium" 
      />

      <StatCard 
        value="$78,400" 
        label="Revenue Generated" 
        icon={<FaDollarSign />} 
        trend="up" 
        trendValue="+12%" 
        color="primary" 
        size="medium" 
      />
    </div>
  );
};

export default Dashboard;
