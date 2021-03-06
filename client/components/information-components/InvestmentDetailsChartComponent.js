import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InvestmentDetailsChartComponent = ({historicalPrices}) => {

  return (
    <View>
      <Text>{historicalPrices ? historicalPrices[0].close : 'Loading'}</Text>
    </View>
  )
}

export default InvestmentDetailsChartComponent;

const styles = StyleSheet.create({})
