import './Movies.css';
import { useState, useEffect } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies, filterDuration } from '../../utils/utils';
import * as movies from '../../utils/MoviesApi';

const Movies = ({ handleLikeClick, savedMovies, onCardDelete }) => {
  const [isLoading, setIsLoading] = useState(false); //загрузка прелоадер
  const [initialMovies, setInitialMovies] = useState([]); //отфильтрованные по запросу
  const [filteredMovies, setFilteredMovies] = useState([]); //отфильтрованные по запросу и чекбоксу
  const [isShortMovies, setIsShortMovies] = useState(false); //включен ли чекбокс короткометражек
  const [isReqErr, setIsReqErr] = useState(false); //ошибка запроса к серверу
  const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены

  //основнай метод фильрации, который отдает массив с фильмами на рендеринг
  const handleFilterMovies = (movies, query, short) => {
    const moviesList = filterMovies(movies, query, short); //фильтруем полученный массив по запросу
    setInitialMovies(moviesList);
    setFilteredMovies(short ? filterDuration(moviesList) : moviesList); //если чекбокс тру, то фильруем по длине и записываем в стейт
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('allMovies', JSON.stringify(movies));
  }

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
    if (!isShortMovies) {
      if (filterDuration(initialMovies).length === 0) {
        setFilteredMovies(filterDuration(initialMovies));
      } else {
        setFilteredMovies(filterDuration(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shortMovies', !isShortMovies);
  }

  const onSearchMovies = (query) => {
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', isShortMovies);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      handleFilterMovies(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      movies.getFilms()
        .then((cardsData) => {
          handleFilterMovies(cardsData, query, isShortMovies);
          setIsReqErr(false);
        })
        .catch((err) => {
          setIsReqErr(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem('shortMovies') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      if (localStorage.getItem('shortMovies') === 'true') {
        setFilteredMovies(filterDuration(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <main className="movies">
      <div className="container">
        <SearchForm
          onSearchMovies={onSearchMovies}
          onFilter={handleShortMovies}
          isShortMovies={isShortMovies}
        />
        <MoviesCardList
          savedMovies={savedMovies}
          cards={filteredMovies}
          isSavedFilms={false}
          isLoading={isLoading}
          isReqErr={isReqErr}
          isNotFound={isNotFound}
          handleLikeClick={handleLikeClick}
          onCardDelete={onCardDelete}
        />
      </div>
    </main>
  );
}

export default Movies;