import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ListScreen } from './ListScreen';
import { BoilerPlate } from './BoilerScreen';
import { ButtonScreen } from './ButtonScreen';
import { WeatherApp } from './WeatherApp';
import { DoubleList } from './DoubleList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function NavigationScreen() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='DoubleList'>
            <Stack.Screen name="Home" component={ButtonScreen}/>
            <Stack.Screen 
              name="List"  
              component={ListScreen}
              options={{title: 'Lista'}}
            />
            <Stack.Screen 
              name="Boiler"  
              component={BoilerPlate}
              options={{title: 'Basic'}}
            />
            <Stack.Screen 
              name="WeatherApp"  
              component={WeatherApp}
              options={{title: 'Weather'}}
            />
            <Stack.Screen 
              name="DoubleList"  
              component={DoubleList}
              options={{title: 'Double List'}}
            />
          </Stack.Navigator>
          <StatusBar style="auto"/>
        </NavigationContainer>
      
  );
}