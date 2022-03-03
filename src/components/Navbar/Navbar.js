import React from 'react';
import { NavWrapper, Moon, Sun } from './Navbar.style';
function Navbar({ theme, toggleTheme }) {
  return (
    <NavWrapper>
      <h1>made.it</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </NavWrapper>
  );
}

export default Navbar;
