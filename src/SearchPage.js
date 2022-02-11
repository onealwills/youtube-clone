import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";
// import ChannelRow from "./ChannelRow";
// import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
    </div>
  );
}

export default SearchPage;
