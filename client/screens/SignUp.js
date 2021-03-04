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

      <Input
        placeholder="Username/Email"
        onChangeText={value => setUsername(value)}
      />
      <Input
        placeholder="Password"
        onChangeText={value => setUserPassword(value)}
      />
      <Input
        placeholder="Email"
        onChangeText={value => setUserEmail(value)}
        />

      <Button
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
  },
});


export default SignUp;
