import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { interpolateNode } from 'react-native-reanimated';
import { CountryItem } from './CountryItem';

export const CountriesList = () => {
    const countriesCopy = JSON.parse(JSON.stringify(countries));
    const sortFunction = (a, b) => {
        if (a.renewables > b.renewables) return -1
        else return 1
    }
    const sortedCountries = countriesCopy.sort(sortFunction);
    return (
        <View>
            <FlatList
                data={countries}
                keyExtractor={item => item.name}
                renderItem={({item}) => {
                    return ( 
                        <CountryItem
                            name={item.name}
                            renewables={item.renewables}
                        />
                    )}}
            />
        </View>
        
    )
}

const countries = [
    {
        name: 'Argentina',
        renewables: 100,
        imgFile: 'beach',
    },
    {
        name: 'Chile',
        renewables: 50,
        imgFile: 'forest',
    },
    {
        name: 'Brazil',
        renewables: 70,
        imgFile: 'mountain',
    }
]