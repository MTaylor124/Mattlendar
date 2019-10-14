import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayCard from './components/DayCard'
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MATTLENDAR</Text>
      <DayCard/>
    </View>
  );
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
