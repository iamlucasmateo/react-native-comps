import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TodoList } from './src/Components/TodoList';
import { ListScreen } from './src/Components/ListScreen';
import { BoilerPlate } from './src/Components/BoilerScreen';
import { ButtonScreen } from './src/Components/ButtonScreen';
import { WeatherApp } from './src/Components/WeatherApp';
import { NavigationScreen } from './src/Components/NavigationScreen';
import { DoubleList } from './src/Components/DoubleList';


export default function App() {
  const renderItem = {
    todoList: <TodoList/>,
    basic: <Text>Basic Screen OK</Text>,
    list: <ListScreen/>,
    boiler: <BoilerPlate/>,
    button: <ButtonScreen/>, 
    navigation: <NavigationScreen/>,
    weather: <WeatherApp/>,
  }
  return (
        renderItem.navigation
  );
}

{/* <SafeAreaView style={styles.container}>
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={ButtonScreen}/>
</Stack.Navigator>
</NavigationContainer>
<StatusBar style="auto"/>
</SafeAreaView> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
