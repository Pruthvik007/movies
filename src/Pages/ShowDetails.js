import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import TMDBServices from "../Services/TMDBServices";
import { END_POINT_OF } from "../Utils/ApiEndPoints";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Paper,
  Rating,
  Stack,
} from "@mui/material";
import Image from "../Components/Common/MUI/Image";
import BackButton from "../Components/Common/BackButton";
import { CONSTANTS } from "../Helpers/Constants";
const ShowDetails = () => {
  const params = useParams();
  const tMDBServices = TMDBServices();
  const [showDetails, setShowDetails] = useState({});

  const find = () => {
    tMDBServices
      .findMovieOrShow(`${END_POINT_OF.DETAILS_OF_SHOWS}${params.id}`)
      .then((response) => {
        setShowDetails({ ...response });
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };
  useEffect(() => {
    find();
  }, []);

  return (
    <div id="mainCard">
      <BackButton link={"/"} />
      <div>
        <Stack direction="row" spacing={2}>
          <Paper>
            <Image
              src={
                CONSTANTS.ENV.REACT_APP_API_IMAGE_URL + showDetails.poster_path
              }
              alt={showDetails.title}
            />

            {showDetails.vote_average}
            <br />
            <Rating
              name="read-only"
              value={showDetails.vote_average || 10}
              precision={0.5}
              readOnly
              max={10}
            />
          </Paper>
          <Container>
            <Card id="basicDetails">
              <h4>
                {showDetails.original_name} (
                {new Date(showDetails.first_air_date).getFullYear()})
              </h4>
              <label htmlFor="releaseDate">Release Date:-&nbsp;</label>
              <p id="releaseDate">{showDetails.first_air_date}</p>
            </Card>
            <br />
            <Card>
              <p>{showDetails.tagline}</p>
              <div>
                Overview
                <p>{showDetails.overview}</p>
              </div>
            </Card>
            <br />
            <Card>
              <ButtonGroup variant="text" aria-label="text button group">
                {showDetails?.genres?.map((genre) => {
                  return <Button key={genre.id}>{genre.name}</Button>;
                })}
              </ButtonGroup>
            </Card>
          </Container>
        </Stack>
      </div>
    </div>
  );
};

export default ShowDetails;
