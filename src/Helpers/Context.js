import { createContext, useContext, useEffect, useState } from "react";
import SimpleBackdrop from "../Components/Common/MUI/BackDrop";
import TMDBServices from "../Services/TMDBServices";
import { END_POINT_OF } from "../Utils/ApiEndPoints";
const BackDropContext = createContext();
const GenresContext = createContext();

const BackDropProvider = ({ children }) => {
  const [backDropState, setBackDropState] = useState(false);
  return (
    <BackDropContext.Provider children={children} value={{ setBackDropState }}>
      <SimpleBackdrop backDropState={backDropState} />
      {children}
    </BackDropContext.Provider>
  );
};
export default BackDropProvider;

export const useBackDrop = () => useContext(BackDropContext);

export const GenresProvider = ({ children }) => {
  const services = TMDBServices();
  const [genres, setGenres] = useState({
    movies: [{ label: "ALL", value: null }],
    shows: [{ label: "ALL", value: null }],
  });
  useEffect(() => {
    if (genres.movies.length === 1 || genres.shows.length === 1) {
      let responseGenres = {
        movies: genres.movies,
        shows: genres.shows,
      };
      services
        .getGenresList(END_POINT_OF.GENRES_OF_MOVIES)
        .then((response) => {
          if (response && response.genres) {
            response.genres.forEach((genre) => {
              genre.label = genre.name;
              genre.value = genre.id;
            });
            responseGenres.movies = [
              ...responseGenres.movies,
              ...response.genres,
            ];
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
      services
        .getGenresList(END_POINT_OF.GENRES_OF_SHOWS)
        .then((response) => {
          if (response && response.genres) {
            response.genres.forEach((genre) => {
              genre.label = genre.name;
              genre.value = genre.id;
            });
            responseGenres.shows = [
              ...responseGenres.shows,
              ...response.genres,
            ];
          }
        })
        .catch((err) => {
          console.log("error", err);
        })
        .finally(() => {
          setGenres(responseGenres);
        });
    }
  }, [genres.movies, genres.shows, services]);

  return (
    <GenresContext.Provider value={{ genres }}>
      {children}
    </GenresContext.Provider>
  );
};

export const useGenres = () => useContext(GenresContext);
