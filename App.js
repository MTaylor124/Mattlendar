import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DayCard from './components/DayCard'
import axios from 'axios'
const DEFAULT = "02101"

const API_KEY = "d2cf1542594e6c200fc6460bbe090913"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      zipcode: DEFAULT,
      days: [],

    }
  }
  getForecast(zip) {
    const request_url = ("api.openweathermap.org/data/weather?zip=" + zip + "us&appid=" + API_KEY + ".json")
    axios.get(request_url).then((response) => {
      
    })
  }
  render() {
    if ( this.state.days.length < 1) {
      this.getForecast(this.state.zipcode)
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <Text style={styles.title}>MATTLENDAR FORECAST</Text>
        <DayCard/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
