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
    flex: 1,
    width: '50%',
    paddingHorizontal: 10,
  },
  input__container__inner: {
    borderBottomWidth:0,
  },
  input: {
    borderRadius: 6,
    backgroundColor: '#D9F4FF',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  account__container: {
    paddingRight: '5%',
  }
})
