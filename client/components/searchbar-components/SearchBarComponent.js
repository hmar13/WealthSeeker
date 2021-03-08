import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import SvgMenuComponent from '../svg-components/SvgMenuComponent';
import SvgAccountComponent from '../svg-components/SvgAccountComponent';

const SearchBarComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu__container}>
        <SvgMenuComponent />
      </View>

      <View style={styles.input__container__outer}>
        <Input
        inputStyle={styles.input}
        inputContainerStyle={styles.input__container__inner}
        placeholder="Search Investments..."
        placeHolderTextColor={styles.placeholder}
        />
      </View>


      <View style={styles.account__container}>
        <SvgAccountComponent />
      </View>
    </View>
  )
}

export default SearchBarComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu__container: {
    paddingLeft: '5%',
  },
  input__container__outer: {
    width: '50%',
  },
  input__container__inner: {
    borderBottomWidth: 0,
  },
  input: {
    borderRadius: 12,
    // backgroundColor: '#CCE9F4',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  placeholder: {
    color: 'black',
  },
  account__container: {
    paddingRight: '5%',
  }
})
