import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderComponent from '../components/HeaderComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import WatchListComponent from '../components/WatchListComponent';


const Home = () => {
  return (
    <View style={styles.container}>

      <View>
        <HeaderComponent />
      </View>

      <View>
        <SearchBarComponent />
      </View>

      <View>
        <WatchListComponent />
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

})
