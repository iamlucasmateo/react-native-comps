import React, { Component } from 'react';
import { Button, View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MenuButton } from './MenuButton';


export const ButtonScreen = (props) => {
    const screens = [
        { screenName: 'Boiler', },
        { screenName: 'List', },
        { screenName: 'BarCodeApp', },
        { screenName: 'DoubleList', },
        { screenName: 'Colors', },
        { screenName: 'ColorChanger', },
        { screenName: 'TextInputScreen', },
    ]
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            >
                <FlatList
                    keyExtractor={item => item.screenName}
                    data={screens}
                    renderItem={ ( { item } ) => {
                        return (
                            <MenuButton
                                text={`Go to ${item.screenName}`}
                                onPressHandler={() => props.navigation.navigate(item.screenName)}
                            />
                        )
                    }}
                />
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    background: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 50,
    },  
})