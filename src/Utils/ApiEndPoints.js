export const END_POINT_OF = {
  MOVIES: {
    DISCOVER: "discover/movie",
    TRENDING: "trending/movie/week",
    NOW_PLAYING: "movie/now_playing",
    POPULAR: "movie/popular",
    TOP_RATED: "movie/top_rated",
    UPCOMING: "movie/upcoming",
  },
  SHOWS: {
    DISCOVER: "discover/tv",
    TRENDING: "trending/tv/week",
    NOW_PLAYING: "tv/airing_today",
    UPCOMING: "tv/on_the_air",
    POPULAR: "tv/popular",
    TOP_RATED: "tv/top_rated",
  },
  FIND_BY_ID: "find/",

  GENRES_OF_MOVIES: "genre/movie/list",
  GENRES_OF_SHOWS: "genre/tv/list",

  TRENDING_ALL: "trending/all/",
  TRENDING_PEOPLE: "trending/person/",

  ///tv/{SHOWS_id}/similar
  DETAILS_OF_MOVIE: "movie/",
  DETAILS_OF_SHOWS: "tv/",
  SIMILAR: "similar/",

  //?query=
  SEARCH_MOVIE: "search/movie",
  SEARCH_SHOWS: "search/tv",
  SEARCH_PERSON: "search/person",
  SEARCH_ALL: "search/multi",
};

export const TRENDING_TIME_WINDOW = {
  SIX_HOURS: "6h",
  DAY: "day",
  WEEK: "week",
};
