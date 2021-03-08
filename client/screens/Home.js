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

      <View style={styles.header__container}>
        <HeaderComponent />
      </View>

      <View style={styles.searchbar__container}>
        <SearchBarComponent
          navigation={navigation}
        />
      </View>

      <View style={styles.watchlist__container}>
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
  container: {
    flex: 1,
  },
  header__container: {
  },
  searchbar__container: {
  },
  watchlist__container: {
    flex: 8,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  }
})
