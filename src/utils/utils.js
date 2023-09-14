import {
  CARDS_QUANTITY_DESKTOP, CARDS_QUANTITY_MOBILE, CARDS_QUANTITY_TABLET,
  DESKTOP_BREAKPOINT, TABLET_BREAKPOINT, SHORTMOVIES_DURATION
} from "./constants";

export const calcQuantity = () => {
  const pageWidth = document.documentElement.clientWidth;
  if (pageWidth > DESKTOP_BREAKPOINT) {
    return CARDS_QUANTITY_DESKTOP;
  }
  if (pageWidth > TABLET_BREAKPOINT) {
    return CARDS_QUANTITY_TABLET;
  }
  return CARDS_QUANTITY_MOBILE;
}

export const formatDuration = (duration) => {
  const min = duration % 60;
  const hours = (duration - min) / 60;
  return hours ? `${hours}ч ${min}м` : `${min}м`;
}

export const formatMovies = (movies) => {
  movies.forEach(movie => {
    if (!movie.image) {
      movie.image = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80';
      movie.thumbnail = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80';
    } else {
      movie.image = `https://api.nomoreparties.co${movie.image.url}`
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
    }
    if (!movie.country) {
      movie.country = 'Russia';
    }
    if (!movie.nameEN) {
      movie.nameEN = movie.nameRU;
    }
  });
  return movies
}

export const filterShortMovies = (movies) => {
  return movies.filter(movie => movie.duration < SHORTMOVIES_DURATION);
}

export const filterMovies = (movies, query, shortCheckbox) => {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = query.toLowerCase().trim();
    return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
  });

  if (shortCheckbox) {
    return filterShortMovies(moviesByQuery);
  } else {
    return moviesByQuery;
  }
}

export const getSavedMovieCard = (arr, movie) => {
  return arr.find((item) => {
    return item.movieId === (movie.id || movie.movieId);
  });
}
