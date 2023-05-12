import React, { useEffect, useState } from "react";
import ScrollButton from "./Common/ScrollButton";
import TMDBServices from "../Services/TMDBServices";
import { QUERY_TYPE } from "../Utils/ApiQuery";
import { END_POINT_OF } from "../Utils/ApiEndPoints";
import MovieOrShowCard from "./Common/MovieOrShowCard";
import { useBackDrop } from "../Helpers/Context";
import { CONSTANTS } from "../Helpers/Constants";

const MoviesOrShows = ({ endPoint, type, category }) => {
  const [discoverData, setDiscoverData] = useState({ movies: [], shows: [] });
  const [trendingData, setTrendingData] = useState({ movies: [], shows: [] });
  const [latestData, setLatestData] = useState({ movies: [], shows: [] });
  const [data, setData] = useState({type:'',data:[]});
  const [currentPage, setCurrentPage] = useState(1);
  const { setBackDropState } = useBackDrop();
  const tMDBServices = TMDBServices();

  const updateData = () => {
    if (type === CONSTANTS.MOVIES) {
      switch (category) {
        case CONSTANTS.CATEGORY.DISCOVER:
          setData({type:CONSTANTS.MOVIES,data:[...discoverData.movies]});
          break;
        case CONSTANTS.CATEGORY.TRENDING:
          setData({type:CONSTANTS.MOVIES,data:[...trendingData.movies]});
          break;
        case CONSTANTS.CATEGORY.LATEST:
          setData({type:CONSTANTS.MOVIES,data:[...latestData.movies]});
          break;
        default:
          break;
      }
    } else if (type === CONSTANTS.SHOWS) {
      switch (category) {
        case CONSTANTS.CATEGORY.DISCOVER:
          setData({type:CONSTANTS.SHOWS,data:[...discoverData.shows]});
          break;
        case CONSTANTS.CATEGORY.TRENDING:
          setData({type:CONSTANTS.SHOWS,data:[...trendingData.shows]});
          break;
        case CONSTANTS.CATEGORY.LATEST:
          setData({type:CONSTANTS.SHOWS,data:[...latestData.shows]});
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    updateData();
  }, [discoverData, trendingData, latestData]);

  const find = (page) => {
    setBackDropState(true);
    switch (endPoint) {
      case END_POINT_OF.DISCOVER_MOVIES:
        discoverMovies(page);
        break;
      case END_POINT_OF.DISCOVER_SHOWS:
        discoverShows(page);
        break;
      case END_POINT_OF.TRENDING_MOVIES:
        findTrendingMovies(page);
        break;
      case END_POINT_OF.TRENDING_SHOWS:
        findTrendingShows(page);
        break;
      case END_POINT_OF.LATEST_MOVIES:
        findLatestMovies(page);
        break;
      case END_POINT_OF.LATEST_SHOWS:
        findLatestShows(page);
        break;
      default:
        break;
    }
  };

  const discoverMovies = (page) => {
    tMDBServices
      .discoverMoviesOrShows(END_POINT_OF.DISCOVER_MOVIES, [
        {
          key: QUERY_TYPE.SORT_BY,
          value: QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC,
        },
        {
          key: QUERY_TYPE.PAGE_NUMBER,
          value: page,
        },
      ])
      .then((response) => {
        setDiscoverData({
          ...discoverData,
          movies: [...discoverData.movies, ...response.results],
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      })
      .finally(() => {
        setBackDropState(false);
      });
  };

  const discoverShows = (page) => {
    tMDBServices
      .discoverMoviesOrShows(END_POINT_OF.DISCOVER_SHOWS, [
        {
          key: QUERY_TYPE.SORT_BY,
          value: QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC,
        },
        {
          key: QUERY_TYPE.PAGE_NUMBER,
          value: page,
        },
      ])
      .then((response) => {
        setDiscoverData({
          ...discoverData,
          shows: [...discoverData.shows, ...response.results],
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      })
      .finally(() => {
        setBackDropState(false);
      });
  };

  const findLatestMovies = (page) => {
    tMDBServices
      .findLatestMoviesOrShows(END_POINT_OF.LATEST_MOVIES, [
        {
          key: QUERY_TYPE.SORT_BY,
          value: QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC,
        },
        {
          key: QUERY_TYPE.PAGE_NUMBER,
          value: page,
        },
      ])
      .then((response) => {
        setLatestData({
          ...latestData,
          movies: [...latestData.movies, ...response.results],
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      })
      .finally(() => {
        setBackDropState(false);
      });
  };

  const findLatestShows = (page) => {
    tMDBServices
      .findLatestMoviesOrShows(END_POINT_OF.LATEST_SHOWS, [
        {
          key: QUERY_TYPE.SORT_BY,
          value: QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC,
        },
        {
          key: QUERY_TYPE.PAGE_NUMBER,
          value: page,
        },
      ])
      .then((response) => {
        setLatestData({
          ...latestData,
          shows: [...latestData.shows, ...response.results],
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      })
      .finally(() => {
        setBackDropState(false);
      });
  };

  const findTrendingMovies = (page) => {
    tMDBServices
      .findTrendingMoviesOrShows(END_POINT_OF.TRENDING_MOVIES, [
        {
          key: QUERY_TYPE.SORT_BY,
          value: QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC,
        },
        {
          key: QUERY_TYPE.PAGE_NUMBER,
          value: page,
        },
      ])
      .then((response) => {
        setTrendingData({
          ...trendingData,
          movies: [...trendingData.movies, ...response.results],
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      })
      .finally(() => {
        setBackDropState(false);
      });
  };

  const findTrendingShows = (page) => {
    tMDBServices
      .findTrendingMoviesOrShows(END_POINT_OF.TRENDING_SHOWS, [
        {
          key: QUERY_TYPE.SORT_BY,
          value: QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC,
        },
        {
          key: QUERY_TYPE.PAGE_NUMBER,
          value: page,
        },
      ])
      .then((response) => {
        setTrendingData({
          ...trendingData,
          shows: [...trendingData.shows, ...response.results],
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      })
      .finally(() => {
        setBackDropState(false);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight - 500) {
      setCurrentPage((page) => page + 1);
    }
  };

  useEffect(() => {
    find(currentPage);
  }, [currentPage]);

  return (
    <React.Fragment>
      <ScrollButton />
    <div className="container-fluid">
      <div className="row">
        {data && data.data &&
          data.data.length > 0 &&
          data.data.map((movieOrShow) => {
            return (
              <div
                key={movieOrShow.id}
                className="col-xs-1 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1"
              >
                <MovieOrShowCard details={movieOrShow} type={data.type} />
              </div>
            );
          })}
      </div>
    </div>
    </React.Fragment>
  );
};

export default MoviesOrShows;