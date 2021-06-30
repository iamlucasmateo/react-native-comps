import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ListScreen } from './ListScreen';
import { BoilerPlate } from './BoilerScreen';
import { ButtonScreen } from './ButtonScreen';
import { BarCodeApp } from './BarCodeApp';
import { DoubleList } from './DoubleList';
import { Colors } from './Colors';
import { ColorChanger } from './ColorChanger';
import { TextInputScreen } from './TextInputScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function NavigationScreen() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
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
              name="BarCodeApp"  
              component={BarCodeApp}
              options={{title: 'Bar Code'}}
            />
            <Stack.Screen 
              name="DoubleList"  
              component={DoubleList}
              options={{title: 'Double List'}}
            />
            <Stack.Screen 
              name="Colors"  
              component={Colors}
              options={{title: 'Colors App'}}
            />
            <Stack.Screen 
              name="ColorChanger"  
              component={ColorChanger}
              options={{title: 'Color Changer'}}
            />
            <Stack.Screen 
              name="TextInputScreen"  
              component={TextInputScreen}
              options={{title: 'Text Input'}}
            />
          </Stack.Navigator>
          <StatusBar style="auto"/>
        </NavigationContainer>
      
  );
}