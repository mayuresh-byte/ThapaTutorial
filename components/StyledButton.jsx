import React from 'react'
import { StyleSheet, Text, View, Button} from "react-native";

const StyledButton = () => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
            <Button 
                title='Custom Order'
                // onPress={() => console.warn('Hey')}
            />
            </View>
            <View style={styles.button}>
            <Button
                title='Existing Inventory'
                // onPress={() => console.warn('Hey There')}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding: 15
    },
    button: {
        marginTop: 10,
    }

});

export default StyledButton