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

export const filterMovies = (movies, query) => {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  });
  return moviesByQuery;
}
export const filterDuration = (movies) => {
  return movies.filter((movie) => movie.duration < SHORTMOVIES_DURATION);
}