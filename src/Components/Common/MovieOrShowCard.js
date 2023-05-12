import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Card } from "@mui/material";
import { CONSTANTS } from "../../Helpers/Constants";

const MovieOrShowCard = ({ details, type }) => {
  return (
    <Link to={`/${type === CONSTANTS.MOVIES ? "movie" : "show"}/${details.id}`}>
      <Card>
        <div>
          <img
            className="img-fluid"
            src={CONSTANTS.ENV.REACT_APP_API_IMAGE_URL + details.poster_path}
            alt={details.title}
            loading="lazy"
          />
        </div>
        <Rating
          name="read-only"
          value={details.vote_average}
          precision={0.5}
          readOnly
          max={10}
        />
        <p>{details.vote_average}/10</p>
      </Card>
    </Link>
  );
};

export default MovieOrShowCard;

// "adult": false,
// "backdrop_path": "/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
// "genre_ids": [
// 	27,
// 	9648,
// 	53
// ],
// "id": 758323,
// "original_language": "en",
// "original_title": "The Pope's Exorcist",
// "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
// "popularity": 5089.969,
// "poster_path": "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
// "release_date": "2023-04-05",
// "title": "The Pope's Exorcist",
// "video": false,
// "vote_average": 7.4,
// "vote_count": 619
