import React, { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import ApiService from '../ApiService';

const Login = ({ navigation }) => {
  //User Information State
  const [userInformation, setUserInformation] = useState([]);
  const [username, setUsername] = useState();
  const [userpassword, setUserPassword] = useState();

  //Handler to check Login Info
  const handleUserInformation = useCallback(async (data) => {
    const result = await ApiService.loginInformation(data);
    if (result) {
      setUserInformation(result);
    } else {
      setUserInformation([])
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
          if (userInformation.length > 0) {
            navigation.push('Home')
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
  },
});


export default Login;
