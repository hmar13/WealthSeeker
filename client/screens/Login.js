import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';

const Login = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeaderComponent />
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
});


export default Login;
