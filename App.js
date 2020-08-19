import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, RestaurantsScreen, RestaurantDetails } from "./src/screens";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} options={{headerShown:false}} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;