import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens'; 
import Tabs from './navigation/Tabs';
enableScreens();
const AppStack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer >
        <AppStack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="false">
          <AppStack.Screen  name="Tabs"  component={Tabs} />
        </AppStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
