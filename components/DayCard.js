import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios'

export default function DayCard (props) {
  let weatherPic
  let highTemp
  let lowTemp
  if (props.iconLink == '') {
    weatherPic = (<Text></Text>)
    highTemp = (<Text></Text>)
    lowTemp = (<Text></Text>)
    currentTemp = (<Text></Text>)
    introComment = (<View style={styles.introSpacing}><Text style={styles.intro}>Click below for Bostons Weather!</Text></View>)
  } else {
    highTemp = (<Text>High: </Text>)
    lowTemp = (<Text>Low: </Text>)
    currentTemp = (<Text>Current Temp: </Text>)
    introComment = (<Text></Text>)
    weatherPic = (
      <View style={styles.weatherPicStyle}>
      <Image source={{uri: props.iconLink}}
     style={{width: 200, height: 200}} />
     <Text style={styles.imageText}>{props.description}</Text>
     </View>
    )
  }
  return (
    <View style={styles.card}>
    <View>{introComment}</View>
        <Text style={styles.city}>{props.boston.name}</Text>
        <Text style={styles.date}>{props.theDate}</Text>
      <View>{weatherPic}</View>
      <View><Text style={styles.current}>{currentTemp}{props.current}</Text></View>
        <View style={styles.temps}>
        <Text style={styles.temp}>{highTemp}{props.high}</Text>
        <Text style={styles.temp}>{lowTemp}{props.low}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  introSpacing: {
    paddingTop: 200
  },
  current: {
    fontSize: 33,
    fontWeight: '600'
  },
  intro: {
    fontSize: 22.5,
    justifyContent: 'center'
  },
  imageText: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'gray'
  },
  weatherPicStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  location: {
    fontSize: 25
  },
  date: {
    paddingBottom: 10,
    fontSize: 20
  },
  temp: {
    fontSize: 25,
    paddingHorizontal: 38
  },
  temps: {
    flexDirection: 'row'
  },
  city: {
    fontSize: 70,
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
    paddingTop: 0,
    marginTop: 10,
    marginBottom: 80,
    paddingHorizontal: 15,
    borderRadius: 30
  },
  weatherPicText: {
    color: 'white',
    backgroundColor: 'white'
  }
});
