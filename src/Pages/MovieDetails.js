import React, { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useParams } from "react-router";
import TMDBServices from "../Services/TMDBServices";
import { END_POINT_OF } from "../Utils/ApiEndPoints";
import { CONSTANTS } from "../Helpers/Constants";
import BackButton from "../Components/Common/BackButton";
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: "100%",
  paddingTop: "150%", // 2:3 ratio
}));

const MovieDetailPage = () => {
  const params = useParams();
  const tMDBServices = TMDBServices();
  const [movieDetails, setMovieDetails] = useState(null);

  const find = useCallback(() => {
    tMDBServices
      .findMovieOrShow(`${END_POINT_OF.DETAILS_OF_MOVIE}${params.id}`)
      .then((response) => {
        setMovieDetails({ ...response });
      })
      .catch((err) => {
        console.log("error: ", err);
      })
      .finally(() => {
      });
  }, [params.id, tMDBServices]);

  useEffect(() => {
    find();
  }, [find]);
  const {
    title,
    poster_path,
    genres,
    release_date,
    runtime,
    overview,
    vote_average,
    production_companies,
    spoken_languages,
    budget,
    revenue,
  } = movieDetails || {
    title: "",
    poster_path: "",
    genres: "",
    release_date: "",
    runtime: "",
    overview: "",
    vote_average: "",
    production_companies: "",
    spoken_languages: "",
    budget: "",
    revenue: "",
  };

  return (
    <React.Fragment>
      {movieDetails && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <StyledCardMedia
                  image={`${CONSTANTS.ENV.REACT_APP_API_IMAGE_URL}${poster_path}`}
                  title={title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {genres.map((genre) => genre.name).join(", ")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Release Date: {release_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Runtime: {runtime} min
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average Rating: {vote_average}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={9}>
              <Typography variant="h5" component="h2">
                Overview
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {overview}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3">
                  Production Companies
                </Typography>
                <Grid container spacing={2} sx={{ p: 2 }}>
                  {production_companies.map((company) => (
                    <Grid item xs={12} sm={6} md={4} key={company.id}>
                      <Paper sx={{ p: 2 }}>{company.name}</Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3">
                  Spoken Languages
                </Typography>
                <ButtonGroup variant="text" aria-label="text button group">
                  {spoken_languages.map((lang) => (
                    <Button key={lang.iso_639_1}>{lang.english_name}</Button>
                  ))}
                </ButtonGroup>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" component="h3">
                  Budget and Revenue
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Budget:{" "}
                  {budget.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Revenue:{" "}
                  {revenue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <BackButton link={"/movies"} />
        </Box>
      )}
    </React.Fragment>
  );
};

export default MovieDetailPage;
