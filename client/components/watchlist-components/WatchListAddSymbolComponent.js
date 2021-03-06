import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import ApiService from '../../ApiService';

const WatchListAddSymbolComponent = ({ setUserWatchlist, userId, watchlist }) => {
  const [symbol, setSymbol] = useState();

  //Get the ticker information {} on click
  const handleApiCall = useCallback(async (ticker) => {
    const result = await ApiService.getTicker(ticker.symbol);
    if (!result || result.length === 0) {
      console.log('Ticker Not Available');
    } else {
      //Add to DB Watchlist
      ApiService.addToWatchlistDB({
        ticker: result.symbol,
        userId: userId
      })
      //FIX: Stop from adding Duplicate Symbols && Control When Ticker is not real
      setUserWatchlist((watchlist) => ([...watchlist, result.symbol]))
    }
  }, []);

  return (
    <View>
      <Button
        title="Add Symbol"
        onPress={() => {
          handleApiCall({symbol})
        }}
      />

      <Input
      placeholder="Ticker"
      onChangeText={value => setSymbol(value)}
      />
    </View>
  )
}

export default WatchListAddSymbolComponent;