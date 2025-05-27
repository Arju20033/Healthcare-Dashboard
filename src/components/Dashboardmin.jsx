
import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Heart, Smile, Bone as BoneIcon } from 'lucide-react';
// import { IoMdCube, IoIosSearch } from 'react-icons/io';
import '../styles/Dashboardmin.css';
import ActivityFeed from './ActivityFeed';

export default function Dashboardmin() {
  // Sample data for the calendar
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = ['25', '26', '27', '28', '29', '30', '31'];
  
  const timeSlots = [
    { time: '09:00', display: '09:00' },
    { time: '10:00', display: '10:00' },
    { time: '11:00', display: '11:00' },
    { time: '12:00', display: '12:00' },
    { time: '13:00', display: '13:00' },
    { time: '14:00', display: '14:00' },
    { time: '15:00', display: '15:00' },
    { time: '16:00', display: '16:00' }
  ];
  
  // Sample schedule data
  const schedule = {
    '25': { '10:00': true, '11:00': true, '12:00': true },
    '26': { '09:00': true, '10:00': true },
    '27': { '12:00': true, '13:00': true },
    '28': { '10:00': true, '11:00': true },
    '29': { '14:00': true, '15:00': true, '16:00': true },
    '30': { '12:00': true, '14:00': true, '15:00': true },
    '31': { '09:00': true, '11:00': true, '13:00': true }
  };

  return (
    <div className="dashboard-main">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <div className="dashboard-content">
        <div className="left-column">
          {/* Body model section */}
          <div className="body-model-section">
            <div className="body-model-container">
              <div className="model-3d-wrapper">
                <img src="/image6.jpeg" alt="3D Human Anatomy" className="body-model-3d" />
                <div className="model-controls">
                  <button className="rotate-btn">🔄</button>
                  <button className="zoom-btn">🔍</button>
                </div>
              </div>
              <div className="health-tag heart">❤️ Healthy Heart</div>
              <div className="health-tag leg">🦵 Healthy Leg</div>
            </div>
            
            {/* Health status bars */}
            <div className="health-status-section">
              <div className="health-status-item">
                <div className="health-status-header">
                  <div className="health-status-title">
                    <Heart size={18} className="health-status-icon" />
                    Lungs
                  </div>
                  <div className="health-status-date">Date: 26 Oct 2021</div>
                </div>
                <div className="progress-bar lungs"></div>
              </div>
              
              <div className="health-status-item">
                <div className="health-status-header">
                  <div className="health-status-title">
                    <Smile size={18} className="health-status-icon" />
                    Teeth
                  </div>
                  <div className="health-status-date">Date: 26 Oct 2021</div>
                </div>
                <div className="progress-bar teeth"></div>
              </div>
              
              <div className="health-status-item">
                <div className="health-status-header">
                  <div className="health-status-title">
                    <BoneIcon size={18} className="health-status-icon" />
                    Bone
                  </div>
                  <div className="health-status-date">Date: 26 Oct 2021</div>
                </div>
                <div className="progress-bar bone"></div>
              </div>
            </div>
          </div>
          
          <ActivityFeed />
        </div>
        
        <div className="right-column">
          <div className="calendar-section">
            <div className="calendar-header">
              {weekDays.map((day, index) => (
                <div key={`day-${index}`} className={`day-column ${index === 3 ? 'today' : ''}`}>
                  <div className="day-name">{day}</div>
                  <div className="day-date">{dates[index]}</div>
                </div>
              ))}
            </div>
            
            <div className="calendar-time-grid">
              {timeSlots.map((slot, timeIndex) => (
                <div key={`time-row-${timeIndex}`} className="time-row">
                  {dates.map((date, dateIndex) => {
                    const hasAppointment = schedule[date] && schedule[date][slot.time];
                    return (
                      <div 
                        key={`slot-${date}-${slot.time}`} 
                        className={`time-slot ${hasAppointment ? 'booked' : 'available'}`}
                      >
                        {hasAppointment ? slot.display : '—'}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            
            <div className="appointment-cards">
              <div className="appointment-card dentist">
                <div className="appointment-icon">🦷</div>
                <div className="appointment-details">
                  <h3 className="appointment-title">Dentist</h3>
                  <p className="appointment-time">09:00-11:00</p>
                  <p className="appointment-doctor">Dr. Cameron Williamson</p>
                </div>
              </div>
              
              <div className="appointment-card physio">
                <div className="appointment-icon">🧠</div>
                <div className="appointment-details">
                  <h3 className="appointment-title">Physiotherapy Appointment</h3>
                  <p className="appointment-time">11:00-12:00</p>
                  <p className="appointment-doctor">Dr. Kevin Dones</p>
                </div>
              </div>
            </div>
            
            <div className="upcoming-schedule">
              <h2 className="schedule-title">The Upcoming Schedule</h2>
              
              <div className="schedule-day">
                <h3 className="day-title">On Thursday</h3>
                <div className="schedule-cards">
                  <div className="schedule-card">
                    <div className="schedule-icon">💉</div>
                    <div className="schedule-info">
                      <h4 className="schedule-name">Health checkup complete</h4>
                      <p className="schedule-time">11:00 AM</p>
                    </div>
                  </div>
                  
                  <div className="schedule-card">
                    <div className="schedule-icon">👁️</div>
                    <div className="schedule-info">
                      <h4 className="schedule-name">Ophthalmologist</h4>
                      <p className="schedule-time">14:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="schedule-day">
                <h3 className="day-title">On Saturday</h3>
                <div className="schedule-cards">
                  <div className="schedule-card">
                    <div className="schedule-icon">❤️</div>
                    <div className="schedule-info">
                      <h4 className="schedule-name">Cardiologist</h4>
                      <p className="schedule-time">12:00 AM</p>
                    </div>
                  </div>
                  
                  <div className="schedule-card">
                    <div className="schedule-icon">🧠</div>
                    <div className="schedule-info">
                      <h4 className="schedule-name">Neurologist</h4>
                      <p className="schedule-time">16:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Remove the duplicate ChevronDown function definition that was here
