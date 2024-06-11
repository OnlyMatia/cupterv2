import { useEffect, useState } from 'react';

const Nav = () => {
  const route = window.location.pathname;
  const darkTheme = 'dark-theme';
  //const iconTheme = 'bx-sun';

  const [theme, setTheme] = useState('light');
  const [icon, setIcon] = useState('bx-moon');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 19 || currentHour < 5) {
      setTheme('dark');
      setIcon('bx-sun');
      document.body.classList.add(darkTheme);
    }

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      setTheme(selectedTheme);
    }

    if (selectedIcon) {
      setIcon(selectedIcon);
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const newIcon = icon === 'bx-moon' ? 'bx-sun' : 'bx-moon';

    document.body.classList.toggle(darkTheme);
    setTheme(newTheme);
    setIcon(newIcon);
    localStorage.setItem('selected-theme', newTheme);
    localStorage.setItem('selected-icon', newIcon);
  };

  const [smallMenu, toggle] = useState(true)
  const toggleMenu = () =>{
      toggle(!smallMenu)
  }

  
  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="/" className="nav__logo">Medallion</a>

        <div className={smallMenu ? 'nav__menu' : 'nav__menu show-menu'} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="/" className={`nav__link ${route === "/home" || route==="/" ? "active-link" : ""}`}>Početna</a></li>
            <li className="nav__item"><a href="/about" className={`nav__link ${route === "/about" ? "active-link" : ""}`}>O nama</a></li>
            {/* <li className="nav__item"><a href="/services" className="nav__link">Usluge</a></li> */}
            <li className="nav__item"><a href="/menu" className={`nav__link ${route === "/menu" ? "active-link" : ""}`}>Meni</a></li>
            <li className="nav__item"><a href="/contact" className={`nav__link ${route === "/contact" ? "active-link" : ""}`}>Kontakt</a></li>
            <li><i className={`bx ${icon} change-theme`} id="theme-button" onClick={handleThemeToggle}></i></li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
