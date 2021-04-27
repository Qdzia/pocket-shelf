import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./scenes/Loading";
import Core from "./scenes/Core";
import Title from "./scenes/Title";
import Header from "./components/atoms/Header";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerTitle: (props) => <Header /> }}
      />
      <Stack.Screen
        name="Core"
        component={Core}
        options={{
          headerTitle: (props) => <Header />,
          headerLeft: false
        }}
      />
      <Stack.Screen
        name="Title"
        component={Title}
        options={{ headerTitle: (props) => <Header /> }}
      />
    </Stack.Navigator>
  );
}
