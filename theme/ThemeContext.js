
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const lightTheme = {
  background: '#FFFFFF',
  color: '#000000',
  heading: '#241353',
  text: '#000000',
  text2: '#565656',
  coloring: '#EEEEEE',
  cardbg: '#f6f6f6',
  card: '#f6f6f6',
  overlay:  'rgba(0, 0, 0, 0.5)',
  bordercolor: '#241353',
};

const darkTheme = {
  background: '#241353',
  color: '#FFFFFF',
  heading: '#ffffff',
  heading2: '#241353',
  heading3: '#ffffff',
  text: '#BABABA',
  text2: '#ffffff',
  coloring: '#333333',
  cardbg: '#333333',
  card: '#757575',
  overlay: 'rgba(255, 255, 255, 0.4)',
  bordercolor: '#ffffff',
  darkButtonBackground: '#ffffff',
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkMode");
        if (darkModeState !== null) {
          const parsedState = JSON.parse(darkModeState);
          setDarkMode(parsedState.darkMode);
          setTheme(parsedState.darkMode ? darkTheme : lightTheme);
        }
      } catch (error) {
        console.error("Error loading dark mode state:", error);
      }
    };

    loadDarkModeState();
  }, []);

  const toggleTheme = async () => {
    try {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      setTheme(newDarkMode ? darkTheme : lightTheme);
      await AsyncStorage.setItem("darkMode", JSON.stringify({ darkMode: newDarkMode }));
    } catch (error) {
      console.error("Error saving dark mode state:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
