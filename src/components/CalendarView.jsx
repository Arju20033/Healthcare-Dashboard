import React from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import '../styles/Calandar.css';

export default function CalendarView() {
  return (
    <section className="calendar-view">
      <div className="calendar-header">
        <h3>May 2025</h3>
        <Calendar className="calendar-icon" />
      </div>
      <div className="calendar-grid">
        <div className="day">
          <Clock className="time-icon" />
          09:00
        </div>
        <div className="day">
          <Clock className="time-icon" />
          11:00
        </div>
        <div className="day">
          <Clock className="time-icon" />
          13:00
        </div>
        <div className="day">
          <Clock className="time-icon" />
          15:00
        </div>
      </div>
      <div className="appointment-cards">
        <div className="appointment-card">
          <CheckCircle className="appointment-icon" />
          Dentist - 09:00
        </div>
        <div className="appointment-card">
          <CheckCircle className="appointment-icon" />
          Physiotherapy - 15:00
        </div>
      </div>
    </section>
  );
}