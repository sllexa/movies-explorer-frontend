import './Promo.css';
import promo from '../../images/promo-image.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__container">
          <div>
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a href="#about-project" className="promo__button">Узнать больше</a>
          </div>
          <img className="promo__image" src={promo} alt="Земной шар из текста"/>
        </div>
      </div>
    </section>
  );
}

export default Promo;