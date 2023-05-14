import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MoviesOrShows from "../Components/MoviesOrShows";
import { END_POINT_OF } from "../Utils/ApiEndPoints";
import TabPanel, { a11yProps } from "../Components/Common/MUI/TabPanel";
import Header from "../Components/Header";
import { CONSTANTS } from "../Helpers/Constants";
import { useTheme } from "@mui/material";
import Dropdown from "../Components/Common/MUI/Dropdown";
import { useGenres } from "../Helpers/Context";

const HomePage = () => {
  const { genres } = useGenres();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [type, setType] = React.useState(CONSTANTS.MOVIES);
  const [genre, setGenre] = React.useState(
    type === CONSTANTS.MOVIES ? genres.movies[0] : genres.shows[0]
  );
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setGenre(type === CONSTANTS.MOVIES ? genres.movies[0] : genres.shows[0]);
    setValue(newValue);
  };

  const tabList = [];
  Object.keys(CONSTANTS.CATEGORIES).forEach((category) => {
    tabList.push({
      label: CONSTANTS.CATEGORIES[category] + " " + type,
      category: CONSTANTS.CATEGORIES[category],
      endPoint: END_POINT_OF.MOVIES[CONSTANTS.CATEGORIES[category]],
      type: CONSTANTS.MOVIES,
    });
    tabList.push({
      label: CONSTANTS.CATEGORIES[category] + " " + type,
      category: CONSTANTS.CATEGORIES[category],
      endPoint: END_POINT_OF.SHOWS[CONSTANTS.CATEGORIES[category]],
      type: CONSTANTS.SHOWS,
    });
  });

  return (
    <Box className="homePage" sx={{ width: "100%", maxWidth: "100%" }}>
      <Header setType={setType} />
      <div
        className="tabs-container"
        style={{ backgroundColor: theme.palette.background.paper }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Movies and Shows"
            sx={{ overflowX: "auto", width: "100%" }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabList
              .filter((tab) => tab.type === type)
              .map((tab, index) => {
                return (
                  <Tab
                    sx={{ paddingBottom: "1.2rem", paddingTop: "1.2rem" }}
                    key={tab.label}
                    label={tab.label}
                    {...a11yProps(index)}
                  />
                );
              })}
          </Tabs>
          <div style={{}}>
            <Dropdown
              fieldName={"category"}
              label={"Category"}
              onChange={(value) => {
                setGenre(value);
              }}
              options={type === CONSTANTS.MOVIES ? genres.movies : genres.shows}
              value={genre}
            />
          </div>
        </Box>
      </div>
      {tabList
        .filter((tab) => tab.type === type)
        .map((tab, index) => {
          return (
            <TabPanel key={tab.label} value={value} index={index}>
              <MoviesOrShows
                endPoint={tab.endPoint}
                type={type}
                category={tab.category}
                genre={genre}
              />
            </TabPanel>
          );
        })}
    </Box>
  );
};

export default HomePage;
