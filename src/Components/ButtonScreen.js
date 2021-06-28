import React, { Component } from 'react';
import { Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export const ButtonScreen = (props) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            >
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Boiler')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Go to Basic Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('List')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Go to List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('WeatherApp')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Go to WeatherApp</Text>
            </TouchableOpacity>
        
            </LinearGradient>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button: {
        padding: 5,
        margin: 5,
        backgroundColor: 'pink',
        color: 'green',
        textAlign: 'center',
        width: '50%',
    },
    buttonText: {
        textAlign: 'center',
    },
    background: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 50,
    },
    
})