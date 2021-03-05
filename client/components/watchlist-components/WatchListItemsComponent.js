import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const WatchListItemsComponent = ({ name, navigation }) => {

  return (
    <TouchableHighlight onPress={() => navigation.push('Information', {
      ticker: name
    })}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default WatchListItemsComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: '#ADE8FF',
    width: '100%',
  },
})
