import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";

function App() {
  return (
    <div className="app">
      {/* <h1>Hello world</h1> */}

      {/* header */}
      <Header />

      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>

      {/* sidebar */}
      {/* recommended video */}
    </div>
  );
}

export default App;
