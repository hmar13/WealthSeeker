import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';


const Home = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeaderComponent />
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

// {/* <DiscoverComponent
// movies={movies}
// onDoAction={addOrRemove}
// /> */}

export default Home;

const styles = StyleSheet.create({
  watchlist: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
  },
})
