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
const HomePage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [type, setType] = React.useState(CONSTANTS.MOVIES);
  const [genre, setGenre] = React.useState(CONSTANTS.GENRES_LIST[0]);
  const handleChange = (event, newValue) => {
    setGenre(CONSTANTS.GENRES_LIST[0]);
    setValue(newValue);
  };

  const tabList = [
    {
      label: "Discover Movies",
      category: CONSTANTS.CATEGORY.DISCOVER,
      type: CONSTANTS.MOVIES,
      endPoint: END_POINT_OF.DISCOVER_MOVIES,
    },
    {
      label: "Discover Shows",
      category: CONSTANTS.CATEGORY.DISCOVER,
      type: CONSTANTS.SHOWS,
      endPoint: END_POINT_OF.DISCOVER_SHOWS,
    },
    {
      label: "Trending Movies",
      category: CONSTANTS.CATEGORY.TRENDING,
      type: CONSTANTS.MOVIES,
      endPoint: END_POINT_OF.TRENDING_MOVIES,
    },
    {
      label: "Trending Shows",
      category: CONSTANTS.CATEGORY.TRENDING,
      type: CONSTANTS.SHOWS,
      endPoint: END_POINT_OF.TRENDING_SHOWS,
    },
    {
      label: "Latest Movies",
      category: CONSTANTS.CATEGORY.LATEST,
      type: CONSTANTS.MOVIES,
      endPoint: END_POINT_OF.LATEST_MOVIES,
    },
    {
      label: "Latest Shows",
      category: CONSTANTS.CATEGORY.LATEST,
      type: CONSTANTS.SHOWS,
      endPoint: END_POINT_OF.LATEST_SHOWS,
    },
  ];

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
          >
            {tabList
              .filter((tab) => {
                return tab.type === type;
              })
              .map((tab, index) => {
                return (
                  <Tab
                    sx={{ paddingBottom: "1.2rem", paddingTop: "1.2rem" }}
                    disabled={tab.category === CONSTANTS.CATEGORY.LATEST}
                    key={tab.label}
                    label={tab.label}
                    {...a11yProps(index)}
                  />
                );
              })}
          </Tabs>
          <div style={{ position: "absolute", right: "0px" }}>
            <Dropdown
              fieldName={"genre"}
              label={"Genres"}
              onChange={(option) => {
                setGenre(option);
              }}
              options={CONSTANTS.GENRES_LIST}
              value={genre}
            />
          </div>
        </Box>
      </div>
      {tabList
        .filter((tab) => {
          return tab.type === type;
        })
        .map((tab, index) => {
          return (
            <TabPanel key={tab.label} value={value} index={index}>
              <MoviesOrShows
                endPoint={tab.endPoint}
                type={type}
                category={tab.category}
              />
            </TabPanel>
          );
        })}
    </Box>
  );
};

export default HomePage;
