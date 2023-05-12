import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TMDBServices from "../Services/TMDBServices";
import { END_POINT_OF } from "../Utils/ApiEndPoints";
import BasicDetails from "../Components/Common/BasicDetails";
import BackButton from "../Components/Common/BackButton";
import Cast from "../Components/Common/Cast";
const MovieDetails = () => {
  const params = useParams();
  const tMDBServices = TMDBServices();
  const [movieDetails, setMovieDetails] = useState({});

  const find = () => {
    tMDBServices
      .findMovieOrShow(`${END_POINT_OF.DETAILS_OF_MOVIE}${params.id}`)
      .then((response) => {
        setMovieDetails({ ...response });
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };
  useEffect(() => {
    find();
  }, []);

  return (
    <div >
      <div>
        <BackButton link={"/"} />
      </div>
      <div>
        <BasicDetails details={movieDetails} />
      </div>
      <Cast />
    </div>
  );
};

export default MovieDetails;

// {
// 	"adult": false,
// 	"backdrop_path": "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg",
// 	"belongs_to_collection": {
// 		"id": 422834,
// 		"name": "Ant-Man Collection",
// 		"poster_path": "/qxMs5TU6zOTQ7cbmBZ6xGvHUDa2.jpg",
// 		"backdrop_path": "/2KjtWUBiksmN8LsUouaZnxocu5N.jpg"
// 	},
// 	"budget": 200000000,
// 	"genres": [
// 		{
// 			"id": 28,
// 			"name": "Action"
// 		},
// 		{
// 			"id": 12,
// 			"name": "Adventure"
// 		},
// 		{
// 			"id": 878,
// 			"name": "Science Fiction"
// 		}
// 	],
// 	"homepage": "https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania",
// 	"id": 640146,
// 	"imdb_id": "tt10954600",
// 	"original_language": "en",
// 	"original_title": "Ant-Man and the Wasp: Quantumania",
// 	"overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
// 	"popularity": 3818.146,
// 	"poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
// 	"production_companies": [
// 		{
// 			"id": 420,
// 			"logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
// 			"name": "Marvel Studios",
// 			"origin_country": "US"
// 		},
// 		{
// 			"id": 176762,
// 			"logo_path": null,
// 			"name": "Kevin Feige Productions",
// 			"origin_country": "US"
// 		}
// 	],
// 	"production_countries": [
// 		{
// 			"iso_3166_1": "US",
// 			"name": "United States of America"
// 		}
// 	],
// 	"release_date": "2023-02-15",
// 	"revenue": 464566092,
// 	"runtime": 125,
// 	"spoken_languages": [
// 		{
// 			"english_name": "English",
// 			"iso_639_1": "en",
// 			"name": "English"
// 		}
// 	],
// 	"status": "Released",
// 	"tagline": "Witness the beginning of a new dynasty.",
// 	"title": "Ant-Man and the Wasp: Quantumania",
// 	"video": false,
// 	"vote_average": 6.571,
// 	"vote_count": 2323
// }
