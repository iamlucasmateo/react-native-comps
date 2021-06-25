import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ImageEditor, Button } from 'react-native';

import { AddInput } from './input';

export function TodoList() {
  const [list, setList] = useState(['primero', 'segundo']);
  const updateList = (newList) => {
    setList(prevState => prevState.concat(newList));
  }
  const handlePress = clickedItem => {
    const newList = list.filter(item => item != clickedItem);
    setList(prev => newList);
  }
  const onPressInit = () => {
    setList(() => ['primero'])
  }
  return (
    <SafeAreaView style={styles.container}>
      <AddInput
        updateList={updateList}
      />
      <FlatList
        data={list}
        renderItem={item => (
          <Text onPress={() => handlePress(item.item)} name={item.item}>
            {item.item}
          </Text>
        )}
        keyExtractor={item => item}
      />
      <Button
        onPress={onPressInit}
        title="Init"
        color="#841584"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
