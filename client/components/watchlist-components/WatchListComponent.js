import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import WatchListItemsComponent from './WatchListItemsComponent';
import WatchListAddSymbolComponent from './WatchListAddSymbolComponent';
import WatchListEditListComponent from './WatchListEditListComponent';

const WatchListComponent = ({ watchlist, userId, navigation }) => {
  const [userWatchlist, setUserWatchlist] = useState();

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
        watchlist={watchlist}
        />

        <Text>Watchlist</Text>

        <WatchListEditListComponent
          setUserWatchlist={setUserWatchlist}
          userId={userId}
          watchlist={watchlist}
        />
      </View>

      <View style={styles.watchlist__items}>
        <FlatList
        data={userWatchlist}
        keyExtractor={item => item}
        renderItem={({ item }) =>
        <WatchListItemsComponent
        name={item}
        navigation={navigation}/>
      }
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
