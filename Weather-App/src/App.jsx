import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Current from "./components/Current/Current";
import Forecast from "./components/Forecast/Forecast";
import { handleSearchSubmit } from "./services/WeatherService";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("Stockholm");
  const initialLoadDone = useRef(false);

  
  const onSearchSubmit = (searchTerm) => {
    handleSearchSubmit(searchTerm, setData);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!initialLoadDone.current) {
      handleSearchSubmit("Stockholm", setData);
      initialLoadDone.current = true; 
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
      <Header
        search={search}
        onSearchChange={handleSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      <Current data={data} />
      <Forecast data={data} />
    </div>
    </div>
  );
}

export default App;
