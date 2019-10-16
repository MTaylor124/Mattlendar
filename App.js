import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import DayCard from './components/DayCard'
import axios from 'axios'
const DEFAULT = "02048"

const API_KEY = "d2cf1542594e6c200fc6460bbe090913"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      today: '',
      debug: '',
      actualWeather: [],
      current: 0,
      low: 0,
      high: 0,
      cityName: '',
      description: ''
    }
  }
  kelvin2farenheit(temp) {
    const returnTemp = Math.floor(((temp - 273.15) * (9/5)) + 32)
    return returnTemp
  }
  getForecast2(zip) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=boston,us&appid=d2cf1542594e6c200fc6460bbe090913')
      .then((response) => response.json())
      .then((responseJson) => {
        let weather = this.kelvin2farenheit(responseJson.main.temp)
        let weatherMin = this.kelvin2farenheit(responseJson.main.temp_min)
        let weatherMax = this.kelvin2farenheit(responseJson.main.temp_max)
        let desc = responseJson.weather[0].description
        let actualWeather2 = responseJson
        let boname = responseJson.name
        this.setState({ today: weather, doweather: true, debug: '', actualWeather: actualWeather2, cityName: boname, low: weatherMin, high: weatherMax, description: desc})
    })
    .catch((error) => {
      alert(error.message)
    })
  }
  render() {

    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Text style={styles.title}>MATTLENDAR FORECAST</Text>
        <Text style={styles.debug}>{this.state.debug}</Text>
        <DayCard
          boston={this.state.actualWeather}
          current={this.state.today}
          low={this.state.low}
          high={this.state.high}
          description={this.state.description}
          />
        <TouchableOpacity
          onPress={() => {
            this.getForecast2(this.state.zipcode)
          }}>
          <Text>click here for boston weather
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  debug: {
    color: 'white',
    fontSize: 20
  },
  title: {
    color: 'white',
    paddingTop: 35,
    fontSize: 30,
    fontWeight: "800"
  },
  container: {
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
