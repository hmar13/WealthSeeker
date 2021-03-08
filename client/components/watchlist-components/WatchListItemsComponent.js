import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const WatchListItemsComponent = ({ ticker, name, price, percentChange, navigation }) => {

  return (
    <View style={styles.container1}>
    <TouchableHighlight onPress={() => navigation.push('Information', {
      ticker: name
    })}>
      <View style={styles.container2}>

        <View style={styles.name__container}>
          <Text style={styles.ticker}>{ticker}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.price__container}>
          <Text style={styles.price}>${price}</Text>
        </View>


        <View style={styles.percent__container}>
          <Text style={styles.percent}>{(percentChange * 100).toFixed(2)}%</Text>
        </View>

      </View>
    </TouchableHighlight>
    </View>
  )
}

export default WatchListItemsComponent;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    backgroundColor: '#ADE8FF',
    flexDirection: 'row',
  },
  name__container: {
    alignContent: 'center',
    backgroundColor: 'red',
    width: '50%',
  },
  ticker: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'center',
  },
  price__container: {
    backgroundColor: 'yellow',
    alignContent: 'center',
    width: '25%',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  percent__container: {
    backgroundColor: 'lightblue',
    alignContent: 'center',
    width: '25%',
  },
  percent: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
  },
})
