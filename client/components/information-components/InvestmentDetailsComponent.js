import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiService from '../../ApiService';
import InvestmentDetailsChartComponent from './InvestmentDetailsChartComponent';

const InvestmentDetailsComponent = ({ticker}) => {

  const [investmentStats, setInvestmentStats] = useState([]);
  const [historicalPrices, setHistoricalPrices] = useState([]);

  //Fetch Historical price endpoints to build charts
  const handleHisoricalPricesRequest = useCallback(async (ticker) => {
    const results = await ApiService.getChart(ticker);
    if (results.length === 0) {
      console.log('Ticker Not Available')
    } else {
      setHistoricalPrices(results);
    }
  }, [])

  //Fetch Investment Stats
  const handleInvestmentStatsRequest = useCallback(async (ticker) => {
    const result = await ApiService.getStats(ticker);
    if (result.length === 0) {
      console.log('Ticker Not Available');
    } else {
      setInvestmentStats(results);
    }
  }, [])

  //Fetch Investment Stats and Historical Prices
  useEffect(() => {
    handleInvestmentStatsRequest(ticker);
    handleHisoricalPricesRequest(ticker)
  }, [])

  return (
    <View>

      <View>
        <InvestmentDetailsChartComponent
        historicalPrices={historicalPrices.length > 0 ? historicalPrices : null}
        />
      </View>

      <View>
        <Text>Ticker Info</Text>
      </View>

    </View>
  )
}

export default InvestmentDetailsComponent;

const styles = StyleSheet.create({})
