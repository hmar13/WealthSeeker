import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import WatchListItemsComponent from './WatchListItemsComponent';
import WatchListAddSymbolComponent from './WatchListAddSymbolComponent';
import WatchListEditListComponent from './WatchListEditListComponent';
import ApiService from '../../ApiService';

const WatchListComponent = ({ watchlist, userId, navigation }) => {
  const [userWatchlistInfo, setUserWatchlistInfo] = useState([]);

  const handleApiWatchlist = useCallback(async (ticker) => {
    const result = await ApiService.getTicker(ticker);
    if (!result || result.length ===0) {
      console.log('Ticker Not Available');
    } else {
      setUserWatchlistInfo((userWatchlistInfo) => ([...userWatchlistInfo, result]))
    }
  }, [])

  useEffect(() => {
    if (watchlist) {
      if(userWatchlistInfo.length === 0) {
        watchlist.forEach((ticker) => {handleApiWatchlist(ticker)})
      }
    } else {
      console.log('No Watchlist in WatchListComponent');
    }
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.watchlist__header}>
        <WatchListAddSymbolComponent
        setUserWatchlistInfo={setUserWatchlistInfo}
        watchlist={userWatchlistInfo}
        userId={userId}
        watchlist={watchlist}
        />

        <Text style={styles.title}>Watchlist</Text>

        <WatchListEditListComponent
          setUserWatchlistInfo={setUserWatchlistInfo}
          userId={userId}
          watchlist={watchlist}
        />
      </View>

      <View style={styles.watchlist__items}>
        <FlatList
        data={userWatchlistInfo}
        keyExtractor={item => item.symbol}
        renderItem={({ item }) => (
          <WatchListItemsComponent
          name={item.companyName}
          ticker={item.symbol}
          price={item.latestPrice}
          percentChange={item.changePercent}
          navigation={navigation}/>
        )
      }
        />
      </View>

    </View>
  )
}

export default WatchListComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  watchlist__header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  watchlist__items: {
    paddingBottom: '3%',
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
  },
})
