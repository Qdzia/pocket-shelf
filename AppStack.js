import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './scenes/Loading'
import Core from './scenes/Core'
import Title from './scenes/Title'

const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Core" component={Core} />
          <Stack.Screen name="Title" component={Title} />
        </Stack.Navigator>
    );
  }