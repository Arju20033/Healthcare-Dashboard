import React from 'react';
import '../styles/Anatomysection.css';
import { FaLungs, FaTooth } from 'react-icons/fa';
import { GiBrokenBone } from 'react-icons/gi';

export default function Anatomysection() {
  return (
    <section className="anatomy-section">
      <img src="" alt="Anatomy" className="anatomy-image" />
      <div className="health-indicators">
        <div className="indicator healthy">
          <FaLungs className="indicator-icon" />
          Healthy Heart
        </div>
        <div className="indicator warning">
          <FaLungs className="indicator-icon" />
          Lungs Issue
        </div>
        <div className="indicator healthy">
          <FaTooth className="indicator-icon" />
          Teeth
        </div>
        <div className="indicator healthy">
          <GiBrokenBone className="indicator-icon" />
          Bone
        </div>
      </div>
    </section>
  );
}
