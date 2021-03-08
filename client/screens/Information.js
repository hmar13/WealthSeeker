import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import NewsComponent from '../components/information-components/NewsComponent';
import InvestmentDetailsComponent from '../components/information-components/InvestmentDetailsComponent';
import SearchBarComponent from '../components/searchbar-components/SearchBarComponent';

const Information = ({ route }) => {

  return (
    <View style={styles.container}>

      <View style={styles.header__container}>
        <HeaderComponent />
      </View>

      <SearchBarComponent />

      <View style={styles.chart__container}>
        <InvestmentDetailsComponent ticker={route.params.ticker ? route.params.ticker : null}/>
      </View>

      <View style={styles.news__container}>
        <NewsComponent ticker={route.params.ticker ? route.params.ticker : null} />
      </View>
    </View>
  )
}

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header__container: {

  },
  chart__container: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  news__container: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
})