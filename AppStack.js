import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "./scenes/Loading";
import Title from "./scenes/Title";
import Header from "./components/atoms/Header";
import Explore from "./scenes/Explore";
import MyList from "./scenes/MyList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import AuthLogin from "./scenes/AuthLogin";
import AuthRegister from "./scenes/AuthRegister";
import { PRIMARY, ACCENT, SECONDARY, TEXT } from "./styles/Colors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Hub() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: ACCENT,
        inactiveTintColor: SECONDARY,
        style: { backgroundColor: PRIMARY },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="magnifying-glass" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyList}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="list-bullet" size={24} color={color} />
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
        name="AuthLogin"
        component={AuthLogin}
        options={{
          title: "Welcome in Pocket Shelf",
          headerStyle: {
            backgroundColor: PRIMARY,
          },
          headerTintColor: TEXT,
        }}
      />
      <Stack.Screen
        name="Hub"
        component={Hub}
        options={{
          headerTitle: () => <Header />,
          headerLeft: false,
          headerStyle: {
            backgroundColor: PRIMARY,
          },
        }}
      />
      <Stack.Screen
        name="AuthRegister"
        component={AuthRegister}
        options={{
          title: "Join Pocket Shelf",
          headerStyle: {
            backgroundColor: PRIMARY,
          },
          headerTintColor: TEXT,
        }}
      />

      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: PRIMARY,
          },
        }}
      />
      <Stack.Screen
        name="Title"
        component={Title}
        options={{
          title: "Title Description",
          headerStyle: {
            backgroundColor: PRIMARY,
          },
          headerTintColor: TEXT,
        }}
      />
    </Stack.Navigator>
  );
}
