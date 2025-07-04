import { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./index.css";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }
  };

  return (
    <div className="app card bg-light shadow-lg rounded-5 p-4 p-md-4 mx-auto mb-5">
      <div className="card-body bg-light">
        <img
          id="logo-top"
          src="../favicon.png"
          alt="App Logo"
          className="img-fluid"
          style={{ maxWidth: "65px" }}
        />
        <h1 className="mt-2 ">
          <b>Real-Time Weather Data</b>
        </h1>
        <small className="fs-6">🌤️ Instant Weather Intel 🌧️</small>
        <div className="container mb-4 mt-4">
          <div className="row justify-content-center g-2">
            <div className="col-auto me-1">
              <input
                className="bg-light rounded-4 p-2 text-dark shadow"
                type="text"
                placeholder="Enter city"
                value={city}
                id="input-search"
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    fetchWeather();
                  }
                }}
              />
            </div>
            <div className="col-auto text-sm-start">
              <button
                className="rounded-5 shadow"
                onClick={() => {
                  fetchWeather();
                }}
              >
                <b>SEARCH</b>
              </button>
            </div>
          </div>
        </div>
        {error && (
          <p className="error">
            <b>{error}</b>
          </p>
        )}

        {weather && <Weather data={weather} />}
        <nav className="navbar navbar-expand navbar-dark bg-light fixed-bottom p-2">
          <div className="container-fluid d-flex justify-content-center g-2">
            <div className="row justify-content-center g-2">
              <div className="col-auto">
                <small className="fs-6 text-black">
                  <b>Copyright © 2024 by Filippos Obrijanu</b>
                </small>
              </div>
              <div className="col-auto">
                <a
                  href="https://github.com/filipposobrijanu"
                  className="text-decoration-none text-reset hover-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
