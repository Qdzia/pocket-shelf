import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Explore({ openTitle }) {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
