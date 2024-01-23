const API_KEY = import.meta.env.VITE_API_KEY;

const fetchData = async (search) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=7&aqi=no&alerts=no`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const handleSearchSubmit = async (search, setData) => {
  try {
    const data = await fetchData(search);
    console.log("Updating state with new data:", data);
    setData(data); // Uppdaterar staten i App-komponenten med de nya datan
  } catch (error) {
    console.error("Error in handleSearchSubmit:", error);
  }
};


export { fetchData, handleSearchSubmit };
