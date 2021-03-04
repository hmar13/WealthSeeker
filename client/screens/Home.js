import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderComponent from '../components/HeaderComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import WatchListComponent from '../components/WatchListComponent';

const Home = ({ route, navigation}) => {
  const [userInformation, setUserInformation] = useState(['empty']);

  useEffect(() => {
    setUserInformation(route.params.userInformation[0]);
  }, [])

  // console.log('Home', userInformation);

  return (
    <View style={styles.container}>

      <View>
        <HeaderComponent />
      </View>

      <View>
        <SearchBarComponent />
      </View>

      <View>
        <WatchListComponent watchlistItems={userInformation.userwatchlist}/>
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
