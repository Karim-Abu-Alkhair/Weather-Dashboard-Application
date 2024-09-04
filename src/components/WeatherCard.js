import React, { Component } from "react";
import { Card, CardContent, Typography, Grid, Divider } from "@mui/material";
import Lottie from "lottie-react";
import sunnyAnimation from "./lottie-icons/sunny.json";
import cloudyAnimation from "./lottie-icons/cloudy.json";
import cloudAnimation from "./lottie-icons/cloud.json";
import rainAnimation from "./lottie-icons/rain.json";
import { Help } from "@mui/icons-material";

class WeatherCard extends Component {
  getWeatherIcon = (description) => {
    switch (description) {
      case "clear sky":
        return (
          <Lottie animationData={sunnyAnimation} height={100} width={100} />
        );
      case "few clouds":
      case "scattered clouds":
        return (
          <Lottie animationData={cloudyAnimation} height={100} width={100} />
        );
      case "broken clouds":
      case "overcast clouds":
        return (
          <Lottie animationData={cloudAnimation} height={100} width={100} />
        );
      case "light rain":
      case "moderate rain":
      case "heavy intensity rain":
        return (
          <Lottie animationData={rainAnimation} height={100} width={100} />
        );
      default:
        return <Help />;
    }
  };

  render() {
    const { data } = this.props;
    const temperatureCelsius = data.temperature - 273.15;
    const minTemperatureCelsius = data.temp_min - 273.15;
    const maxTemperatureCelsius = data.temp_max - 273.15;

    return (
      <Card className=" p-3 mt-12  mx-auto max-w-[300px]">
        <CardContent>
          <Typography variant="h3" component="h2">
            {data.city}
            <Typography variant="h6">{data.country}</Typography>
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            {this.getWeatherIcon(data.description)}
          </Grid>
          <Typography variant="h6" gutterBottom>
            {data.description}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h4">{temperatureCelsius.toFixed(2)}°</Typography>
          <Divider sx={{ my: 1 }} />
          <Grid container>
            <Grid item xs={6}>
              <Typography>Min/Max</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>
                {minTemperatureCelsius.toFixed(2)}°/
                {maxTemperatureCelsius.toFixed(2)}°
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 1 }} />
          <Grid container>
            <Grid item xs={6}>
              <Typography>Humidity</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{data.humidity}%</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 1 }} />
          <Grid container>
            <Grid item xs={6}>
              <Typography>Wind Speed</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>{data.wind_speed} M/s</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default WeatherCard;
