import './Portfolio.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/sllexa/how-to-learn" target="_blank" rel="noreferrer">
            Статичный сайт
            <img src={arrow} alt="Стелка"/>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://sllexa.github.io/russian-travel/" target="_blank" rel="noreferrer">
            Адаптивный сайт
            <img src={arrow} alt="Стелка"/>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://github.com/sllexa/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
            Одностраничное приложение
            <img src={arrow} alt="Стелка"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;