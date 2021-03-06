import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import NewsComponent from '../components/information-components/NewsComponent';
import InvestmentDetailsComponent from '../components/information-components/InvestmentDetailsComponent';

const Information = ({ route }) => {
  // console.log(route.params.ticker) //TSLA

  //Fetch News for API
  // const handleNewsFetch = useEffect(async (ticker) => {
  //   const result = await ApiService.
  // })

  return (
    <View>
      <HeaderComponent />

      <NewsComponent ticker={route.params.ticker ? route.params.ticker : null} />

      <InvestmentDetailsComponent ticker={route.params.ticker ? route.params.ticker : null}/>
    </View>
  )
}

export default Information;

const styles = StyleSheet.create({})