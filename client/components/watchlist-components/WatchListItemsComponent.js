import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const WatchListItemsComponent = ({ ticker, name, price, percentChange, navigation }) => {
  const [greenRed, setGreenRed] = useState('#FF0000')

  // console.log(greenRed)

  useEffect(() => {
    if ((percentChange > 0) && (percentChange !== null)) {
      setGreenRed('#34A119');
    } else {
      setGreenRed('#FF0000');
    }
  },[])

  return (
    <View style={styles.container1}>
    <TouchableHighlight
    onPress={() => navigation.push('Information', {
      ticker: ticker
    })}
    underlayColor="#ffffff"
    >
      <View style={styles.container2}>

        <View style={styles.name__container}>
          <Text style={styles.ticker}>{ticker}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.price__container}>
          <Text style={styles.price}>${price}</Text>
        </View>


        <View style={[styles.percent__container, {backgroundColor: greenRed}]}>
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
    paddingHorizontal: '2%',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  name__container: {
    width: '40%',
  },
  ticker: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: '5%',
  },
  name: {
    paddingLeft: '5%',
    fontSize: 10,
  },
  price__container: {
    width: '25%',
    alignSelf: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  percent__container: {
    // alignContent: 'center',
    width: '25%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  percent: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    paddingVertical: 4,
  },
})
