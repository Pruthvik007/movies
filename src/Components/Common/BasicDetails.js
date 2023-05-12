import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Paper,
  Rating,
  Stack,
} from "@mui/material";
import React from "react";
import Image from "./MUI/Image";
const BasicDetails = ({ details }) => {
  return (
    <div id="mainCard">
      <div>
        <Stack direction="row" spacing={2}>
          <Paper>
            <Image
              src={process.env.REACT_APP_API_IMAGE_URL + details.poster_path}
              alt={details.title}
            />

            {details.vote_average}
            <br />
            <Rating
              name="read-only"
              value={details.vote_average || 10}
              precision={0.5}
              readOnly
              max={10}
            />
          </Paper>
          <Container>
            <Card id="basicDetails">
              <h4>
                {details.original_title} (
                {new Date(details.release_date).getFullYear()})
              </h4>
              <label htmlFor="releaseDate">Release Date:-&nbsp;</label>
              <p id="releaseDate">{details.release_date}</p>
            </Card>
            <br />
            <Card>
              <p>{details.tagline}</p>
              <div>
                Overview
                <p>{details.overview}</p>
              </div>
            </Card><br/>
            <Card>
            <ButtonGroup variant="text" aria-label="text button group">
              {details?.genres?.map((genre) => {
                return <Button key={genre.id}>{genre.name}</Button>;
              })}
            </ButtonGroup>
            <div>
              Duration:{" "}
              {details.runtime > 60
                ? Math.round((details.runtime / 60)*10)/10 + " hrs"
                : details.runtime + " mins"}
            </div>
            </Card>
          </Container>
        </Stack>
      </div>
    </div>
  );
};

export default BasicDetails;
