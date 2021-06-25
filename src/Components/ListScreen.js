import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const randomIdFuncWrapper = () => {
    const ids = [];
    const innerReturn = () => {
        let value;
        let count = 0;
        do {
            value = String(Math.random());
            count += 1;
        } while (ids.includes(value) && count < 5000);
        ids.push(value);
        return value;
    }
    return innerReturn;
}

const getRandomId = randomIdFuncWrapper();

const getRandomAge = () => String(Math.floor(Math.random()*70+18))

export const ListScreen = () => {
    const friends = [
        { name: 'Friend #B', age: getRandomAge() },
        { name: 'Friend #2', age: getRandomAge() },
        { name: 'Friend #3', age: getRandomAge() },
        { name: 'Friend #4', age: getRandomAge() },
        { name: 'Friend #5', age: getRandomAge() },
        { name: 'Friend #6', age: getRandomAge() },
        { name: 'Friend #7', age: getRandomAge() },
    ]
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={false}
            data={friends}
            renderItem={({item}) => {
                return (
                    <View style={styles.textStyle}>
                        <Text>Name: {item.name}</Text>
                        <Text>Age: {item.age}</Text>
                    </View>
                )
            }}
            keyExtractor={item => getRandomId()}
        />
    ) 
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        marginRight: 15,
    }
});

