import React, { createContext, useContext, ReactNode } from 'react';
import { darkTheme, lightTheme, LightTheme, Theme } from './themes';
import { useColorScheme } from 'react-native';

type ThemeContextType = {
  theme: LightTheme;
}

const ThemeContext = createContext<ThemeContextType>({theme: lightTheme});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useColorScheme() === Theme.DARK;

  return (
   <ThemeContext.Provider value={{ theme: isDarkMode ? darkTheme : lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
