import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.header__icon}></View>
        <Text style={styles.header__title1}>Wealth<Text style={styles.header__title2}>Seeker</Text></Text>
      </View>

      <Input placeholder="Username/Email"/>
      <Input placeholder="Password"/>

      <Button
        title="Login"
        type="solid"
        onPress={() => navigation.push(
          'Home'
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    alignItems: 'center',
  },
  header__icon: {

  },
  header__title1: {
    fontWeight: 'bold',
    paddingVertical: 0,
    fontSize: 20,
  },
  header__title2: {
    paddingVertical: 50,
    fontWeight: 'normal',
  }
});


export default Login;
