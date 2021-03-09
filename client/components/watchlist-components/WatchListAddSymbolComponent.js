import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import ApiService from '../../ApiService';

const WatchListAddSymbolComponent = ({ setUserWatchlistInfo, watchlist, userId }) => {
  const [symbol, setSymbol] = useState();

  //Get the ticker information {} on click
  const handleApiCall = useCallback(async (ticker) => {
    const result = await ApiService.getTicker(ticker.symbol);
    if (!result || result.length === 0) {
      console.log('Ticker Not Available');
    } else {
      //Add to DB Watchlist
      ApiService.addToWatchlistDB({
        ticker: ticker.symbol.toUpperCase(),
        userId: userId
      })
      //FIX: Stop from adding Duplicate Symbols
      setUserWatchlistInfo((watchlist) => ([...watchlist, result]));
      setSymbol('');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.button__title}
        title="Add Symbol"
        type="solid"
        onPress={() => {
          handleApiCall({symbol})
        }}
      />

      <Input
      placeholder="Ticker"
      onChangeText={value => setSymbol(value)}
      value={symbol}
      // autoCapitalize="characters"
      // onEndEditing={() => {
      //   handleApiCall({symbol})
      // }}
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

export default WatchListAddSymbolComponent;