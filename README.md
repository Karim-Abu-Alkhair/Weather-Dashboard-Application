# WeatherApp Documentation

## Overview

WeatherApp is a React application that fetches weather data for a specified city using the OpenWeatherMap API. It allows users to search for a city, view current weather details, and have their last searched city persist across page refreshes.

## Key Features

- **City Search:** Users can search for a city's weather by entering the city name in the search bar.
- **Weather Display:** The application displays the weather data, including temperature, humidity, wind speed, and weather description.
- **Persistent Search:** The last searched city is saved in local storage and is automatically fetched when the user revisits or refreshes the page.

## Components

### `App` Component

The `App` component is the main component that handles the city's weather search and display.

#### State Variables

- `city`: Stores the current city entered by the user.
- `invalidCity`: Boolean flag indicating whether the entered city is invalid.

#### Methods

- `componentDidMount`:

  - Fetches the last searched city from local storage.
  - Triggers weather data fetching if a city is found in local storage.

- `handleSubmit`:

  - Prevents form submission if the input is empty.
  - Saves the searched city in local storage.
  - Dispatches the `fetchWeather` action to fetch weather data for the entered city.

- `handleCityChange`:
  - Updates the `city` state as the user types.

#### JSX Structure

The component renders a search bar, a `WeatherCard` to display the weather data, and a footer. Conditional rendering is used to display loading states, errors, and the weather card based on the state.

### `WeatherCard` Component

This component is responsible for displaying the weather data. It shows details such as temperature, humidity, wind speed, and a weather description.

### `Footer` Component

A simple footer component that displays the creator's name and the current year.

## Redux Actions

### `fetchWeather(city)`

This action fetches the weather data for the specified city using the OpenWeatherMap API. It dispatches the following actions:

- `FETCH_WEATHER_REQUEST`: Dispatched when the weather fetching process starts.
- `FETCH_WEATHER_SUCCESS`: Dispatched with the weather data if the API request is successful.
- `FETCH_WEATHER_FAILURE`: Dispatched with an error message if the API request fails.

## Redux Reducer

### `weatherReducer`

Manages the state of the weather data in the application:

- `loading`: Indicates whether the weather data is currently being fetched.
- `weatherData`: Stores the fetched weather data.
- `error`: Stores any error messages if the data fetching fails.

## Store Configuration

The store is configured using Redux Toolkit's `configureStore` function, which includes the `weatherReducer`.

## Local Storage

- **Last Searched City:** The application saves the last searched city in `localStorage` under the key `lastSearchedCity`. This allows the app to reload the last searched city's weather data automatically when the user revisits the page.

## How to Use

1. **Search for a City:**
   - Enter the name of a city in the search bar.
   - Press the search button to fetch the weather data.
2. **View Weather Data:**

   - If the city is valid, the weather details will be displayed on the screen.
   - If the city is invalid, an error message will be shown.

3. **Persistent Search:**
   - The last searched city is saved automatically. If you refresh the page, the app will load the weather data for the last searched city.
