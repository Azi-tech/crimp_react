import React, { useState } from 'react';
import { MessageOutlined ,MenuOutlined} from '@ant-design/icons';
import logo from '../../assets/images/crimp.jpg'
// import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} height={60}/>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="menu-icon" onClick={toggleMobileMenu}>
      {/* <MenuOutline /> */}
      <MenuOutlined  style={{ fontSize: '16px', color: '#000000' }} />
      {/* <MenuOutline style={{ fontSize: '16px', color: '#08c' }} />; */}
        {/* <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i> */}
      </div>
    </nav>
  );
};

export default Navbar;
