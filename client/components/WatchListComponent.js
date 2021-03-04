import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import WatchListItemsComponent from './WatchListItemsComponent';

const WatchListComponent = ({ watchlistItems, navigation }) => {
  const [userWatchlist, setUserWatchlist] = useState(['empty']);

  useEffect(() => {
    if (watchlistItems) {
      setUserWatchlist(watchlistItems);
    }
  }, [])

  // console.log('WatchListComponent', userWatchlist);

  return (
    <View style={styles.watchlist}>

      <View style={styles.watchlist__header}>
        <Button title="Add Symbol"/>
        <Text>Watchlist</Text>
        <Button title="Edit List"/>
      </View>

      <View style={styles.watchlist__items}>
      <FlatList
      data={userWatchlist}
      keyExtractor={item => item}
      renderItem={({ item }) => <WatchListItemsComponent name={item} />}
      />

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
