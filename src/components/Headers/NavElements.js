import React, { useState } from 'react';
import { MessageOutlined ,MenuOutlined} from '@ant-design/icons';
import logo from '../../assets/images/crimp.jpg'
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar p-2" >
      <div className="logo">
        <img src={logo} height={60}/>
      </div>
      <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li>  <Link to="/about">About</Link></li>
        <li>  <Link to="/gallery">Gallery</Link></li>
        <li>  <Link to="/contact">Contact Us</Link></li>
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
