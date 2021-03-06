import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import ApiService from '../ApiService';

const SignUp = ({ navigation }) => {
  //User Information State
  const [username, setUsername] = useState();
  const [userpassword, setUserPassword] = useState();
  const [useremail, setUserEmail] = useState();


  //Handler to Post New User Information
  const handleCreateUser = useCallback((data) => {
    return ApiService.createUser(data);
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeaderComponent />
      </View>

      <View style={styles.input__container1}>
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.input__container}
          placeholder="Username/Email"
          onChangeText={value => setUsername(value)}
        />
      </View>

      <View style={styles.input__container2}>
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.input__container}
          placeholder="Password"
          onChangeText={value => setUserPassword(value)}
        />
      </View>

      <View style={styles.input__container3}>
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.input__container}
          placeholder="Email"
          onChangeText={value => setUserEmail(value)}
        />
      </View>

      <Button
        buttonStyle={styles.button}
        titleStyle={styles.button__title}
        title="Create Account"
        type="solid"
        onPress={() =>
          {
            if(username.length > 5 && userpassword.length > 5 && useremail.length > 6) {
              handleCreateUser({username, userpassword, useremail})
              navigation.push('Login')
            }
          }}
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
    paddingBottom: '12.5%',
  },
  input__container1: {
    paddingBottom: '12.5%',
    paddingHorizontal: '10%',
  },
  input__container2: {
    paddingBottom: '12.5%',
    paddingHorizontal: '10%',
  },
  input__container3: {
    paddingBottom: '15%',
    paddingHorizontal: '10%',
  },
  input__container: {
    borderBottomWidth:0
  },
  input: {
    borderRadius: 12,
    paddingVertical: '8%',
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: '#b6d0ff',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#FFBA05',
    minWidth: 180,
    maxWidth: 250,
    minHeight: 60,
    maxHeight: 150,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  button__title: {
    color: 'black',
    fontSize: 20,
  },
});


export default SignUp;
