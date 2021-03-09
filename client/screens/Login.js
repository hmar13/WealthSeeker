import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import ApiService from '../ApiService';

const Login = ({ navigation }) => {
  //User Information State
  const [username, setUsername] = useState();
  const [userpassword, setUserPassword] = useState();

  //Handler to check Login Info
  const handleUserInformation = useCallback(async (data) => {
    const result = await ApiService.loginInformation(data);
    if (result.length === 0) {
      console.log('Wrong username/password');
    } else {
      navigation.push('Home', {userInformation: result});
    }
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeaderComponent
          navigation={navigation}
        />
      </View>

      <View style={styles.input__container1}>
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.input__container}
          placeholder="Username"
          onChangeText={value => setUsername(value)}
        />
      </View>

      <View style={styles.input__container2}>
        <Input
          inputStyle={styles.input}
          inputContainerStyle={styles.input__container}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setUserPassword(value)}
          />
      </View>

      <Button
        buttonStyle={styles.button}
        title="Login"
        titleStyle={styles.button__title}
        type="solid"
        onPress={() => {
          handleUserInformation({username, userpassword})
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
    paddingBottom: '50%',
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


export default Login;
