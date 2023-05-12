import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router";
import TMDBServices from "../../../Services/TMDBServices";
import { END_POINT_OF } from "../../../Utils/ApiEndPoints";
import { CONSTANTS } from "../../../Helpers/Constants";
import { QUERY_TYPE } from "../../../Utils/ApiQuery";

const AutoComplete = ({ searchFor }) => {
  const navigate = useNavigate();
  const tmdbServices = TMDBServices();
  const [options, setOptions] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [value, setValue] = React.useState("");

  const handleInputChange = (inputValue) => {
    setSearchTerm(inputValue);
  };
  const search = async () => {
    try {
      let response = null;
      if (searchFor === CONSTANTS.MOVIES) {
        response = await tmdbServices.searchMovieOrShowOrPeopleOrAll(
          END_POINT_OF.SEARCH_MOVIE,
          [{ key: QUERY_TYPE.QUERY, value: searchTerm },{key:QUERY_TYPE.SORT_BY,value:QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC}]
        );
      } else if (searchFor === CONSTANTS.SHOWS) {
        response = await tmdbServices.searchMovieOrShowOrPeopleOrAll(
          END_POINT_OF.SEARCH_SHOWS,
          [{ key: QUERY_TYPE.QUERY, value: searchTerm },{key:QUERY_TYPE.SORT_BY,value:QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC}]
        );
      } else if (searchFor === CONSTANTS.PEOPLE) {
        response = await tmdbServices.searchMovieOrShowOrPeopleOrAll(
          END_POINT_OF.SEARCH_PERSON,
          [{ key: QUERY_TYPE.QUERY, value: searchTerm },{key:QUERY_TYPE.SORT_BY,value:QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC}]
        );
      } else if (searchFor === CONSTANTS.ALL) {
        response = await tmdbServices.searchMovieOrShowOrPeopleOrAll(
          END_POINT_OF.SEARCH_ALL,
          [{ key: QUERY_TYPE.QUERY, value: searchTerm },{key:QUERY_TYPE.SORT_BY,value:QUERY_TYPE.SORT_BY_VALUES.POPULARITY_DESC}]
        );
      }
      if (response && response.results && response.results.length > 0) {
        const results = response.results;
        const formattedResults = results.map((result) => {
          return {
            ...result,
            label: `${result.title} (${new Date(
              result.release_date
            ).getFullYear()})`,
          };
        });
        setOptions(formattedResults);        
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  React.useEffect(() => {
    if (searchTerm.length > 3) {
      search();
    } else if (!searchTerm || searchTerm.length === 0) {
      setOptions([]);
    }
  }, [searchTerm]);

  const onSelection = (option) => {
    console.log('option',option);
    
    setValue(option)
    if (option) {
      if (option.media_type === "movie") {
        navigate(`/movie/${option.id}`);
      } else if (option.media_type === "tv") {
        navigate(`/show/${option.id}`);
      }
    }
  };

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          onSelection(newValue);
        }}
        inputValue={searchTerm}
        onInputChange={(event, newInputValue) => {
          handleInputChange(newInputValue);
        }}
        id="autocomplete"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={"Search"} />}
        getOptionLabel={(option) => option.label || ""}
        isOptionEqualToValue={(option)=>option.id=value.id}
      />
    </div>
  );
};

export default AutoComplete;

// {
//   "adult": false,
//   "backdrop_path": "/aDYSnJAK0BTVeE8osOy22Kz3SXY.jpg",
//   "id": 11,
//   "title": "Star Wars",
//   "original_language": "en",
//   "original_title": "Star Wars",
//   "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
//   "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
//   "media_type": "movie",
//   "genre_ids": [
//     12,
//     28,
//     878
//   ],
//   "popularity": 78.047,
//   "release_date": "1977-05-25",
//   "video": false,
//   "vote_average": 8.208,
//   "vote_count": 18528
// },
