import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import './menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { studentId } = useParams();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<div className="dashboard-layout">
      <button 
        className={`menu-toggle ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
      
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <button className="menu-toggle close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <h1>Menu</h1>
        <ul className="menu-list">
          <li><Link to={`/dashboard/academics/${studentId}`}>Academics</Link></li>
          <li><Link to={`/dashboard/web-development/${studentId}`}>Web Development</Link></li>
          <li><Link to={`/dashboard/pro-lang/${studentId}`}>Programming Languages</Link></li>
          <li><Link to={`/dashboard/other-tech/${studentId}`}>Other Technologies</Link></li>
        </ul>
      </nav>

      <main className={`content-area ${isOpen ? 'menu-open' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default Menu;