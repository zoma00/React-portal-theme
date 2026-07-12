# React Portal Theme

![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React Portal](https://img.shields.io/badge/ReactDOM-Portal-149ECA?logo=react&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-Light%20%2F%20Dark-6B7280)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-222222?logo=githubpages&logoColor=white)

A focused React demonstration of a reusable portal dialog mounted outside the application's main DOM tree, paired with an application-level light/dark theme managed through React Context.

## Live Demo

[Open the React Portal Theme demo](https://zoma00.github.io/React-portal-theme/)

## Implemented Features

- Reusable modal component rendered with `ReactDOM.createPortal`
- Dedicated `#modal-root` mounted outside the main React application root
- Application-level light/dark theme state shared through React Context
- Theme toggle available from the application header
- Modal opened through a controlled button
- Modal closed through the close button or overlay click
- Click propagation stopped inside the dialog so its content remains interactive

## How the Portal Works

The application creates two DOM mounting points:

```text
document.body
├── #root         → main React application
└── #modal-root   → portal dialog container
```

`src/index.js` creates `#modal-root`. When the modal opens, the modal component creates a container, attaches it to that portal root, and renders the overlay and dialog through `ReactDOM.createPortal`.

The modal is therefore visually connected to the application while remaining outside the main application's DOM hierarchy.

## Theme Flow

```text
App
└── ThemeContext.Provider
    ├── Header → reads and changes the theme
    ├── App container → applies the light/dark class
    └── Modal → renders through the separate portal root
```

The current theme is stored in `App` and shared through `ThemeContext`. The main application container applies either the `light` or `dark` class. The modal currently uses its own CSS Module styling; a future portal child can consume `ThemeContext` directly when theme-specific dialog styling is required.

## Technology Stack

- React 19
- React DOM portals
- React Context API
- Create React App / React Scripts
- CSS Modules for modal styling
- GitHub Pages for the live deployment

## Project Structure

```text
src/
├── components/
│   └── Modal/
│       ├── Modal.tsx
│       ├── Modal.module.css
│       └── index.js
├── App.js
├── App.css
├── Header.jsx
├── ThemeContext.jsx
├── index.js
└── index.css
```

## Run Locally

```bash
git clone https://github.com/zoma00/React-portal-theme.git
cd React-portal-theme
npm install
npm start
```

Open <http://localhost:3000>.

## Create a Production Build

Before building for this GitHub Pages project path, ensure `package.json` contains:

```json
"homepage": "https://zoma00.github.io/React-portal-theme/"
```

Then create the build:

```bash
npm run build
```

The generated static build is published from the repository's `gh-pages` branch.

## Scope

This repository is an implementation demo, not a published npm package or a complete portal component library. Its current scope is one reusable portal modal plus an application-level light/dark theme toggle. Tooltips, notification components, and third-party theming adapters are not implemented here.
