import React from 'react';
import '../styles/Dashboardoverview.css'; // Make sure this file exists or update/remove as needed

const stats = [
  { title: 'Total Patients', value: 1245 },
  { title: 'Appointments Today', value: 78 },
  { title: 'Pending Lab Tests', value: 34 },
  { title: 'New Registrations', value: 19 },
];

export default function Dashboardoverview() {
  return (
    <section className="dashboard-overview">
      <h2 className="section-title">Dashboard Overview</h2>
      <div className="overview-cards">
        {stats.map((stat, index) => (
          <div className="overview-card" key={index}>
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
