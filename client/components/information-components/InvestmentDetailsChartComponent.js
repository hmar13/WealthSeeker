import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InvestmentDetailsChartComponent = ({historicalPrices}) => {

console.log('historicalPrices', historicalPrices)

  return (
    <View>
      <Text>{historicalPrices[0].close}</Text>
    </View>
  )
}

export default InvestmentDetailsChartComponent;

const styles = StyleSheet.create({})
