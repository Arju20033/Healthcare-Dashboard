// src/components/ActivityFeed.jsx
import React from 'react';
import '../styles/ActivityFeed.css';

export default function ActivityFeed() {
  // More varied data with 2-3 bars per day of different heights
  const activityData = [
    { 
      day: 'Mon', 
      bars: [
        { height: 55, color: '#22D1EE' },
        { height: 35, color: '#5B72EE' }
      ] 
    },
    { 
      day: 'Tue', 
      bars: [
        { height: 65, color: '#22D1EE' },
        { height: 25, color: '#5B72EE' },
        { height: 40, color: '#E0E6F8' }
      ] 
    },
    { 
      day: 'Wed', 
      bars: [
        { height: 30, color: '#22D1EE' },
        { height: 50, color: '#5B72EE' }
      ] 
    },
    { 
      day: 'Thu', 
      bars: [
        { height: 60, color: '#22D1EE' },
        { height: 25, color: '#5B72EE' },
        { height: 40, color: '#E0E6F8' }
      ] 
    },
    { 
      day: 'Fri', 
      bars: [
        { height: 45, color: '#22D1EE' },
        { height: 65, color: '#5B72EE' }
      ] 
    },
    { 
      day: 'Sat', 
      bars: [
        { height: 55, color: '#22D1EE' },
        { height: 35, color: '#5B72EE' },
        { height: 20, color: '#E0E6F8' }
      ] 
    },
    { 
      day: 'Sun', 
      bars: [
        { height: 25, color: '#22D1EE' },
        { height: 45, color: '#5B72EE' },
        { height: 15, color: '#E0E6F8' }
      ] 
    }
  ];

  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
      </div>
      <div className="activity-chart">
        {activityData.map((dayData, index) => (
          <div className="day-group" key={index}>
            <div className="bars-container">
              {dayData.bars.map((bar, barIndex) => (
                <div 
                  key={barIndex}
                  className="bar"
                  style={{ 
                    height: `${bar.height}px`,
                    backgroundColor: bar.color
                  }}
                ></div>
              ))}
            </div>
            <div className="day-label">{dayData.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
