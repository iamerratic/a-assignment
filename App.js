import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/Home.page';
import DetailsPage from './src/pages/Details.page';

var Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Hacker News' }} />
        <Stack.Screen name="Details" component={DetailsPage} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;