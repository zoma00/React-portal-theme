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
          Show Important Message
        </button>        
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h2>2025 Update Notice</h2>
            <p>New security features have been enabled:</p>
            <ul>
              <li>Quantum-resistant encryption</li>
              <li>Neural network validation</li>
              <li>Biometric fallback system</li>
            </ul>
          </Modal>
        )}
      </div>
    </ThemeContext.Provider>
  );
}
