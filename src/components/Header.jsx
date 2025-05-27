
// src/components/Header.jsx
import React from 'react';
import { Bell, Search, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        <Bell className="notification-icon" size={20} />
      </div>
      
      <div className="header-right">
        <div className="user-avatar">
          <img src="/logo512.png" alt="User" className="avatar" />
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
}
