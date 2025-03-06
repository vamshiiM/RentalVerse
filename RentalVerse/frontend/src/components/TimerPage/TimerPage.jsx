import React, { useState, useEffect } from 'react';

const TimerPage = ({ name, model, totalPrice, startDate }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  // Simulate rental period for 30 days (30 * 24 * 60 * 60 seconds)
  const rentalPeriod = 30 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const endTime = new Date(startDate).getTime() + rentalPeriod;

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = endTime - currentTime;

      if (difference > 0) {
        setTimeLeft(difference);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="timer-page">
      <h1>Rental Timer</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Total Price:</strong> {totalPrice}</p>
      <p><strong>Date Purchased:</strong> {new Date(startDate).toLocaleDateString()}</p>
      <p><strong>Time Left:</strong> {formatTime(timeLeft)}</p>
    </div>
  );
};

export default TimerPage;