import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import SvgLogoComponent from './svg-components/SvgLogoComponent';

const HeaderComponent = ({navigation}) => {

  const goBack = useCallback(() => {
    navigation.goBack();
  })

  return (

      <View style={styles.container}>
        <TouchableHighlight
        onPress={goBack}
        underlayColor="#ffffff"
        >

          <View style={styles.container2}>
            <SvgLogoComponent
            style={styles.svg}
            />
            <Text style={styles.header__title1}>Wealth<Text style={styles.header__title2}>Seeker
            </Text></Text>
            <View></View>
          </View>

        </TouchableHighlight>
      </View>

  )
}

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFBA05',
    width: '100%',
  },
  container2: {
    width: '95%',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
