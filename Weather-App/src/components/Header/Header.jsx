import React from "react";
import "./Header.css";

const Header = ({ search, onSearchChange, onSearchSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "Stockholm") {
      console.log("handleSubmit in Header called", { search });
      onSearchSubmit(search);
    }
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = `${position.coords.latitude},${position.coords.longitude}`;
        onSearchChange({ target: { value: currentLocation } });
        onSearchSubmit(currentLocation);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  };

  return (
    <div className="weather-input">
      <form onSubmit={handleSubmit}>
        <input
          className="city-input"
          id="search-input"
          type="text"
          value={search}
          onChange={onSearchChange}
          placeholder="City Name"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <button className="location-btn" onClick={handleLocationSearch}>
        Use Current Location
      </button>
    </div>
  );
};

export default Header;
