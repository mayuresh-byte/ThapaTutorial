import React from 'react'
import { Text, StyleSheet, View, FlatList, Dimensions} from 'react-native'
import CarItem from '../CarItem'
import cars from './cars'


const CarListindex = () => {
  return (
    <View style={styles.container}>
        <FlatList 
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%'
    }
})

export default CarListindex