import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiService from '../ApiService';
import HeaderComponent from '../components/HeaderComponent';
import NewsComponent from '../components/information-components/NewsComponent';
import TickerInformation from '../components/information-components/TickerInformation';

const Information = ({ route }) => {
  console.log(route.params.ticker) //TSLA

  //Fetch News for API
  // const handleNewsFetch = useEffect(async (ticker) => {
  //   const result = await ApiService.
  // })

  return (
    <View>
      <HeaderComponent />

      <NewsComponent />

      <TickerInformation />
    </View>
  )
}

export default Information;

const styles = StyleSheet.create({})