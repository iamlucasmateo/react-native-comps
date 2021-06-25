import React, { Component } from 'react';
import { Button, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ButtonScreen = () => {
    return (
        <View>
            <Button
                title="Go to components demo"
                onPress={() => console.log('pressed')}
            />
            <TouchableOpacity
                onPress={() => console.log('touch presed')}
                style={styles.touch}
            >
                <Text style={{paddingLeft: 10}}>Go to List Demo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touch: {
        padding: 5,
        margin: 5,
        backgroundColor: 'pink',
        color: 'green',
    }
})