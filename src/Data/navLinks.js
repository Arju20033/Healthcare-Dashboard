
// src/data/navLinks.js
import { Home, History, Calendar, Clipboard, PieChart, MessageCircle, LifeBuoy, Settings } from 'lucide-react';
import "../styles/navLink.css"; // Ensure this path is correct based on your project structure
const navLinks = [
  { name: 'Dashboard', icon: <Home size={18} /> },
  { name: 'History', icon: <History size={18} /> },
  { name: 'Calendar', icon: <Calendar size={18} /> },
  { name: 'Appointments', icon: <Clipboard size={18} /> },
  { name: 'Statistics', icon: <PieChart size={18} /> },
  { name: 'Tests', icon: <Clipboard size={18} /> },
  { name: 'Chat', icon: <MessageCircle size={18} /> },
  { name: 'Support', icon: <LifeBuoy size={18} /> },
  { name: 'Setting', icon: <Settings size={18} /> },
];

export default navLinks;