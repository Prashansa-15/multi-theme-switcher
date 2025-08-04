// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import ThemeContext from './context/ThemeContext'
import Router from './router'

const App: React.FC = () => {
  return (
    <ThemeContext>
      <Router />
    </ThemeContext>
    
  );
};

export default App;



// // src/App.js
// import React, { useState, useEffect } from 'react';
// import './themes.css';

// function App() {
//   const [theme, setTheme] = useState('theme-light');

//   useEffect(() => {
//     document.body.className = theme; // apply class to <body>
//   }, [theme]);

//   return (
//     <div className="app">
//       <h1>Theme Switcher</h1>
//       <p>This is a sample paragraph with dynamic theme.</p>
//       <button onClick={() => setTheme('theme-light')}>Light Theme</button>
//       <button onClick={() => setTheme('theme-dark')}>Dark Theme</button>
//     </div>
//   );
// }

// export default App;
