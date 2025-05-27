import React from 'react';
import '../styles/Anatomysection.css';
// import { FaLungs, FaTooth } from 'react-icons/fa';
// import { GiBrokenBone } from 'react-icons/gi';

export default function Anatomysection() {
  return (
    <section className="anatomy-section">
      <img src="" alt="Anatomy" className="anatomy-image" />
      <div className="health-indicators">
        <div className="indicator healthy">
          ❤️ Healthy Heart
        </div>
        <div className="indicator warning">
          🫁 Lungs Issue
        </div>
        <div className="indicator healthy">
          🦷 Teeth
        </div>
        <div className="indicator healthy">
          🦴 Bone
        </div>
      </div>
    </section>
  );
}
