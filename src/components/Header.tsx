import React, { useContext } from 'react';
import { ThemeContext, ThemeType } from '../context/ThemeContext';
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setTheme(e.target.value as ThemeType);
//   };

//   return (
//     <header className="fixed w-full top-0 flex justify-between p-4 bg-gray-200 shadow">
//       <div className="text-xl font-bold">Multi-Theme App</div>
//       <select value={theme} onChange={handleChange} className="p-2 rounded">
//         <option value="theme1">Theme 1</option>
//         <option value="theme2">Theme 2</option>
//         <option value="theme3">Theme 3</option>
//       </select>
//     </header>
//   );
// };

// export default Header;

 return (
    <header className="fixed top-0 w-full bg-[var(--bg)] text-[var(--fg)] shadow-md p-4 flex justify-between items-center z-20">
      <h1 className="text-xl sm:text-2xl font-bold">Multi‑Theme App</h1>
      <nav className="space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : "hover:underline"}>Contact</NavLink>
      </nav>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="ml-4 bg-[var(--btn-bg)] text-white py-1 px-2 rounded"
      >
        <option value="theme-light">Light</option>
        <option value="theme-dark">Dark</option>
        <option value="theme-colorful">Colorful</option>
      </select>
    </header>
  );
};

export default Header;

