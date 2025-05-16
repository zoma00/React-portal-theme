// src/Header.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>My App</h1>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="theme-toggle">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
}

