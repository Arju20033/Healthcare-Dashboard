
// src/components/UpcomingSchedule.jsx
import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';

export default function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="day-section">
        <h4>On Thursday</h4>
        <SimpleAppointmentCard title="Health checkup complete" time="10:00 AM" />
        <SimpleAppointmentCard title="Ophthalmologist" time="12:00 PM" />
      </div>
      <div className="day-section">
        <h4>On Saturday</h4>
        <SimpleAppointmentCard title="Cardiologist" time="09:00 AM" />
        <SimpleAppointmentCard title="Neurologist" time="01:00 PM" />
      </div>
    </section>
  );
}
