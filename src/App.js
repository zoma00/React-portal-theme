// src/App.js
import { useState } from 'react';
import Modal from './components/Modal';
import { ThemeContext } from './ThemeContext';
import Header from './Header';
import style from './App.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app-container ${theme}`}>
        <Header />
        <button
          onClick={() => setShowModal(true)}
          className="cta-button"
        >
          Open portal dialog
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h2>React Portal Dialog</h2>
            <p>
              This dialog is rendered through a React portal — mounted outside
              the app's DOM tree — and inherits the active light/dark theme
              from context.
            </p>
            <ul>
              <li>Rendered via ReactDOM portal</li>
              <li>Theme-aware (light / dark)</li>
              <li>Reusable modal with overlay close</li>
            </ul>
          </Modal>
        )}
      </div>
    </ThemeContext.Provider>
  );
}
