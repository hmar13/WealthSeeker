import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import ApiService from '../../ApiService';

const WatchListEditListComponent = ({ setUserWatchlist, userId }) => {
  const [symbol, setSymbol] = useState();

  const handleDeleteSymbolDB = useCallback((ticker) => {
    ApiService.deleteTickerWatchlist({
      ticker: ticker.symbol,
      userId: userId
    })
  }, [])

  //FIX: Deletes the whole list and renders nothing
  const handleDeleteSymbol = useCallback((ticker) => {
    setUserWatchlist((watchlist) => {
      if (watchlist) {
        watchlist.filter(item => item !== ticker.symbol);
      }
    })
  })

  return (
    <View>
      <Button
        title="Delete Symbol"
        onPress={() => {
          handleDeleteSymbolDB({symbol})
          handleDeleteSymbol({symbol})
        }}
      />

      <Input
      placeholder="Ticker"
      onChangeText={value => setSymbol(value)}
      />
    </View>
  )
}

export default WatchListEditListComponent;
