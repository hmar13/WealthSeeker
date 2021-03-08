import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgLogoComponent from './svg-components/SvgLogoComponent';

const HeaderComponent = () => {

  return (
    <View style={styles.container}>
      <SvgLogoComponent
      style={styles.svg}
      />
      <Text style={styles.header__title1}>Wealth<Text style={styles.header__title2}>Seeker</Text></Text>
      <View></View>

    </View>
  )
}

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFBA05',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  svg:{
    alignSelf: 'center',
  },
  header__title1: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 2,
  },
  header__title2: {
    fontWeight: 'normal',
  }
})
