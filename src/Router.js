import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/HomePage";
import MovieDetails from "./Pages/MovieDetails";
import ShowDetails from "./Pages/ShowDetails";
import PageNotFound from "./Pages/PageNotFound";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/movies" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
