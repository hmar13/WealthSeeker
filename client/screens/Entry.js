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

      <View style={styles.buttons__container}>
        <Button
          buttonStyle={styles.buttons__login}
          title="Login"
          titleStyle={styles.buttons__login__title}
          type="outline"
          onPress={() => navigation.push(
            'Login'
          )}
        />
        <Button
          buttonStyle={styles.buttons__signup}
          title="Sign Up"
          titleStyle={styles.buttons__signup__title}
          type="outline"
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
  logo: {
    alignItems: 'center',
    paddingBottom: '10%'
  },
  catchphrase: {
    paddingBottom: '10%',
    fontSize: 40,
    alignSelf: 'center',
    fontFamily: 'born_ready_slanted',
    color: '#488AFF',
  },
  buttons__container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttons__login: {
    backgroundColor: '#488AFF',
    minWidth: 160,
    maxWidth: 250,
    minHeight: 60,
    maxHeight: 150,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  buttons__login__title :{
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  buttons__signup: {
    backgroundColor: '#FFBA05',
    minWidth: 160,
    maxWidth: 250,
    minHeight: 60,
    maxHeight: 150,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  buttons__signup__title: {
    color: 'black',
    fontSize: 20,
  },
});


export default Entry;
