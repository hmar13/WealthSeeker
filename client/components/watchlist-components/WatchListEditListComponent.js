import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import ApiService from '../../ApiService';

const WatchListEditListComponent = ({ setUserWatchlistInfo, userId }) => {
  const [symbol, setSymbol] = useState();

  const handleDeleteSymbolDB = useCallback((ticker) => {
    ApiService.deleteTickerWatchlist({
      ticker: ticker.symbol,
      userId: userId
    })
  }, [])

  //Delete Symbol in userWatchlist
  const handleDeleteSymbol = useCallback((ticker) => {
    setUserWatchlistInfo((watchlist) => {
      if (watchlist) {
        console.log('watchlist', watchlist[0].symbol)
        return watchlist.filter(item => item.symbol !== ticker.symbol);
      }
    })
  })


  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.button__title}
        title="Delete Symbol"
        type="solid"
        onPress={() => {
          handleDeleteSymbolDB({symbol})
          handleDeleteSymbol({symbol})
        }}
      />

      <Input
      placeholder="Ticker"
      onChangeText={value => setSymbol(value.toUpperCase())}
      autoCapitalize="characters"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#E5E5E5',
    minWidth: 100,
    maxWidth: 150,
    minHeight: 40,
    maxHeight: 90,
    borderRadius: 20,
  },
  button__title: {
    color: 'black',
    fontSize: 12,
  },
})

export default WatchListEditListComponent;
