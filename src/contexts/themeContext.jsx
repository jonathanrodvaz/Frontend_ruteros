import { createContext, useContext, useEffect, useMemo, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark',
  );
  const toggleTheme = () => {
    setTheme((value) => {
      if (value == 'dark') {
        localStorage.setItem('theme', 'light');
        return 'light';
      } else {
        localStorage.setItem('theme', 'dark');
        return 'dark';
      }
    });
  };

  useEffect(() => {
    if (theme === 'dark') document.body.className = 'dark';
    document.body.className = localStorage.getItem('theme');
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeApp = () => {
  return useContext(ThemeContext);
};
