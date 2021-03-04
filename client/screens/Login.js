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
    if (result) {
      navigation.push('Home', {userInformation: result})
    } else {
      //TO DO: show error, shake;
    }
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <HeaderComponent />
      </View>

      <Input
        placeholder="Username/Email"
        onChangeText={value => setUsername(value)}
      />
      <Input
        placeholder="Password"
        onChangeText={value => setUserPassword(value)}
        />

      <Button
        title="Login"
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
  },
});


export default Login;
