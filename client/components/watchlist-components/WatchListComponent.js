import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import WatchListItemsComponent from './WatchListItemsComponent';
import WatchListAddSymbolComponent from './WatchListAddSymbolComponent';

const WatchListComponent = ({ watchlist, userId }) => {
  const [userWatchlist, setUserWatchlist] = useState(['Nothing here..']);

  //Save watchlist in state userWatchlist
  useEffect(() => {
    if (watchlist) {
      setUserWatchlist(watchlist);
    } else {
      console.log('No Watchlist in WatchListComponent');
    }
  }, [])

  return (
    <View style={styles.watchlist}>

      <View style={styles.watchlist__header}>
        <WatchListAddSymbolComponent
        setUserWatchlist={setUserWatchlist}
        userId={userId}
        />
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
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  watchlist__header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  watchlist__items: {
    alignItems: 'center',
  },
})
