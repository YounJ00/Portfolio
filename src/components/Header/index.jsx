const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        🐉 ham's Portfolio
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about" className="">
          About
        </a>
        <a href="#services" className="">
          Skills
        </a>
        <a href="#portfolio" className="">
          Projects
        </a>
        <a href="#contact" className="">
          Activity
        </a>
      </nav>
    </header>
  );
};

export default Header;
