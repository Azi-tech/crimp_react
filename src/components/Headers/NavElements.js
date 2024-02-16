import React, { useEffect, useState } from 'react';
import { MessageOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/images/crimp.jpg'
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobileDevice = width <= 768;



  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const ddd = () => {
    setIsMobile(!isMobile);
  };
  const menuList = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Gallery',
      path: '/gallery'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
  ]

  return (
    <nav className="navbar p-2" >
      <div className="logo">
        <img src={logo} height={60} />
      </div>
      <ul className={`nav-links ${isMobile && isMobileDevice? 'mobile shadow-lg p-3 mb-5 bg-body rounded' : ''}`}>
        {menuList.map((data,index) => {
          return (
            <li key={index}>
              <Link to={data.path} onClick={()=>{ddd()} }>{data.name}</Link>
              {isMobileDevice ? <hr /> : null}
            </li>
          )
        })}
      
      </ul>
      <div className="menu-icon" onClick={toggleMobileMenu}>
   
        <MenuOutlined style={{ fontSize: '16px', color: '#000000' }} />
    
      </div>
    </nav>
  );
};

export default Navbar;
