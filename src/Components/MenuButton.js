import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const MenuButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.onPressHandler()}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        backgroundColor: 'pink',
        color: 'green',
        textAlign: 'center',
        width: '100%',
    },
    buttonText: {
        textAlign: 'center',
    },
})