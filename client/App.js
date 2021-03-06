import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SafeViewAndroid from "./components/SafeViewAndroid";
import Entry from './screens/Entry';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Information from './screens/Information';
import * as Font from 'expo-font';
import AppLoading  from 'expo-app-loading';

const Stack = createStackNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    "born_ready_slanted": require('./assets/fonts/born_ready_slanted.ttf'),
  })
}

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  //Custom fonts with Expo
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts} //calling the loadFonts helper Function
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.error('Error loading fonts: ', error)}
      />
    )
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Entry" component={Entry} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Information" component={Information} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView >
  );
}

export default App;