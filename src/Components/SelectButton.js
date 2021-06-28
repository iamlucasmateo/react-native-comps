import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export const SelectButton = (props) => {
    const text = props.text;
    return (
        <TouchableOpacity 
            style={[styles.button, props.conditionalButtonStyle]}
            onPress={() => props.onPressHandler(text)}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 0.5,
        alignItems: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 2, 
    },
});

// onPress={() => props.onPressButton()}