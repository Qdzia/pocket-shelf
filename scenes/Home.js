import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import * as firebase from 'firebase';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* <Text>Hello {firebase.auth().currentUser.email}</Text> */}
      <Button title="Click me" onPress={() => navigation.navigate("Title", { titleId: "tt0944947" })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
});
