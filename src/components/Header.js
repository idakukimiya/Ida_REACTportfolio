import React from 'react';
import { Link } from "react-router-dom"
import NavTab from "../NavTab";

function Header() {

  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
        <Link to="/">Ida Kukimiya</Link>
        </h1>
      </div>
      <NavTab></NavTab>
    </header>
  );
}

export default Header;