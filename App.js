import 'react-native-gesture-handler';
import React from 'react';
import {HomeScreen, CameraView, ImageComponent} from './src/components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

setTimeout(function () {
  SplashScreen.hide();
}, 1200);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="CameraView"
          component={CameraView}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="ImageComponent"
          component={ImageComponent}
          options={{headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
