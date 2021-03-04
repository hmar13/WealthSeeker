import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SafeViewAndroid from "./components/SafeViewAndroid";
import Entry from './screens/Entry';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {

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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView >
  );
}

export default App;