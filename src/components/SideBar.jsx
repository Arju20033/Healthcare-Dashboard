
import React from 'react';
import { LayoutGrid, Clock, Calendar, FileText, BarChart2, MessageSquare, HeadphonesIcon, Settings } from 'lucide-react';
import '../styles/Sidebar.css';

export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <span className="health">Health</span>
        <span className="care">care.</span>
      </div>
      
      <div className="sidebar-content">
        <h3 className="sidebar-title">GENERAL</h3>
        <ul className="nav-list">
          <li className="nav-item active">
            <LayoutGrid className="icon" size={20} />
            <span className="text">Dashboard</span>
          </li>
          <li className="nav-item">
            <Clock className="icon" size={20} />
            <span className="text">History</span>
          </li>
          <li className="nav-item">
            <Calendar className="icon" size={20} />
            <span className="text">Calendar</span>
          </li>
          <li className="nav-item">
            <FileText className="icon" size={20} />
            <span className="text">Appointments</span>
          </li>
          <li className="nav-item">
            <BarChart2 className="icon" size={20} />
            <span className="text">Statistics</span>
          </li>
        </ul>
        
        <h3 className="sidebar-title tools-title">TOOLS</h3>
        <ul className="nav-list">
          <li className="nav-item">
            <MessageSquare className="icon" size={20} />
            <span className="text">Chat</span>
          </li>
          <li className="nav-item">
            <HeadphonesIcon className="icon" size={20} />
            <span className="text">Support</span>
          </li>
        </ul>
      </div>
      
      <div className="sidebar-footer">
        <li className="nav-item">
          <Settings className="icon" size={20} />
          <span className="text">Setting</span>
        </li>
      </div>
    </aside>
  );
}
