import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiService from '../../ApiService';
import ChartItemComponent from './ChartItemComponent';

const ChartComponent = ({ticker}) => {
  const [closePrices, setClosePrices] = useState([]);
  const [closeDates, setCloseDates] = useState([]);

  const handleHisoricalPricesRequest = useCallback(async (ticker) => {
    const results = await ApiService.getChart(ticker);
    if (results.length === 0) {
      console.log('Ticker Not Available')
    } else {
      results.forEach((item) => {
        setClosePrices((closePrices) => [...closePrices, item.close])
        setCloseDates((closeDates) => [...closeDates, item.date.slice(8)])
      })
    }
  }, [])

  useEffect(() => {
    if (closePrices.length === 0) {
      handleHisoricalPricesRequest(ticker);
    } else {
      console.log('Already Loaded Historical Prices');
    }
  }, [])

  return (
    <View>
      <View>
        <Text style={styles.ticker}>{ticker}</Text>
      </View>
      <View>
        {
          closePrices.length > 18 ?
          <ChartItemComponent
          closePrices={closePrices}
          closeDates={closeDates}
          /> : <Text>Loading</Text>
        }
      </View>
    </View>
  )
}

export default ChartComponent;

const styles = StyleSheet.create({
  ticker: {
    alignSelf: 'center',
    fontSize: 18,
  }
})
