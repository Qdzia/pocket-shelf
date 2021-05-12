import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./scenes/Loading";
import Title from "./scenes/Title";
import Header from "./components/atoms/Header";
import Explore from "./scenes/Explore";
import Home from "./scenes/Home";
import MyList from "./scenes/MyList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import AuthLogin from './scenes/AuthLogin'
import AuthRegister from './scenes/AuthRegister'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Hub() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="magnifying-glass" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyList}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="list-bullet" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hub"
        component={Hub}
        options={{
          headerTitle: (props) => <Header />,
          headerLeft: false,
        }}
      />
      <Stack.Screen
        name="AuthLogin"
        component={AuthLogin}
        options={{ headerTitle: (props) => <Header /> }}
      />
      <Stack.Screen
        name="AuthRegister"
        component={AuthRegister}
        options={{ headerTitle: (props) => <Header /> }}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerTitle: (props) => <Header /> }}
      />
      <Stack.Screen
        name="Title"
        component={Title}
        options={{ headerTitle: (props) => <Header /> }}
      />
    </Stack.Navigator>
  );
}
