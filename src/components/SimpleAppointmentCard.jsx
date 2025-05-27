
// src/components/SimpleAppointmentCard.jsx
import React from 'react';
import { Calendar } from 'lucide-react';
import '../styles/SimpleAssignmentCard.css';

export default function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card-simple">
      <Calendar className="icon" />
      <div>
        <div className="title">{title}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
}