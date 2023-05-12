import { fetchApi } from "../Utils/Fetch";
import { buildUrl } from "../Helpers/UrlHelper";
import { TRENDING_TIME_WINDOW } from "../Utils/ApiEndPoints";
const TMDBServices = () => {
  const discoverMoviesOrShows = (endpoint, queries) => {
    let url = buildUrl(process.env.REACT_APP_API_BASE_URL + endpoint, queries);
    return fetchApi(url);
  };

  const findMovieOrShow = (endpoint, queries) => {
    let url = buildUrl(process.env.REACT_APP_API_BASE_URL + endpoint, queries);
    return fetchApi(url);
  };

  const findLatestMoviesOrShows = (endpoint, queries) => {
    let url = buildUrl(process.env.REACT_APP_API_BASE_URL + endpoint, queries);
    return fetchApi(url);
  };

  const findTrendingMoviesOrShows = (
    endpoint,
    queries,
    timeWindow = TRENDING_TIME_WINDOW.WEEK
  ) => {
    let url = buildUrl(
      process.env.REACT_APP_API_BASE_URL + endpoint + timeWindow,
      queries
    );
    return fetchApi(url);
  };

  const searchMovieOrShowOrPeopleOrAll=(endpoint,queries)=>{
    let url = buildUrl(process.env.REACT_APP_API_BASE_URL + endpoint, queries);
    return fetchApi(url);
  }

  return Object.freeze({
    discoverMoviesOrShows,
    findMovieOrShow,
    findLatestMoviesOrShows,
    findTrendingMoviesOrShows,
    searchMovieOrShowOrPeopleOrAll
  });
};

export default TMDBServices;
