import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeaderComponent />
      </View>

      <Input placeholder="Username/Email"/>
      <Input placeholder="Password"/>
      <Input placeholder="Email"/>

      <Button
        title="Create Account"
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


export default SignUp;
