import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import * as firebase from "firebase";
import { firebaseConfig } from "./Firebase";
import { View, StatusBar } from "react-native";
import { PRIMARY } from "./styles/Colors";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </View>
  );
}
