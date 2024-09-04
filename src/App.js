import React, { Component } from "react";
import { Search } from "@mui/icons-material";
import { Grid, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { connect } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      invalidCity: false,
    };
  }

  componentDidMount() {
    const savedCity = localStorage.getItem("lastSearchedCity");
    if (savedCity) {
      this.setState({ city: savedCity });
      this.props.fetchWeather(savedCity);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { city } = this.state;
    if (city.trim() === "") {
      this.setState({ invalidCity: true });
      return;
    }

    this.setState({ invalidCity: false });

    localStorage.setItem("lastSearchedCity", city);

    this.props.fetchWeather(city);
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };

  render() {
    const { city, invalidCity } = this.state;
    const { loading, weatherData, error } = this.props;

    return (
      <div className="text-center mt-10">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h2" gutterBottom>
              WeatherApp
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ pt: "20px" }}>
          <form onSubmit={this.handleSubmit}>
            <Paper
              component="div"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 300,
              }}
            >
              <InputBase
                sx={{ flex: 1 }}
                placeholder="Enter a City"
                value={city}
                onChange={this.handleCityChange}
              />
              <IconButton type="submit" sx={{ p: "10px" }}>
                <Search />
              </IconButton>
            </Paper>
          </form>
        </Grid>

        <div>
          {invalidCity && <p>Please enter a city</p>}

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Please enter a valid city, {error}</p>
          ) : (
            weatherData && <WeatherCard data={weatherData} />
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    weatherData: state.weatherData,
    error: state.error,
  };
};

const mapDispatchToProps = {
  fetchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
