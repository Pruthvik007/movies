import * as React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Paper } from "@mui/material";
import { useParams } from "react-router";
import TMDBServices from "../Services/TMDBServices";
import { END_POINT_OF } from "../Utils/ApiEndPoints";
import { CONSTANTS } from "../Helpers/Constants";
import BackButton from "../Components/Common/BackButton";

const Container = styled(Grid)({
  flexGrow: 1,
  margin: "20px",
});

const ShowDetails = () => {
  const params = useParams();
  const tMDBServices = TMDBServices();
  const [showDetails, setShowDetails] = React.useState(null);

  const find = React.useCallback(() => {
    tMDBServices
      .findMovieOrShow(`${END_POINT_OF.DETAILS_OF_SHOWS}${params.id}`)
      .then((response) => {
        setShowDetails({ ...response });
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [params.id, tMDBServices]);
  React.useEffect(() => {
    find();
  }, [find]);

  return (
    <React.Fragment>
      {showDetails && (
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <img
                src={`${CONSTANTS.ENV.REACT_APP_API_IMAGE_URL}${showDetails.poster_path}`}
                alt={showDetails.name}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                {showDetails.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                {showDetails.genres.map((genre) => genre.name).join(", ")}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {showDetails.overview}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Created By:
                {showDetails.created_by
                  .map((creator) => creator.name)
                  .join(", ")}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                First Air Date: {showDetails.first_air_date}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Last Air Date: {showDetails.last_air_date}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Status: {showDetails.status}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Networks:
                {showDetails.networks.map((network) => network.name).join(", ")}
              </Typography>
              <Grid
                justifyContent="center"
                alignItems="center"
                container
                spacing={2}
                sx={{ p: 2 }}
              >
                {showDetails.production_companies.map((company) => (
                  <Grid item xs={12} sm={6} md={4} key={company.id}>
                    <Paper sx={{ p: 2 }}>{company.name}</Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
      <BackButton link={"/movies"} />
    </React.Fragment>
  );
};

export default ShowDetails;
