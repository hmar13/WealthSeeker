import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import WatchListItemsComponent from './WatchListItemsComponent';

const WatchListComponent = () => {
  return (
    <View style={styles.watchlist}>
      <View style={styles.watchlist__header}>
        <Button title="Add Symbol"/>
        <Text>Watchlist</Text>
        <Button title="Edit List"/>
      </View>

      <View style={styles.watchlist__items}>
        <WatchListItemsComponent />
      </View>
    </View>
  )
}

export default WatchListComponent;

const styles = StyleSheet.create({
  watchlist: {

  },
  watchlist__header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  watchlist__items: {

  },
})
