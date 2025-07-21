# Noteify - Minimal Notes App 📝

A minimal, fast, and beautiful notes application built with React, Redux, and Tailwind CSS. Allows users to create, update, and manage notes locally in the browser.

## 🚀 Features
- Create and update notes
- Local data persistence using Redux
- Live form editing with auto-fill on click
- Dark UI theme with golden accents

## 📁 Folder Structure
```
/src
│
├── components
│   ├── Editor.jsx      # Create/edit note form
│   ├── Home.jsx        # Displays list of notes
│   └── Header.jsx      # App title and navigation
│
├── redux
│   ├── noteSlice.js    # Redux slice for notes
│   └── store.js        # Redux store configuration
│
└── App.jsx             # Routing and layout
```

## 🛠️ Tech Stack
- React
- Redux Toolkit
- React Hook Form
- Tailwind CSS
- React Router DOM
- React Hot Toast

## 📦 Installation
```bash
git clone https://github.com/your-username/noteify.git
cd noteify
npm install
npm run dev
```

Open in browser at `http://localhost:5173`

## ✨ Notes
- All notes are stored in Redux state.
- UI designed with a dark theme + golden accent.
- Responsive layout and hover transitions.

---

Feel free to contribute or fork it! ⭐
