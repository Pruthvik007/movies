import { fetchApi } from "../Utils/Fetch";
import { buildUrl } from "../Helpers/UrlHelper";
import { TRENDING_TIME_WINDOW } from "../Utils/ApiEndPoints";
import { CONSTANTS } from "../Helpers/Constants";
const TMDBServices = () => {
  const findMoviesOrShows = (endPoint, queries) => {
    let url = buildUrl(
      CONSTANTS.ENV.REACT_APP_API_BASE_URL + endPoint,
      queries
    );
    return fetchApi(url);
  };
  const discoverMoviesOrShows = (endpoint, queries) => {
    let url = buildUrl(
      CONSTANTS.ENV.REACT_APP_API_BASE_URL + endpoint,
      queries
    );
    return fetchApi(url);
  };

  const findMovieOrShow = (endpoint, queries) => {
    let url = buildUrl(
      CONSTANTS.ENV.REACT_APP_API_BASE_URL + endpoint,
      queries
    );
    return fetchApi(url);
  };

  const findTrendingMoviesOrShows = (
    endpoint,
    queries,
    timeWindow = TRENDING_TIME_WINDOW.WEEK
  ) => {
    let url = buildUrl(
      CONSTANTS.ENV.REACT_APP_API_BASE_URL + endpoint + timeWindow,
      queries
    );
    return fetchApi(url);
  };

  const searchMovieOrShowOrPeopleOrAll = (endpoint, queries) => {
    let url = buildUrl(
      CONSTANTS.ENV.REACT_APP_API_BASE_URL + endpoint,
      queries
    );
    return fetchApi(url);
  };

  const getGenresList = (endpoint) => {
    let url = buildUrl(CONSTANTS.ENV.REACT_APP_API_BASE_URL + endpoint);
    return fetchApi(url);
  };

  return Object.freeze({
    discoverMoviesOrShows,
    findMovieOrShow,
    findTrendingMoviesOrShows,
    searchMovieOrShowOrPeopleOrAll,
    getGenresList,
    findMoviesOrShows,
  });
};

export default TMDBServices;
