import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const getRandomInt = (minValue, maxValue) => {
    return Math.floor( Math.random() * (maxValue - minValue)) + minValue
};

const getRandomRGBValue = () => {
    return String(getRandomInt(0,255));
};

const getRandomColor = () => {
    return `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`
};

export const Colors = () => {
    const [colors, setColors] = useState([]);
    const onAddColor = () => {
        setColors(prev => [...prev, getRandomColor()]);
    };
    const onDeleteColor = () => {
        setColors(prev => prev.slice(0, prev.length - 1));
    }
    return (
        <View>
            <View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onAddColor}
                >
                    <Text>Add Color</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onDeleteColor}
                >
                    <Text>Delete Color</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    keyExtractor={item => item}
                    data={colors}
                    renderItem={ ( { item } ) => {
                        return (
                            <View 
                                style={[{backgroundColor: item}, styles.colorBox]}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        backgroundColor: '#aaa',
        margin: 5,
        width: '50%',
    },
    colorBox: {
        width: 40,
        height: 40,
        margin: 5, 
    }
})