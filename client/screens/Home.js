import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import HeaderComponent from '../components/HeaderComponent';
import SearchBarComponent from '../components/searchbar-components/SearchBarComponent';
import WatchListComponent from '../components/watchlist-components/WatchListComponent';

const Home = ({ route, navigation }) => {
  const [userInformation, setUserInformation] = useState(null);

  useEffect(() => {
    if (route.params.userInformation) {
      setUserInformation(route.params.userInformation[0]);
    } else {
      console.log('No Watchlist');
    }
  }, [])

  return (
    <View style={styles.container}>

      <View>
        <HeaderComponent />
      </View>

      <View>
        <SearchBarComponent />
      </View>

      <View>
        {userInformation ? <WatchListComponent
          watchlist={userInformation.userwatchlist}
          userId={userInformation.id}
          navigation={navigation}
          />
          : null}
      </View>
    </View>

  )
}

export default Home;

const styles = StyleSheet.create({

})
