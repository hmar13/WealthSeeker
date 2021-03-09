import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiService from '../../ApiService';
import ChartItemComponent from './ChartItemComponent';

const ChartComponent = ({ticker}) => {

  // const [investmentStats, setInvestmentStats] = useState([]);
  const [closePrices, setClosePrices] = useState([]);
  const [closeDates, setCloseDates] = useState([]);

  //Fetch Historical close prices to build chart
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

  //Fetch Investment Stats
  // const handleInvestmentStatsRequest = useCallback(async (ticker) => {
  //   const result = await ApiService.getStats(ticker);
  //   if (result.length === 0) {
  //     console.log('Ticker Not Available');
  //   } else {
  //     setInvestmentStats(results);
  //     console.log('results', results);
  //   }
  // }, [])

  //Fetch Investment Stats and Historical Prices
  useEffect(() => {
    // handleInvestmentStatsRequest(ticker);
    if (closePrices.length === 0) {
      handleHisoricalPricesRequest(ticker);
    } else {
      console.log('Already Loaded Historical Prices');
    }
  }, [])




  return (
    <View>
      {
        closePrices.length > 18 ?
        <ChartItemComponent
        closePrices={closePrices}
        closeDates={closeDates}
        /> : <Text>Loading</Text>
      }
      <View>
        <Text>Ticker Info</Text>
      </View>

    </View>
  )
}

export default ChartComponent;

const styles = StyleSheet.create({})
