import "./Current.css";
const Current = ({data}) => {
    if (!data) {
      
        return <h3>Enter a city name</h3>;

}
  return (
    <div className="today-section">
    <div>
      <h2 className="today-section__title">Today's weather in {data.location.name}</h2>
      <span className="today-section__date">{data.location.localtime}</span>
      <div className="today-section__weather-icon">
        <img src={data.current.condition.icon} alt="" />
      </div>

      <div className="today-section__temperature">
        <div className="min-tempt">
          <span className="label">Min:</span>
          <span className="value">{data.forecast.forecastday[0].day.mintemp_c}</span>
        </div>

        <div className="ave-tempt">
          <span className="ave-tempt__value">{data.forecast.forecastday[0].day.avgtemp_c}</span>
          <span className="ave-tempt__label">Average temperature</span>
        </div>

        <div className="max-tempt">
          <span className="label">Max:</span>
          <span className="value">{data.forecast.forecastday[0].day.maxtemp_c}</span>
        </div>
      </div>

      <div className="today-section__wind">
        <div className="wind__info">
          <span className="label">Wind direct:</span>
          <span className="value">{data.current.wind_dir}</span>
        </div>
        <div className="wind__info">
          <span className="label">Wind speed:</span>
          <span className="value">{data.current.wind_kph}</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Current;
