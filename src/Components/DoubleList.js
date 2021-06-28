import { green } from 'ansi-colors';
import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { SelectButton } from './SelectButton';
import { CompaniesList } from './CompaniesList';
import { CountriesList } from './CountriesList';

export const DoubleList = () => {
    const [ active, setActive ] = useState('Countries');
    const onPressHandler = (text) => {
        if (text !== active) {
            setActive(text);
        };
    }
    return (
        <SafeAreaView>
            <View style={styles.buttonView}>
                <SelectButton
                    text='Countries'
                    onPressHandler={onPressHandler}
                    conditionalButtonStyle={active === 'Countries' ? styles.buttonActive : styles.buttonInactive}
                />
                <SelectButton
                    text='Companies'
                    onPressHandler={onPressHandler}
                    conditionalButtonStyle={active === 'Companies' ? styles.buttonActive : styles.buttonInactive}
                />
            </View>
            { active === 'Countries' ? (
                <CountriesList/>
            ) : (
                <CompaniesList/>
            )}
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    buttonView: {
        flexDirection: 'row',
    },
    buttonActive: {
        backgroundColor: 'green',
        color: 'white',
    },
    buttonInactive: {
        backgroundColor: 'white',
        color: 'green',
    },
})
