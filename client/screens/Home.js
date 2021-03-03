import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements';


const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.header__icon}></View>
        <Text style={styles.header__title1}>Wealth<Text style={styles.header__title2}>Seeker</Text></Text>
      </View>

      <View style={styles.searchbar}>
        <Input placeholder="Search Investments"/>
      </View>

      <View style={styles.watchlist}>
        <Button title="Add Symbol"/>
        <Text>Watchlist</Text>
        <Button title="Edit List"/>
      </View>
    </View>

  )
}

export default Home;

const styles = StyleSheet.create({
  watchlist: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  }
})
