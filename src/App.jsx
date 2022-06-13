import { MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Axios from "axios";
import "./App.css";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [loading, setLoading] = useState(false);
  //get weather
  const getWeather = async () => {
    if (cityName) {
      setLoading(true);
      try {
        const res = await Axios.get(`http://localhost:3000/api?q=${cityName}`);
        //set weather info
        setWeatherInfo(res.data);
      } catch (error) {
        alert(error.response.data);
      }
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <h4>Loading.....</h4>
      </div>
    );
  }
  return (
    <div className="App container vh-100 d-flex justify-content-center align-items-center">
      <MDBCol size="12" lg="4" className="text-center">
        <div className="main">
          {/* result */}
          {weatherInfo && (
            <>
              {weatherInfo.cod === 200 ? (
                <Result {...weatherInfo} />
              ) : (
                <p className="text-danger fw-bold">{weatherInfo.message}</p>
              )}
            </>
          )}

          {/* weather input */}
          <MDBCol size="6" className="weather-input mx-auto">
            <MDBInput
              type="text"
              label="Enter city name"
              className="mb-2"
              size="sm"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            {/* see weather btn */}
            <MDBBtn block size="sm" onClick={getWeather}>
              See weather
            </MDBBtn>
          </MDBCol>
        </div>
      </MDBCol>
    </div>
  );
}

export default App;
