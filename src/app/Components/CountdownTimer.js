// Components/CountdownTimer.js
import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className={styles.timerItem}>
        <span className={styles.timerDigit}>{timeLeft[interval]}</span>
        <span className={styles.timerLabel}>{interval}</span>
      </div>
    );
  });

  return (
    <div className={styles.countdownTimer}>
      {timerComponents.length ? timerComponents : <span>The event has started!</span>}
    </div>
  );
}