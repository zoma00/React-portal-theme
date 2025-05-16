<p align="center">
  <a href="https://react.dev/" target="_blank">
    <img src="react-1-logo-png-transparent.png" width="200" alt="Django Logo">
  </a>




# React Portal Theme System 🌓🌀
[![npm version](https://img.shields.io/npm/v/react-portal-theme)](https://www.npmjs.com/package/react-portal-theme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/yourusername/react-portal-theme/main.yml)](https://github.com/yourusername/react-portal-theme/actions)

A sophisticated theming solution that leverages React Portals for optimal rendering of contextual UI elements while maintaining centralized theme management.

## ✨ Features
- **Portal-Powered UI Elements**: Modal, Tooltip, Notification components
- **Theme Context System**: Unified light/dark mode management
- **CSS Variable Based**: Theme properties as CSS custom properties
- **Dynamic Theming**: Runtime theme switching without reload
- **Zero CSS Conflicts**: Isolated portal rendering for overlay components

## 🚀 Installation
```bash
npm install react-portal-theme styled-components
# or
yarn add react-portal-theme styled-components
```

## 🧩 Core Concepts

### React Portals Architecture
```tsx
// Portal creation example
const ModalPortal: React.FC = ({ children }) => {
  const [portalNode] = useState(document.createElement('div'));
  
  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => document.body.removeChild(portalNode);
  }, [portalNode]);

  return createPortal(children, portalNode);
};
```

### Theme Context System
```tsx
// ThemeContext.tsx
import React from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: 'light', toggleTheme: () => {} });

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  
  const toggleTheme = () => setTheme(prev => 
    prev === 'light' ? 'dark' : 'light'
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## 🎨 Theming Strategies
```css
/* theme.css */
:root {
  --primary-color: #2196f3;
  --background-light: #ffffff;
  --background-dark: #121212;
  --text-primary: rgba(0, 0, 0, 0.87);
  --text-secondary: rgba(0, 0, 0, 0.54);
}

[data-theme='dark'] {
  --background: var(--background-dark);
  --text-primary: rgba(255, 255, 255, 0.87);
  --text-secondary: rgba(255, 255, 255, 0.54);
}
```

## 📚 Usage Guide
```tsx
// App.tsx
import { ThemeProvider, useTheme } from 'react-portal-theme';

const App = () => (
  <ThemeProvider>
    <ThemeToggleButton />
    <ModalPortal>
      <ThemeAwareModal />
    </ModalPortal>
  </ThemeProvider>
);

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`}
    >
      Switch to {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
```

## 🛠 Development Scripts
```bash
# Start development server
npm start

# Run tests with watch mode
npm test

# Build production bundle
npm run build

# Analyze bundle size
npm run analyze
```

## 🧪 Testing Strategy
```tsx
// Modal.test.tsx
test('renders modal outside root hierarchy', () => {
  const { getByText } = render(
    <div id="root">
      <App />
    </div>
  );
  
  fireEvent.click(getByText('Open Modal'));
  expect(document.body.querySelector('.modal')).toBeInTheDocument();
});
```

## 🚧 Roadmap
- [ ] TypeScript definition files
- [ ] CSS-in-JS theming adapters (Emotion, JSS)
- [ ] Portal transition animations
- [ ] Theme persistence (localStorage)
- [ ] Accessibility audit (WAI-ARIA)

## 🤝 Contributing
PRs welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## 📄 License
MIT © [Hazem Elbatawy ]

