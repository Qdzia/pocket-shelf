import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Home({ openTitle }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="CLick me" onPress={() => openTitle("Harry")} />
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
