import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios'

export default function DayCard (props) {
  return (
    <View style={styles.card}>
      <Text style={styles.location}>TODAY</Text>
      <Text style={styles.weekday}>{props.boston.name}</Text>
      <Text style={styles.date}></Text>

        <View style={styles.weatherpic}><Text styles={styles.weatherPicText}>{props.description}</Text></View>
        <View><Text>current temp: {props.current}</Text></View>
      <View style={styles.temps}>
        <Text style={styles.temp}>High: {props.high}</Text>
        <Text style={styles.temp}>Low: {props.low}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  location: {
    fontSize: 25
  },
  date: {
    paddingBottom: 20,
    fontSize: 20
  },
  temp: {
    fontSize: 35,
    padding: 20
  },
  temps: {
    flexDirection: 'row'
  },
  weekday: {
    fontSize: 50,
    paddingBottom: 10,
    fontWeight: "600"
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'black',
    borderWidth: 3,
    paddingTop: 20,
    marginTop: 10,
    marginBottom: 80,
    paddingHorizontal: 15,
    borderRadius: 30
  },
  weatherpic: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 115,
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 25,
    marginBottom: 20
  },
  weatherPicText: {
    color: 'white',
    backgroundColor: 'white'
  }
});
