import React from 'react'
import { Text, StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import StyledButton from './StyledButton';


const CarItem = (props) => {
    const {name, tagline, image} = props.car;
    return (
        <View style={styles.Carcontainer}>
            <ImageBackground source={image} style={styles.backimg}/>
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>
            <View style={styles.buttonCont}>
            <StyledButton/>
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
        height: Dimensions.get('window').height,
    },

    backimg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },

    buttonCont: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
    },

});

export default CarItem