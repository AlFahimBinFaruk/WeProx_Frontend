const Result = ({ name, main: { humidity, temp }, weather }) => {
  return (
    <div className="result">
      <h5>Weather in {name}</h5>
      {/* temp is in kelvin to we have turn in into celcius */}
      <p className="fw-bold text-dark">Temp:{Math.round(temp - 272.15)}'c</p>
      <p className="fw-bold text-dark">Humidity:{humidity}</p>
      <p className="fw-bold text-dark">
        {weather.map((i, index) => {
          return (
            <div className="py-2 border-bottom">
              <h6 className="text-muted">weather parameters {index + 1}</h6>
              <img
                src={`https://openweathermap.org/img/wn/${i.icon}@2x.png`}
                alt="w-icon"
                width={100}
                height={100}
              />
              <p className="mb-0">
                <small>{i.main}</small>
              </p>
              <p className="mb-0">
                <small>{i.description}</small>
              </p>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default Result;
