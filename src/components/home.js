import React from "react";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div>
      <h2 className="home-header">Home Page</h2>
      <img
        className="tram-map"
        src="/images/metrolink-network-map-feb-2023.jpg"
        alt="Manchester Metrolink Tram Map"
      />
    </div>
  );
};

export default HomePage;
