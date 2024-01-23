import "./Forecast.css";

const Forecast = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (!data || !data.forecast) {
    return <div>Loading...</div>;
  }

  const slicedData = data.forecast.forecastday.slice(1, 6);

  return (
    <card className="forecast">
      <div className="weather-row">
        <h3 className="weather-grid">5-day forecast</h3>
        <div className="">
          {slicedData.map((day) => (
            <div className="weather-card" key={day.date}>
              <h2 className="date">{days[new Date(day.date).getDay()]}</h2>
              <h2>{day.date}</h2>
              <img
                src={day.day.condition.icon}
                alt={`Weather for ${day.date}`}
              />
              <h2>Max: {day.day.maxtemp_c}°C</h2>
              <h2>Min: {day.day.mintemp_c}°C</h2>
            </div>
          ))}
        </div>
      </div>
    </card>
  );
};

export default Forecast;
