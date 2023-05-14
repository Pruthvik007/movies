import React, { useEffect, useState } from "react";
import ScrollButton from "./Common/ScrollButton";
import TMDBServices from "../Services/TMDBServices";
import { QUERY_TYPE } from "../Utils/ApiQuery";
import MovieOrShowCard from "./Common/MovieOrShowCard";
import { useBackDrop } from "../Helpers/Context";

const MoviesOrShows = ({ endPoint, type, genre }) => {
  const { setBackDropState } = useBackDrop();
  const tMDBServices = TMDBServices();
  const [data, setData] = useState([]);
  const [queries, setQueries] = useState({
    [QUERY_TYPE.WITH_GENRES]: genre.value,
    [QUERY_TYPE.SORT_BY]: QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC,
    [QUERY_TYPE.PAGE_NUMBER]: 1,
  });

  useEffect(() => {
    setData([]);
    setQueries({ ...queries, [QUERY_TYPE.WITH_GENRES]: genre.value });
  }, [genre]);

  useEffect(() => {
    find(queries);
  }, [queries]);

  const find = (queries) => {
    setBackDropState(true);
    tMDBServices.findMoviesOrShows(endPoint, queries).then((response) => {
      if (response && response.results) {
        addOnlyNewData(response.results, data, setData);
      }
    });
    setBackDropState(false);
  };

  const addOnlyNewData = async (results, state, setState) => {
    const newMedia = results.filter((result) => {
      const index = state.findIndex((media) => media.id === result.id);
      return index === -1;
    });
    if (newMedia.length > 0) {
      await setState([...state, ...newMedia]);
    }
  };

  let prevScrollY = window.pageYOffset;
  function handleScroll() {
    const isScrollingDown = window.pageYOffset > prevScrollY;
    const isNearHalfway =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight / 2;
    if (isScrollingDown && isNearHalfway) {
      setQueries((queries) => ({
        ...queries,
        [QUERY_TYPE.PAGE_NUMBER]: queries[QUERY_TYPE.PAGE_NUMBER] + 1,
      }));
    }
    prevScrollY = window.pageYOffset;
  }
  const debouncedHandleScroll = debounce(handleScroll, 100);
  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);
  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  return (
    <React.Fragment>
      <ScrollButton />
      <div className="container">
        <div className="row">
          {data &&
            data &&
            data.length > 0 &&
            data.map((movieOrShow) => {
              return (
                <div
                  key={movieOrShow.id}
                  className="col-4 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1"
                >
                  <MovieOrShowCard details={movieOrShow} type={type} />
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoviesOrShows;
