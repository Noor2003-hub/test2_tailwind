// components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header 
      style={{
        backgroundColor: '#9cbcef',
        padding: '20px',
        textAlign: 'left',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#252b42',
          marginLeft: '20px',
        }}
      >
        🎓 Course.com
      </div>
    </header>
  );
};

export default Header;
