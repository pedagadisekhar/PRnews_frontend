import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoImage from "../../assets/images/logo-2.jpg";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="header">
      {/* Header Content */}
      <div className="header-content">
        {/* Logo */}
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>

        {/* Sidebar Toggle Button */}
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          ☰ {/* Icon for sidebar */}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/world">World</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/productupload">NEWS UPLOAD</Link></li>
        </ul>
      </div>

      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <div className="overlay" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default Header;
