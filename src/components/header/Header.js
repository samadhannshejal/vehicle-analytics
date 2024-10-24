import React from "react";
import "./header.css";

const Header = ({ onFileUpload }) => {
  return (
    <header className="header">
      <h1 className="header-title">Vehicle Dashboard</h1>
      <h2 className="upload-title">Upload Excel File</h2>
      <input type="file" onChange={onFileUpload} className="upload-input" />
    </header>
  );
};

export default Header;
