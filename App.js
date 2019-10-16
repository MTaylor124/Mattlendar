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
      low: '',
      high: '',
      cityName: '',
      description: '',
      todaysrealdate: '',
      weatherIcon: '',
      isClicked: false
    }
  }
  kelvin2farenheit(temp) {
    const returnTemp = Math.floor(((temp - 273.15) * (9/5)) + 32)
    return returnTemp
  }
  getTodaysDate() {
    const months = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ]
    const todaysdate = new Date()
    const todayDAY = todaysdate.getDate()
    const todayMonth = todaysdate.getMonth() + 1
    const bestDate = ('' + months[todayMonth] + ' ' + todayDAY)
    return bestDate
  }
  getForecast2() {
    this.setState({ todaysrealdate: this.getTodaysDate() })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=boston,us&appid=d2cf1542594e6c200fc6460bbe090913')
      .then((response) => response.json())
      .then((responseJson) => {
        let weather = this.kelvin2farenheit(responseJson.main.temp)
        let weatherMin = this.kelvin2farenheit(responseJson.main.temp_min)
        let weatherMax = this.kelvin2farenheit(responseJson.main.temp_max)
        let desc = responseJson.weather[0].description
        let actualWeather2 = responseJson
        let boname = responseJson.name
        let imageIcon = responseJson.weather[0].icon
        let completeIconLink = ('https://openweathermap.org/img/w/' + imageIcon + '.png')
        this.setState({ today: weather, doweather: true, debug: '', actualWeather: actualWeather2, cityName: boname, low: weatherMin, high: weatherMax, description: desc, weatherIcon: completeIconLink, isClicked: true})
    })
    .catch((error) => {
      alert(error.message)
    })
  }
  render() {
    let buttonText
    if (this.state.isClicked) {
      buttonText = '3 day forecast coming soon!'
    } else {
      buttonText = 'Tap here for Boston weather!'
    }
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
            theDate={this.state.todaysrealdate}
            iconLink={this.state.weatherIcon}
            />

        <TouchableOpacity
          onPress={() => {
            this.getForecast2()
          }}>
          <Text style={styles.weatherButton}>{buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  weatherButton: {
    fontSize: 23,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 30,
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'white',
    borderRadius: 30,
    // length: '80%'
  },
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
