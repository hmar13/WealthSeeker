import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import SvgBigLogoComponent from '../components/svg-components/SvgBigLogoComponent';



const Entry = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Text style={styles.title1}>Wealth<Text style={styles.title2}>Seeker</Text></Text>
      </View>

      <View style={styles.logo}>
        <SvgBigLogoComponent />
      </View>

      <Text style={styles.catchphrase}>Live Wealthy</Text>

      <View style={styles.buttons}>
        <Button
          title="Login"
          type="solid"
          onPress={() => navigation.push(
            'Login'
          )}
        />
        <Button
          title="Sign Up"
          type="solid"
          onPress={() => navigation.push(
            'SignUp'
          )}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  title: {
    alignItems: 'center',
  },
  title1: {
    fontWeight: 'bold',
    paddingVertical: '20%',
    fontSize: 40,
  },
  title2: {
    fontWeight: 'normal',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logo: {
    alignItems: 'center',
    paddingBottom: '15%'
  },
  catchphrase: {
    paddingBottom: '10%',
    fontSize: 40,
    alignSelf: 'center',
    fontFamily: 'born_ready_slanted',
    color: '#488AFF',
  }
});


export default Entry;
