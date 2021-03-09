import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import NewsComponent from '../components/information-components/NewsComponent';
import ChartComponent from '../components/information-components/ChartComponent';
import SearchBarComponent from '../components/searchbar-components/SearchBarComponent';

const Information = ({ route, navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.header__container}>
        <HeaderComponent
        navigation={navigation}
        />
      </View>

      <SearchBarComponent
        navigation={navigation}
      />

      <View style={styles.chart__container}>
        <ChartComponent ticker={route.params.ticker ? route.params.ticker : null}/>
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
  },
  news__container: {
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
})