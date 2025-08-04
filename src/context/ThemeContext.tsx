import React, { createContext, useState, useEffect } from 'react';

export type ThemeType = 'theme-light' | 'theme-dark' | 'theme-colorful';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme-light',
  setTheme: () => {},
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>('theme-light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeType;
    if (stored) setThemeState(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
    document.documentElement.setAttribute('data-theme', theme); // Optional for tailwind theming
  }, [theme]);

  const setTheme = (theme: ThemeType) => setThemeState(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider

