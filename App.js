import React from "react";
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { StatusBar } from "expo-status-bar";
import CarListindex from "./components/CarsList/CarListindex";
import Header from "./components/Header";


const App = () => {
  return (
    
    <View style={styles.container}>
      <Header/>
        {/* <CarItem name={'Model 3'} tagline={'Starting at 690K $'} image={require('./assets/images/ModelS.jpeg')}/> */}
        <CarListindex/>
        
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