import './NavAuth.css';
import { Link } from 'react-router-dom';

const NavAuth = () => {
  return (
    <nav className="nav-auth">
      <ul className="nav-auth__list">
        <li>
          <Link to="/signup" className="nav-auth__link nav-auth__link_type_signup">
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signin" className="nav-auth__link nav-auth__link_type_signin">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavAuth;