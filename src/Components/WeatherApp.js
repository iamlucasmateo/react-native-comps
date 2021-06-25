import React, { Component } from 'react';
import { Text, Image, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export class WeatherApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Weather App</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Type here..."
                />
                <TouchableOpacity title="fetch"/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textInput: {
        padding: 5,
        borderWidth: 2,
        borderColor: "black",
        width: '50%',
        margin: 'auto',
    }
})