import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(''); 

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    document.documentElement.className = '';
    document.documentElement.classList.add(newTheme); 
  };

  return (
    <div className="theme-switcher-container">
     <h3 className='t'>Themes:</h3> 
      <select className="theme-dropdown" value={theme} onChange={handleThemeChange}>
        <option value="" disabled hidden>Choose</option>
        <option value="theme-blue">Blue</option>
        <option value="theme-black">Dark</option>
        <option value="theme-voilet">Voilet</option>
        <option value="theme-pink">Pink</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
