// components/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        // width: 128,
        // height: 24,
        backgroundColor: "#9cbcef",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#252b42",
          marginLeft: "100px",
          letterSpacing: 0.1,
        }}
      >
        <h3>🎓 Course.com</h3>
      </div>
    </header>
  );
};

export default Header;
