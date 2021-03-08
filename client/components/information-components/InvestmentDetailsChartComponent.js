import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { LineChart, Grid } from 'react-native-svg-charts';

const InvestmentDetailsChartComponent = ({historicalPrices}) => {

  console.log(historicalPrices);

  return (
    <View>


      <Text>{historicalPrices ? historicalPrices[0].close : 'Loading'}</Text>
    </View>
  )
}

export default InvestmentDetailsChartComponent;

const styles = StyleSheet.create({})
