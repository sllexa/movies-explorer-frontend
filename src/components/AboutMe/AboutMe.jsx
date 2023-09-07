import Portfolio from '../Portfolio/Portfolio';
import Title from '../Title/Title';
import './AboutMe.css';
import photo from '../../images/my-photo.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="container">
        <Title>Студент</Title>
        <div className="about-me__container">
          <div className="about-me__info">
            <h3 className="about-me__name">Алексей</h3>
            <p className="about-me__status">Фронтенд-разработчик, 50 лет</p>
            <p className="about-me__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a className="about-me__link" href="https://github.com/sllexa" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студента"/>
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;