import React from "react";
import { Link } from "react-router-dom";

const Tabs = ({ tabs }) => {
  return (
    <nav class="nav">
      {tabs.length > 0 &&
        tabs.map((tab) => {
          return (
            <Link to={tab.link} class="nav-link active" aria-current="page">
              {tab.label}
            </Link>
          );
        })}
    </nav>
  );
};

export default Tabs;
