import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './scenes/Loading'
import Explore from './scenes/Explore'

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
    );
  }