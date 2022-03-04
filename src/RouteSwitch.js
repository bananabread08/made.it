import React from 'react';
import './components/styles/App.css';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
} from './components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './components/hooks/useDarkMode';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';

function RouteSwitch() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default RouteSwitch;
