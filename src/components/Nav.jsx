import React, { useEffect, useState } from 'react';
import './css/Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        console.log('success');
      });
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="Netflix Logo"
      />
      <h3 style={{color: '#E50914', marginLeft: '40%'}}>Build with ♥ by Naor Bsh</h3>
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png"
        alt="Avatar Icon"
      />
    </div>
  );
}

export default Nav;
