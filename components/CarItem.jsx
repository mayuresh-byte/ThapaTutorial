import React from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'


const CarItem = () => {
    return (
        <View style={styles.Carcontainer}>
            <ImageBackground source={require('../assets/images/ModelS.jpeg')} style={styles.backimg} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at 690K $</Text>
            </View>
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

    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    subtitle: {
        fontSize: 20,
        color: '#5c5e62'
    },

    Carcontainer: {
        width: '100%',
        height: '100%',
    },

    backimg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },

});

export default CarItem