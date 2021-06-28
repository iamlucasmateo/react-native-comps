import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CountriesImages } from './CountriesImages';

export const CountryItem = props => {
    return (
        <View style={styles.listItem}>
            <View>
                <Text>{props.name}</Text>
            </View>
            <Image source={CountriesImages[props.name]} style={{height: 20, width: 20}}/>
            <View>
                <Text>{props.renewables}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    },
})