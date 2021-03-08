import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InvestmentDetailsChartComponent = ({historicalPrices}) => {
  const [dates, setDates] = useState();
  const [priices, setPrices] = useState();

  console.log(historicalPrices);

  return (
    <View>


      <Text>{historicalPrices ? historicalPrices[0].close : 'Loading'}</Text>
    </View>
  )
}

export default InvestmentDetailsChartComponent;

const styles = StyleSheet.create({})
