import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const Entry = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title1}>Wealth<Text style={styles.title2}>Seeker</Text></Text>
      </View>

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
    paddingVertical: 70,
    fontSize: 40,
  },
  title2: {
    paddingVertical: 50,
    fontWeight: 'normal',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});


export default Entry;
