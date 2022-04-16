import React from "react";
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { StatusBar } from "expo-status-bar";
import CarItem from "./components/CarItem";

const App = () => {
  return (
    <View style={styles.container}>
        <CarItem/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default App