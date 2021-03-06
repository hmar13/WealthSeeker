import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import NewsComponent from '../components/information-components/NewsComponent';
import InvestmentDetailsComponent from '../components/information-components/InvestmentDetailsComponent';

const Information = ({ route }) => {
  // console.log( route.params.ticker) //TSLA

  return (
    <View>
      <HeaderComponent />

      <InvestmentDetailsComponent ticker={route.params.ticker ? route.params.ticker : null}/>

      <NewsComponent ticker={route.params.ticker ? route.params.ticker : null} />
    </View>
  )
}

export default Information;

const styles = StyleSheet.create({})