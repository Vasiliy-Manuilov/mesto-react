import headerlogo from '../images/header/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img
        src={headerlogo}
        alt="логотип с
надписью Mesto"
        className="header__logo"
      />
    </header>
  );
}

export default Header;
