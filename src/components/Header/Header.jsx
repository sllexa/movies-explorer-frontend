import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import Logo from '../Logo/Logo.jsx';
import { useLocation } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';


const Header = ({ loggedIn }) => {
  const path = useLocation().pathname;

  return (
    <heaer className={`header ${path === '/' ? 'header_type_landing' : ''}`}>
      <div className="container">
        <div className="header__container">
          <Logo />
          {!loggedIn ? <NavAuth /> : <Navigation path={path} />}
        </div>
      </div>
    </heaer>
  );
}

export default Header;