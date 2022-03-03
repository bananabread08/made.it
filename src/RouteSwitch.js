import React from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles, lightTheme, darkTheme } from './components/globalStyles';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './components/hooks/useDarkMode';
import Navbar from './components/Navbar/Navbar';
import App from './components/App';

function RouteSwitch() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default RouteSwitch;
