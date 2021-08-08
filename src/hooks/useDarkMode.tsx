import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState<string>(localStorage.theme || 'light');

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(colorTheme);

    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
};

export default useDarkMode;
