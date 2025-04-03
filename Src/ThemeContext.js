// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Define your light and dark theme colors
  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode ? {
      background: '#171726',
      text: '#FFFFFF',
      text2: '#1E90FF',
      bottomColor:'#3b3838',
      containerColor: '#222745'

      
    } : {
      background: '#FFFFFF',
      text: '#121212',
    
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);