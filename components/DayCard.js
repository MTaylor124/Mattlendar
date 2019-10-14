import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DayCard () {
  return (
    <View style={styles.card}>
      <Text style={styles.weekday}>Monday</Text>
      <Text style={styles.date}>1/1/19</Text>

        <View style={styles.weatherpic}><Text styles={styles.weatherPicText}>sunny</Text></View>
      <Text style={styles.temp}>High: 420</Text>
      <Text style={styles.temp}>Low: 69</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    paddingBottom: 20,
    fontSize: 20
  },
  temp: {
    fontSize: 35
  },
  weekday: {
    fontSize: 50,
    paddingBottom: 10
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'black',
    borderWidth: 3,
    paddingVertical: 30,
    marginVertical: 20,
    paddingHorizontal: 55,
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
