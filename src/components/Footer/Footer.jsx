import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <p className="footer__copy">&copy; 2023</p>
          <ul className="footer__links-list">
            <li><a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            <li><a className="footer__link" href="https://github.com/sllexa" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;